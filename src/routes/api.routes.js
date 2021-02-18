import { Router } from 'express';
import { migrator, integrator } from '../services/integration.service';

const router = Router();

let routine = false;

router.get('/migrate', async (req, res) => {
    const result = await migrator();
    res.json({
        success: true,
        migrated: result,
        warning: 'Migrate only syncs Pipedrive with Bling without generating daily reports. Use this only on first run.'
    });
});

router.get('/sync', async (req, res, nxt) => {
    const result = await integrator();
    res.json({
        success: true,
        synced: result,
        warning: 'Sync is manual only, to begin daily syncing use /auto and /auto?stop=true to stop routine'
    })
})

router.get('/auto', async (req, res) => {
    const { stop } = req.query;
    if (stop && typeof routine !== 'boolean') {
        clearInterval(routine);
        res.json({
            success: true,
            warning: 'Sync stopped. Services won\'t sync and no daily reports will be filed'
        })
    } else if (stop && typeof routine === 'boolean') {
        res.json({
            success: false,
            warning: 'No sync routine running so none stopped.'
        })
    } else if (typeof routine !== 'boolean') {
        res.json({
            success: false,
            warning: 'Sync routine is already runnning.'
        })
    } else if (typeof routine === 'boolean') {
        const result = await integrator();
        routine = setInterval(() => integrator(), 86400000);
        res.json({
            success: true,
            synced: result,
            warning: 'Sync routine started, services will be synced and daily reports filed every 24 hours.'
        });
    }
})

export default router;
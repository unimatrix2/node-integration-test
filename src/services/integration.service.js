import AppError from '../errors/AppError';
import { pipedriveDaily, getPipedriveWon } from '../repositories/pipedrive.repository';
import { postBling } from '../repositories/bling.repository';
import { storeResumo, getLatestResumo } from '../repositories/db.repository';

export const integrator = async () => {
    const pipeData = await pipedriveDaily();
    await registrar(pipeData);
    pipeData.map(elem => postBling(elem));
    Promise.all(pipeData);
}

export const registrar = async data => {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    const latest = await getLatestResumo()
    if (latest && latest.ref_dia.getTime() > yesterday) { return 0 }
    await storeResumo(data);
}
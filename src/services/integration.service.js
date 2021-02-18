import AppError from '../errors/AppError';
import { pipedriveDaily, pipeDriveMigration } from '../repositories/pipedrive.repository';
import { postBling } from '../repositories/bling.repository';
import { storeResumo, getLatestResumo, getResumos } from '../repositories/db.repository';

export const integrator = async () => {
    const pipeData = await pipedriveDaily();
    const stored = await registrar(pipeData);
    pipeData.map(elem => postBling(elem));
    Promise.all(pipeData);
    return stored;
};

export const registrar = async data => {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    const latest = await getLatestResumo()
    if (latest && latest.ref_dia.getTime() > yesterday) { return 0 }
    const stored = await storeResumo(data);
    return stored;
};

export const migrator = async () => {
    const pipeData = await pipeDriveMigration();
    const returnData = JSON.parse(JSON.stringify(pipeData));
    pipeData.map(elem => postBling(elem));
    Promise.all(pipeData);
    return returnData;
};

export const reporter = async () => {
    const reports = await getResumos();
    return reports;
}
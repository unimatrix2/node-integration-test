import AppError from '../errors/AppError';
import { pipedriveDaily, getPipedriveWon } from '../repositories/pipedrive.repository';
import { postBling } from '../repositories/bling.repository';

export const integrator = async () => {
    const pipeData = await pipedriveDaily();
    pipeData.map(elem => postBling(elem));
    Promise.all(pipeData)
}

import axios from 'axios';
import AppError from '../errors/AppError';
import { pipedriveDateMapper, pipedriveToBling } from '../mappers/Pipedrive.mapper';

export const getPipedriveWon = async () => {
    const data = await axios.get(`${process.env.PIPEDRIVE_BASE_URL}/deals?status=won&api_token=${process.env.PIPEDRIVE_API_TOKEN}`);
    if (data.data.data === null) { return 0 }
    return data.data;
}

export const pipedriveDaily = async () => {
    const wonDeals = await getPipedriveWon();
    if (wonDeals === 0) { return wonDeals }
    else { return pipedriveToBling(pipedriveDateMapper(wonDeals)) }
};

export const pipeDriveMigration = async () => {
    const wonDeals = await getPipedriveWon();
    if (wonDeals === 0) { return wonDeals }
    else { return pipedriveToBling(wonDeals) }
}
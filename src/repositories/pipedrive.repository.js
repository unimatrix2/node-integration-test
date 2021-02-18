import axios from 'axios';
import AppError from '../errors/AppError';

export const getPipedriveWon = () => {
    axios.get(`${process.env.PIPEDRIVE_BASE_URL}/deals?status=won&api_token=${process.env.PIPEDRIVE_API_TOKEN}`)
        .then(data => {
            if (data.data.data === null) { return 0 }
            else { console.log(data.data.data) };
        })
        .catch(err => { throw new AppError(err) });
}
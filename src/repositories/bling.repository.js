import axios from 'axios';
import json2xml from 'json2xml';
import AppError from '../errors/AppError';
import { dateToQueryFormat } from '../utils/dateConverter';

export const getBlingDaily = async () => {
    const date = dateToQueryFormat();
    const data = await axios.get(`${process.env.BLING_BASE_URL}${process.env.BLING_API_KEY}${process.env.BLING_QUERY}[${date} TO ${date}]`);
    if (data.data.retorno.erros[0].erro) {
        throw new AppError({ message: data.data.retorno.erros[0].erro.msg, type: 'Error-Bling-Call', status: 400 })
    }
    return data.data;
};

export const postBling = (obj) => {
    axios.post(`${process.env.BLING_BASE_URL}${process.env.BLING_API_KEY}&xml=${json2xml(obj)}`)
        .then(() => console.log('Sucess!'))
        .catch(err => console.log(err.data))
}
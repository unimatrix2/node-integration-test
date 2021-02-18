import axios from 'axios';
import AppError from '../errors/AppError';
import { dateToQueryFormat } from '../utils/dateConverter';

export const getBlingDaily = () => {
    const date = dateToQueryFormat()
    axios.get(`${process.env.BLING_BASE_URL}${process.env.BLING_API_KEY}${process.env.BLING_QUERY}[${date} TO ${date}]`)
        .then(data => {
            if (data.data.retorno.erros[0].erro) {
                throw new AppError({ message: data.data.retorno.erros[0].erro.msg, type: 'Error-Bling-Call', status: 400 })
            }
            console.log(data.data.retorno)
        })
};
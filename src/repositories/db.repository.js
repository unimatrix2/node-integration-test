import { Resumo } from '../models/Resumo.model';
import AppError from '../errors/AppError';

export const storeResumo = async (obj) => {
    try {
        const newResumo = new Resumo({...obj});
        await newResumo.save();
        return newResumo;
    } catch (error) {
        throw new AppError({ message: error.message, type: 'Resumo-Store', status: 400 })
    }
};

export const getResumos = async () => {
    try {
        const resumos = await Resumo.find({});
        return resumos;
    } catch (error) {
        throw new AppError({ message: error.message, type: 'Resumo-Get', status: 400 })
    }
};
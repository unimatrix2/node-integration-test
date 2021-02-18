import { Resumo } from '../models/Resumo.model';
import AppError from '../errors/AppError';
import { resumoMaker } from '../mappers/Resumo.mapper';

export const storeResumo = async (obj) => {
    try {
        const newResumo = new Resumo(resumoMaker(obj));
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

export const getLatestResumo = async () => {
    try {
        const resumo = await Resumo.findOne().sort({ createdAt: -1 }).limit(1);
        return resumo;
    } catch (error) {
        throw new AppError({ message: error.message, type: 'Resumo-GetLatest', status: 400 })
    }
}
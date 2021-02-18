import { Schema, model } from 'mongoose';
import joi from 'joi';
import AppError from '../errors/AppError';

const resumoSchema = new Schema(
    {
        pedidos: [{ type: Number }],
        total_pedidos: { type: Number, required: true },
    }, { timestamps: true }
);

export const Resumo = model('Bling-Daily', resumoSchema);
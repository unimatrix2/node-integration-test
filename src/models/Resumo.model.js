import { Schema, model } from 'mongoose';

const resumoSchema = new Schema(
    {
        ref_dia: { type: Date, required: true },
        total_pedidos: { type: Number, required: true },
    }, { timestamps: true }
);

export const Resumo = model('Bling-Daily', resumoSchema);
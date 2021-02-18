import joi from 'joi';
import AppError from '../errors/AppError';

const blingSchemaValidation = {
    pedido: joi.object().keys({
        cliente: joi.object().keys({
            nome: joi.string().trim().max(80)
        }),
        itens: joi.object().keys({
            item: joi.array().items(joi.object().keys({
                descricao: joi.string().trim().max(120),
                    vlr_unit: joi.number(),
                    qtde: joi.number(),
                    codigo: joi.number()
            }))
        }),
        numero: joi.number(),
        data: joi.string().max(10)
    })
}

const blingSchema = joi
    .object(blingSchemaValidation)
    .options({ abortEarly: false });

export const validateBlingSchema = obj => {
    const joiValidation = blingSchema.validate(obj);
    if (joiValidation.error) {
        const error = joiValidation.error.details.reduce((acc, err) => {
            acc[err.context.label] = error.message;
            return acc;
        }, {});
        throw new AppError({
            message: error,
            type: 'Error-Bling-Schema',
            status: 400
        });
    }
    return obj;
}
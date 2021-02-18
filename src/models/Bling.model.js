import joi from 'joi';
import AppError from '../errors/AppError';

const blingSchemaValidation = {
    pedido: {
        cliente: {
            nome: joi.string().trim().max(80)
        },
        itens: {
            item: [
                {
                    descricao: joi.string().trim().max(120),
                    vlr_unit: joi.number(),
                    qtde: joi.number(),
                    codigo: joi.number()
                }
            ]
        }
    }
};

const blingSchema = joi
    .object(blingSchemaValidation)
    .options({ abortEarly: false });

export const validateBlingSchema = (req, res, nxt) => {
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
    return nxt();
}
import { dateToQueryFormat } from '../utils/dateConverter';

export const pipedriveToBling = obj => {
    return {
        pedido: {
            cliente: {
                nome: dataObj.data[0].person_name
            },
            itens: {
                item: [
                    {
                        descricao: dataObj.data[0].title,
                        vlr_unit: dataObj.data[0].value,
                        qtde: 1,
                        codigo: 1
                    }
                ]
            },
            data: dateToQueryFormat(new Date(dataObj.data[0].won_time))
        }
    }
};

export const blingToMongo = obj => {
    
}
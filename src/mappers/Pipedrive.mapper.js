import { dateToQueryFormat } from '../utils/dateConverter';

export const pipedriveToBling = obj => {
    return {
        pedido: {
            cliente: {
                nome: obj.data[0].person_name
            },
            itens: {
                item: [
                    {
                        descricao: obj.data[0].title,
                        vlr_unit: obj.data[0].value,
                        qtde: 1,
                        codigo: 1
                    }
                ]
            },
            data: dateToQueryFormat(new Date(obj.data[0].won_time))
        }
    }
};

export const pipedriveDateMapper = obj => {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    obj.data.forEach(elem => {
        elem.won_time = new Date(elem.won_time).getTime();
    });
    return obj.data.filter(elem => elem.won_time > yesterday);
};

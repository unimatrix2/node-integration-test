import { dateToQueryFormat } from '../utils/dateConverter';

export const pipedriveToBling = obj => {
    return obj.data.map(elem => {
        return {
            pedido: {
                cliente: {
                    nome: elem.person_name
                },
                itens: {
                    item: [
                        {
                            descricao: elem.title,
                            vlr_unit: elem.value,
                            qtde: 1,
                            codigo: 1
                        }
                    ]
                },
                numero: elem.id,
                data: dateToQueryFormat(new Date(elem.won_time))
            }
        }
    })
};

export const pipedriveDateMapper = obj => {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    obj.data.forEach(elem => {
        elem.won_time = new Date(elem.won_time).getTime();
    });
    const data = obj.data.filter(elem => elem.won_time > yesterday);
    return {...obj, data: data}
};

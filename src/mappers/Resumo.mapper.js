export const resumoMaker = obj => {
    const total = obj.reduce((acc, curr) => acc += curr.pedido.itens.item[0].vlr_unit, 0);
    return { total_pedidos: total, ref_dia: new Date() }
}
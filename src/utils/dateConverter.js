export const dateToQueryFormat = (date) => {
    if (date) {
        const returnDate = JSON.stringify(date).slice(1, 11).split('-');
        return `${returnDate[2]}/${returnDate[1]}/${returnDate[0]}`
    } else {
        const today = JSON.stringify(new Date()).slice(1, 11).split('-');
        return `${today[2]}/${today[1]}/${today[0]}`
    }
};
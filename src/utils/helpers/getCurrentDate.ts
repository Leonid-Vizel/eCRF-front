export const getCurrentDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let strMonth = '';
    let strDay = '';

    if (month <= 9) {
        strMonth = '0' + month;
    } else {
        strMonth = month.toString();
    }

    if (day <= 9) {
        strDay = '0' + day;
    } else {
        strDay = day.toString();
    }

    return `${year}-${strMonth}-${strDay}`;
};

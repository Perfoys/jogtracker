export function formatDate(date) {
    let tempDate = new Date(date);
    let day = '' + tempDate.getDate();
    let month = '' + (tempDate.getMonth() + 1);
    let year = tempDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('.');
}
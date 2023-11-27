/*
 * Function to format a date on the format: 01 Jan 2020
 * @param {String} dateString - Date string to be formatted
 * @return {String} - Formatted date string
**/
export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}

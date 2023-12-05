const formatDate = (date) => {
    const dateValue = new Date(date);
    let hours = dateValue.getHours() < 10 ? `0${dateValue.getHours()}` : dateValue.getHours();
    let min = dateValue.getMinutes() < 10 ? `0${dateValue.getMinutes()}` : dateValue.getMinutes();
    let second = dateValue.getSeconds() < 10 ? `0${dateValue.getSeconds()}` : dateValue.getSeconds();
    let day = dateValue.getDate() < 10 ? `0${dateValue.getDate()}` : dateValue.getDate();
    let month = dateValue.getMonth() + 1 < 10 ? `0${dateValue.getMonth() + 1}` : dateValue.getMonth() + 1;
    let year = dateValue.getFullYear() < 10 ? `0${dateValue.getFullYear()}` : dateValue.getFullYear();
    return `${hours}:${min}:${second} - ${day}/${month}/${year}`;
}

export default formatDate;
module.exports = {
    format_date: (date) => {
        var month = date.getMonth() + 1;
        var dayOfMonth = date.getDate();
        var year = date.getFullYear();
        return endDate = `${month}/${dayOfMonth}/${year}`
    }
}
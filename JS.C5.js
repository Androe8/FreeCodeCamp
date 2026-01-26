function truncateString(string, num) {
    if (string.length > num) {
        return string.slice(0, num) + '...';
    }else{
        return string;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// You will see the information about every lab on the LabsContext folder.
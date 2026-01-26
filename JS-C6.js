function confirmEnding(string,string2){
    if(string.slice(-string2.length)===string2){
        return true;
    }else{
        return false;
    }
}
 const result = confirmEnding("Bastian", "n");
 console.log(result);
// You will see the information about every lab on the LabsContext folder.
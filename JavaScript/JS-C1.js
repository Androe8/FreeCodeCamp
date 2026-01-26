// You will see the information about every lab on the LabsContext folder.
// Named with the file name.
let count = 0;
function cardCounter(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    ++count
    break;
    case 7:
    case 8:
    case 9:
    count+=0;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    --count;
  
}
if(count >0 && count <=10 ){
      return `${count} Bet`
    } else{
      return `${count} Hold`
    }
}

 console.log(cardCounter(2))
 console.log(cardCounter("J"))
 console.log(cardCounter(9))
 console.log(cardCounter(2))
 console.log(cardCounter(7))

 //if you want to run this code, please install Node.js in your computer
 //then run the command "node JS-C1.js" in your terminal and see the results.    
const lunches = [];

function addLunchToEnd(array, str){
  array.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, str){
  array.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array){
  if(array.length !=0){
    const removedItem = array.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.")
  }
  return array;
}

function removeFirstLunch(array){
  const lunchItem = array.shift()
  if(array.length !=0){
  console.log(`${lunchItem} removed from the start of the lunch menu.`)
  }else{
    console.log("No lunches to remove.")
  }
  return array;
}

function getRandomLunch(array){
  if(array.length >0){
    const randomItem = Math.floor(Math.random()* array.length)
    const lunchItem = array[randomItem]
    console.log(`Randomly selected lunch: ${lunchItem}`)
  }else{
   console.log("No lunches available.")
  }
  return
}

function showLunchMenu(array){
  if(array.length >0){
    const separate = array.join(", ")
    console.log(`Menu items: ${separate}`)
  }else{
    console.log("The menu is empty.")
  }
}

addLunchToEnd(lunches, "Tacos")
addLunchToEnd(["Pizza", "Tacos"], "Burguer")
addLunchToStart(lunches, "Sushi")
addLunchToStart(["Burguer", "Sushi"], "Pizza")
removeLastLunch(["Stew", "Soup", "Toast"])
getRandomLunch(lunches)
showLunchMenu(["Greens", "Corns", "Beans"])
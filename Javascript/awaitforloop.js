const fruitsToGet = ['apple', 'grape', 'pear'];

const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


const getNumFruit = fruit => {
  return sleep(1000).then(v => fruitBasket[fruit])
}



const forLoop = async ()=> {
  console.log('Start')

  for (let index = 0; index < fruitsToGet.length; index++) {
    const fruit = fruitsToGet[index];
    const numFruit = await getNumFruit(fruit)
    console.log(numFruit)
  }

  console.log('End')
}

forLoop();
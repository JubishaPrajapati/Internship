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


const forEachLoop = () => {    
  console.log('Start')

  fruitsToGet.forEach(async fruit => {
    const numFruit = await getNumFruit(fruit)
    console.log(numFruit)
  })

  console.log('End')   //end is output first becuz foreach is not promise aware
}
forEachLoop();
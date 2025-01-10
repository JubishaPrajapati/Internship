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


//
const reduceLoop = async ()=> {
  console.log('Start')

  const sum = await fruitsToGet.reduce(async (promisedSum, fruit) => {
    const numFruit = await getNumFruit(fruit)
    const sum = await promisedSum
    return sum + numFruit
  }, 0)

  console.log(sum)
  console.log('End')
}

reduceLoop();


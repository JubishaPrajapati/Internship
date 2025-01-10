function fahToCelsius(fah){
  return (fah-32)* 5/9;
}
let inFahrenheit= 100;
let celsius= fahToCelsius(inFahrenheit);
console.log(`${inFahrenheit} fahrenheit is ${celsius} celsius`);
const url='https://jsonplaceholder.typicode.com/todos';

function fetchTodos(){
  fetch(url).then((val)=>{
    console.log(val);
  }) 
}
fetchTodos();
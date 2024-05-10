const getTodos = (resource) =>{
  
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
      if(request.readyState === 4 && request.status === 200){
        const data = request.responseText;
        resolve(data)
      }else if(request.readyState === 4){
        reject("couldnt fetch the data");
      }
    })
    
    
    request.open("get", resource);
    request.send();
  })
  
}

getTodos("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{
  console.log("promise 1");
  return getTodos("https://jsonplaceholder.typicode.com/todos/2")
}).then((data)=>{
  console.log("promise 2");
  return getTodos("https://jsonplaceholder.typicode.com/todos/3")
}).then((data)=>{
  console.log("promise 3")
}).catch(err=>{
  console.log(err)
})

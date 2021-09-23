//in  chaining promises ...the if the first few have no err the it prints out data then the err and then the catch stmt is executed

//there is a newer and quicker way to make http requests(xhttp requests)...lesser code and implements promise requests under the hood
//learnt the other way to teach us about callbacks and promises(all moving pieces) and some websites might implement it still
//fetch is built in into JS

//fetch returns a promise
//promise is I will resolve if success or reject if error
//.then when resolved & catch when err
fetch('todos/mario.json').then((response) =>{
    console.log('resolve', response);
}).catch((err) =>{
    console.log('reject', err);
});

//in fetch when you have a wrong URL eg a typo .then is still resolved but in the response status in console it is 404
//the response returned is diff than the data xhhtprequest returns....the response Obj contains diff stuff about the response
//when u open up response there is a _proto(where alot of obj methods are found)..open it and you'll see json:...this methos can the be used
//to get us the data we need

fetch('todos/mario.json').then((response) =>{
    console.log('resolve', response);
    response.json();        //return a promise
}).catch((err) =>{
    console.log('reject', err);
});

//response.json returns a promise so it will generate error when u keep it in a variable
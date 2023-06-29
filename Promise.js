function register()// cb can also be written in place of callback as it is a naming convention. 
{
   return new Promise((resolve,reject)=>{//resolve and reject functions are given as parameters
        setTimeout(()=>{
        //    return reject('Error while registering');
           console.log('Register end');
           resolve();
        //Higher Order function
        },2000);
   });
   
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          return reject('Error while sending email');
          console.log('Email end');
        //   resolve();
         },2000);
    })
    
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login end');
            resolve();
         },1000);
    })
   
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Got User Data');
            resolve();
         },1000);
    })
    
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('User Data Displayed');
        resolve();
     },1000);
    })
}
//Callback hell
// register(function(){
//     sendEmail(function(){//Nesting of code
//         login();
//         getUserData();
//         displayUserData();
//     });
// });

// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)  //We get the return values of resolve function inside 'then' Promise
// .catch((err)=>{            //We get the return values of reject function inside 'catch' Promise
//     console.log('Error:-',err);
// })

//Async and Await Method:-This method makes the code look synchronous despite being asynchronous

async function authenticate(){
    try{                          //try and catch method is a better way of Error Handling
        await register();
        await sendEmail();
        await login();        
        await getUserData();
        await displayUserData();
    } catch(err){
        console.log(err);
    }
    // throw new Error(); //this is used to do error handling for authenticate function
    
}
authenticate().then(()=>{
    console.log('set!');
})
.catch((err)=>{
    console.log(err); //One Way of Error Handling 
});
console.log('Other application work!');
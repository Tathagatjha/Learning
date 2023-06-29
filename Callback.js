//Scenario
//1.Register 2.Send Welcome Email 3.Login 4.Get User Data 5.Display User Data

//code

function register(callback)// cb can also be written in place of callback as it is a naming convention. 
{
   setTimeout(()=>{
    console.log('Register end');
    callback();
    //Higher Order function
   },2000);
}

function sendEmail(callback){
    setTimeout(()=>{
       console.log('Email end');
       callback();
    },2000);
    
}
function login(){
    setTimeout(()=>{
        console.log('Login end');
     },1000);
}
function getUserData(){
    setTimeout(()=>{
        console.log('Got User Data');
     },1000);
}
function displayUserData(){
    setTimeout(()=>{
        console.log('User Data Displayed');
     },1000);
}
//Callback hell
register(function(){
    sendEmail(function(){//Nesting of code
        login();
        getUserData();
        displayUserData();
    });
});
console.log('Other application work!');
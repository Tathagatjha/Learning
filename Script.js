//Dom Manipulation(Document Object Model)
//1.getElementById
//   const heading=document.getElementsById("heading");
//     heading.innerHTML="new heading";
//   console.log(heading);
//2.getElementsByTagName;
const heading = document.getElementsByTagName('h1');
console.log(heading);
//3.getElementsByClassName;
// const heading=document.getElementsByClassName('heading');
// console.log(heading);
//4.Query Selector
// const heading=document.querySelector('.h1');
// console.log(heading);
//5.Query SelectorAll
// const heading=document.querySelectorAll('#heading');
// console.log(heading);

//Traverse Dom

//1.Parent Node
// const title = document.querySelector('.heading');
// const parent = title.parentNode;
// console.log(parent);
//2.ChildNode
// const parent=document.querySelector('heading');
//console.log(parent.childNode);
//3.nextElementSibling
//const heading=document.querySelector('.heading');
//console.log(heading.nextElementSibling);
//4/PreviousElementSibling
//const subHeading=document.querySelector('h3');


let quoteline=document.getElementsByClassName('quote-line')[0];
let author=document.getElementsByClassName('author')[0];
let newquote=document.getElementsByClassName('btn2')[0];
let apiquotes=[];
async function quote(){
 const apiurl=  'https://jacintodesign.github.io/quotes-api/data/quotes.json';
 try{
 const response= await fetch(apiurl);
apiquotes= await response.json();
apiquotes= apiquotes[Math.floor(Math.random() * apiquotes.length)];
console.log(apiquotes);
 }
 catch(error){

 }
author.innerHTML=apiquotes.author;
quoteline.innerHTML=apiquotes.text;

// console.log("hello");


}

   
quote();
function twitter() {
    location.replace("https://x.com/i/flow/login")
  }
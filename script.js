let insidebox=document.getElementsByClassName('insidebox')[0];
let quoteline=document.getElementsByClassName('quote-line')[0];
let author=document.getElementsByClassName('author')[0];
let newquote=document.getElementsByClassName('btn2')[0];
let loader=document.getElementsByClassName('loader')[0];
let apiquotes=[];
function loading(){
    loader.hidden=false;
    insidebox.hidden=true;
  }
  function complete(){
    loader.hidden=true;
    insidebox.hidden=false;

  }
async function quote(){
    loading();
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

complete();
}


quote();
function twitter() {
    // location.replace("https://x.com/i/flow/login")
    const twitterurl=`https://twitter.com/intent/tweet?text=${quoteline.innerHTML} - ${author.innerHTML}`;
    window.open(twitterurl,'_blank');
  }
  
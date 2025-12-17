let img=document.querySelector("#img");
let button=document.querySelector(".button");
let container=document.querySelector(".container");
let data=fetch("https://dog.ceo/api/breeds/image/random/facts");
let val=async()=>{
    let promise=await data;
    console.log(promise)
    let result=await promise.json();
    const imgurl=result.message;
    console.log(imgurl[0]);
    img.src=imgurl[0];
    
}


button.addEventListener("click",()=>{
    val();
});
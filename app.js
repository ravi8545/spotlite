let para = document.querySelector("p");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz";
let text = para.innerText;

let iteration=0;

function randomText(){
    const str = text.split("").map((char, index)=>{
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * 53)];
    })
    .join("");
    
    para.innerText=str;
 
    iteration += 1;



}
setInterval(randomText, 1000);
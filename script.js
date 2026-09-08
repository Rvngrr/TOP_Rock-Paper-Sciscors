const button = document.querySelectorAll('button');
let playerChoice = "";

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        playerChoice = btn.textContent;
        console.log(btn.textContent);
    });
});


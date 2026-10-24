/*variaves para obiter as opitoes de img */
const optionImg = document.querySelectorAll(".optins-img");
/*variaves para o conteudo princibal */
const conteiner = document.querySelector(".conteiner");
/*variaves para texto dogojo trocados com inerhtml */
const resulttext = document.querySelector(".text-jogo");
/*variaves para img do usario faz as trocas das img */
const userresult  = document.querySelector(".user-result img");
/*variaves para resultado do jogo com atribiudo img */
const computeresult  = document.querySelector(".computer-result img");
/*varives para ramazenar dados com array */
const computerimg = ['img/pedra.png','img/papel.png','img/tesoura.png'];
/*Regra do jogo array para coter os dados do jogo */
const winner = {
    PR:"VOCÊ",
    PS:"IA",
    SP:"VOCÊ",
    SR:"IA",
    RS:"VOCÊ",
    RP:"AI",
}
/*função para recadar dados, atravez do click com paramentro*/
function readliguage(env){
    const clickimg = env.currentTarget
    const clickindex = Array.from(optionImg).indexOf(clickimg)
    console.log(clickindex)
    
    console.log(env.currentTarget);
    conteiner.classList.add("start")
    resulttext.innerHTML = "processor!"

    userresult.src = computeresult.src = ['img/pedra.png']

    setTimeout(() => {
       conteiner.classList.remove("start")
      
       userresult.src = computerimg[clickindex]


       const rendomnumber = Math.floor( Math.random() * computerimg.length)
        computeresult.src = computerimg[rendomnumber] 

        const uservalor = ['R','P','S'][clickindex]
        const computervalor = ['R','P','S'][rendomnumber]
        const pegar_PC_USER = uservalor + computervalor
        const result = winner[pegar_PC_USER]


       resulttext.innerHTML = uservalor === computervalor? 'Empatado': result +' Ganhou';
    }, 2000);


}

optionImg.forEach(img=> {
    img.addEventListener('click', readliguage)
})
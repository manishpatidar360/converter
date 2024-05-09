let dropdown=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("button");
let msg=document.querySelector(".msg");
let fromCur=document.querySelector(".from select");
let toCur=document.querySelector(".to select");
for(let select of dropdown){
    for(let code in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;
        select.append(newoption);
    }
      select.addEventListener("change", (evt)=>{
           updateflag(evt.target);
       });
}
function updateflag(Element){
    let curCode=Element.value;
    let countryCode=countryList[curCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img= Element.parentElement.querySelector("img");
   img.src=newSrc;
}


btn.addEventListener("click", async(evt) =>{
    evt.preventDefault();
let amount=document.querySelector(".amount input");
let amountval=amount.value;
let url= `https://v6.exchangerate-api.com/v6/339244dee98a353438c6eb8c/latest/${fromCur.value}`;
    let response=await fetch(url);
    let data= await response.json();
    let rate=data.conversion_rates[toCur.value];
    console.log(rate);
     let finalAmount=amountval * rate;
     msg.innerText=`${amountval} ${fromCur.value} = ${finalAmount} ${toCur.value}`;
})
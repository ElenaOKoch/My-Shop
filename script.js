const items = document.querySelectorAll('.item');
items.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        moveFocus();
        item.classList.add('selected');
    })
  moveFocus = ()=>{
    items.forEach(item=>{
        item.classList.remove('selected');
    })
  }  
})

function shopCountdown(){
  const shopDate = new Date("30 December, 2022 00:00");
  const now = new Date();
  console.log(shopDate, now);
  const diff=shopDate-now;
  const msInSecond=1000;
  const msInMinute=60*1000;
  const msInHour=60*60*1000;
  const msInDay=24*60*60*1000;
  const displayDay = Math.floor(diff/msInDay);
  document.querySelector(".days").textContent=displayDay;
  const displayHour = Math.floor((diff%msInDay)/msInHour);
  document.querySelector(".hours").textContent=displayHour;
  const displayMinute = Math.floor((diff%msInHour)/msInMinute);
  document.querySelector(".minutes").textContent=displayMinute;
  const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
  document.querySelector(".seconds").textContent=displaySecond;
if (diff<=0){
  document.querySelector(".days").textContent=0;
  document.querySelector(".hours").textContent=0;
  document.querySelector(".minutes").textContent=0;
  document.querySelector(".seconds").textContent=0;
  clearInterval (timerID);
  function openShop(){
    const heading =document.querySelector("h1");
    heading.textContent="We are finally opened!";
  }
  openShop();
}
}
let timerID = setInterval (shopCountdown, 1000);
shopCountdown();
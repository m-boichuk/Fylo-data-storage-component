
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar");//індикатор виконання/ шкала прогресу
const thumb = document.querySelector(".thumb"); // вказівник
input.oninput = ()=>{// oninput -зміни відбуваються відразу 
  let sliderValue = input.value;// локальна змінна sliderValue дорівнює значенню value
  thumb.style.left = (sliderValue/10) + '%';// стиль вказіника буде змінюватичь наліво так само як sliderValue
  bar.style.width = (sliderValue/10) + '%';// шкала прогресу буде змінюватичь наліво так само як sliderValue
  
  document.getElementById("gb-used").innerHTML = sliderValue;  
  document.getElementById("gb-left").innerHTML = 1000-sliderValue;  
  
}
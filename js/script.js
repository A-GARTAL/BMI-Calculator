const $ = document;
const weightInput = $.getElementById('weight_input');
weightInput.addEventListener('input' , weightValueRead);
let weightDisplay = $.getElementById('weightDisplay');
const heightInput = $.getElementById('height_input');
heightInput.addEventListener('input' , heightValueRead);
let heightDisplay = $.getElementById('heightDisplay');
const resultNumberDisplay = $.getElementById('resultNumber');
const resultTextDisplay = $.getElementById('resultText');

let weightValue=75,heightValue=175,result;
bmiCalc()

function weightValueRead(event){
  weightValue= event.target.value;
  weightDisplay.innerHTML = weightValue+"  kg";
  bmiCalc()
  console.log(event.target.value);
}

function heightValueRead(event){
  heightValue= event.target.value;
  heightDisplay.innerHTML = heightValue+"  cm";
  bmiCalc()
  console.log(event.target.value);
}

function bmiCalc(){
  result = weightValue/(heightValue/100)**2;
  resultNumberDisplay.textContent = result.toFixed(1);
  if(result<16)
  {
    resultTextDisplay.innerHTML='دچار کمبود وزن شدید'
    // resultTextDisplay.style.color = "red"
    resultNumberDisplay.style.color = "red"
  }
  else if(result==16 || result<18.5)
  {
    resultTextDisplay.innerHTML='کمبود وزن'
    // resultTextDisplay.style.color = "orange"
    resultNumberDisplay.style.color = "orange"
  }
  else if(result==18.5 || result<25)
  {
    resultTextDisplay.innerHTML='عادی'
    // resultTextDisplay.style.color = "green"
    resultNumberDisplay.style.color = "green"
  }
  else if(result==25 || result<30)
  {
    resultTextDisplay.innerHTML='اضافه وزن'
    // resultTextDisplay.style.color = "orange"
    resultNumberDisplay.style.color = "orange"
  }
  else if(result==30 || result<35)
  {
    resultTextDisplay.innerHTML='چاقی نوع 1'
    // resultTextDisplay.style.color = "red"
    resultNumberDisplay.style.color = "red"
  }
  else if(result==35 || result<40)
  {
    resultTextDisplay.innerHTML='چاقی نوع 2'
    // resultTextDisplay.style.color = "red"
    resultNumberDisplay.style.color = "red"
  }
  else if(result>40)
  {
    resultTextDisplay.innerHTML='چاقی نوع 3'
    resultTextDisplay.style.color = "red"
    resultNumberDisplay.style.color = "red"
  }
}
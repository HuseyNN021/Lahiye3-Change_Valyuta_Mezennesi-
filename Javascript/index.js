const leftBtnList = document.querySelectorAll(".left-btn");
const rightBtnList = document.querySelectorAll(".right-btn");
const leftShowCurrency = document.querySelector(".left-show-currency");
const rightShowCurrency = document.querySelector(".right-show-currency");
let getLeftActiveBtn='RUB'; 
let getRightActiveBtn='USD';
let input1=document.querySelector('.input1');
let input2=document.querySelector('.input2');
getCurrency("https://api.exchangerate.host/latest");
input1.value=100
inputs("https://api.exchangerate.host/latest",(+input1.value))

//#region  Rashad
async function getCurrency(url) {
  const promiseLeft =await fetch(`${url}?base=${getLeftActiveBtn}&symbols=${getRightActiveBtn}`);
  const promiseRight =await fetch(`${url}?base=${getRightActiveBtn}&symbols=${getLeftActiveBtn}`);
  const responseLeft=await promiseLeft.json();
  const responseRight=await promiseRight.json();
  console.log(responseRight);
  leftShowCurrency.innerText = `1 ${getLeftActiveBtn}= ${responseLeft.rates[`${getRightActiveBtn}`]} ${getRightActiveBtn}`;
  rightShowCurrency.innerText = `1 ${getRightActiveBtn}= ${responseRight.rates[`${getLeftActiveBtn}`]} ${getLeftActiveBtn}`;
  console.log(`${responseRight.rates[`${getLeftActiveBtn}`]}`)  
}
//#endregion

async function inputs(url,input1){
    const promiseLeft =await fetch(`${url}?base=${getLeftActiveBtn}&symbols=${getRightActiveBtn}`);
    const promiseRight =await fetch(`${url}?base=${getRightActiveBtn}&symbols=${getLeftActiveBtn}`);
    const responseLeft=await promiseLeft.json();
    const responseRight=await promiseRight.json();
    console.log(responseRight);
    input2.value=(+input1)*(`${responseRight.rates[`${getLeftActiveBtn}`]}`)
}



leftBtnList.forEach((element) => {
  element.addEventListener("click", (event) => {
    deleteLeft();
    event.target.classList.add("isActive");
    getLeftActiveBtn = event.target.innerText;
    getCurrency("https://api.exchangerate.host/latest");
    inputs("https://api.exchangerate.host/latest",(+input1.value))
  });
});
rightBtnList.forEach((element) => {
  element.addEventListener("click", (event) => {
    deleteRight();
    event.target.classList.add("isActive");
    getRightActiveBtn = event.target.innerText;
    inputs("https://api.exchangerate.host/latest",(+input1.value))
    getCurrency("https://api.exchangerate.host/latest");
  });
});




function deleteLeft() {
  leftBtnList.forEach((element) => {
    element.classList.remove("isActive");
  });
}
function deleteRight() {
  rightBtnList.forEach((element) => {
    element.classList.remove("isActive");
  });
}


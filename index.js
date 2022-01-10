const buttonClass = ".CalcButton";
const buttonList = document.querySelectorAll(".CalcButton");
console.log(buttonList)

buttonList.forEach(element => {
    console.log(element.innerHTML);
});
const buttonList = document.querySelectorAll(".CalcButton");
const animation = document.querySelectorAll('.animation')[0]
const operands = document.getElementsByClassName('operands')[0]
const equalsButton = document.getElementById('Equals');
let x = 0;


const addBlock = (event) => {
    let newBlock = document.createElement('div');
    newBlock.innerHTML = event.target.innerHTML;
    newBlock.id = "stack" + x;
    x++;
    animation.appendChild(newBlock)
}

buttonList.forEach(button => {
    button.addEventListener('click' , addBlock);
})






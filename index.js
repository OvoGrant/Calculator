const buttonList = document.querySelectorAll(".CalcButton");
const tokens = document.querySelector('.tokens');
tokens.removeChild(tokens.lastChild)
const operands = document.querySelector('.operands');
const equalsButton = document.querySelector('#Equals');
const clearButton = document.querySelector('#clear')
let x = -1;
let p = -1;


const addBlock = (event) => {
    let newBlock = document.createElement('p');
    newBlock.innerHTML = event.target.innerHTML;
    newBlock.id = `stack-${++x}`;
    tokens.appendChild(newBlock);
}
const sleep = () => new Promise(resolve => setTimeout(resolve, 759));
const isDigit = x => !Number.isNaN(x) ;
const clear = () => {
    x = -1;
    p = -1;
    tokens.innerHTML = "";
    operands.innderHTML = "";
    tokens.removeChild(tokens.lastChild)
    operands.removeChild(operands.lastChild)
}

const evaluate = async () => {
    /*This will evaluate the tokens*/
    if(tokens.childNodes.length == 1){
        console.log("not enough tokens");
        return;
    }
    try {
    const length = tokens.childNodes.length;
         for(let i = 0; i < length; i++){
        let currToken = document.getElementById(`stack-${i}`)
        if(isDigit(Number(currToken.innerHTML))){
            await sleep();
             let swap = tokens.removeChild(currToken);
             swap.id = `operands-${++p}`
            operands.appendChild(swap);
        }else{
            await sleep();
            let x = operands.removeChild(document.getElementById(`operands-${p--}`))
            let q = operands.removeChild(document.getElementById(`operands-${p--}`))
            console.log(x , q)
            let result;
            console.log(currToken.innerHTML)
            switch(currToken.innerHTML){
                case '+':
                    result = Number(q.innerHTML) + Number(x.innerHTML);
                    break;
                case '-':
                    result = Number(q.innerHTML) - Number(x.innerHTML);
                    break;
                case '*':
                    result = Number(q.innerHTML)* Number(x.innerHTML);
                    break;
                case '^':
                    result = Number(q.innerHTML)**Number(x.innerHTML);
                    break;
                default:
                    throw new Error("not valid reset the game");
            }
            tokens.removeChild(currToken);
            console.log(result)
            await sleep();
            let newBlock = document.createElement('p');
            newBlock.innerHTML = result;
            newBlock.id = `operands-${++p}`;
            operands.appendChild(newBlock)
        }
    }
  }catch(error){
    console.log("hll")
    console.log(error);
 }
}


  


clearButton.addEventListener('click',clear);
//add event listeners for the buttons
buttonList.forEach(button => {
    button.addEventListener('click' , addBlock);
});

//add the event listeners for evaluation to begin
equalsButton.addEventListener('click', evaluate);







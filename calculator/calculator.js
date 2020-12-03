function Calculate(number1,number2,operator) {
  switch (operator) {
    case "+":
      return number1+number2;
      break;
    case "*":
      return number1*number2;
    case "-":
      return number1-number2;
    case "/":
      return number1/number2;

    default:
      break;
  }
}

function clear() {
  pastP.textContent="";
  resultP.textContent="";
}

const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const pastP = document.querySelector("#past");
const resultP = document.querySelector("#result-p");
const deleteBtn = document.querySelector("#delete");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");



let selectedOperator;
let result =0;

operatorButtons.forEach(operator =>{

  operator.addEventListener('click',()=>{
  
      if(pastP.textContent.length>0){
        if (selectedOperator != null) {
          let lastNum = parseFloat(pastP.textContent);
          let convertedNum = parseInt(resultP.textContent);
           result =Calculate(lastNum,convertedNum,selectedOperator);
          selectedOperator = operator.textContent;
          console.log("lastNum:"+lastNum);
          console.log("convertedNum"+convertedNum);
          pastP.textContent = result;
          resultP.textContent = "";
        }
       
      }else{
        pastP.textContent=resultP.textContent;
        selectedOperator = operator.textContent;
        resultP.textContent ="";
      }

  });
});

numButtons.forEach(number => {
   
  number.addEventListener('click',()=>{

     resultP.textContent += number.textContent;
     
  });

})


equalBtn.addEventListener('click',()=>{
     
     let num1 = parseInt(pastP.textContent);
     let num2 = parseInt(resultP.textContent);
     console.log("Num1:"+num1," Num2:"+num2);
     result = Calculate(num1,num2,selectedOperator);
     resultP.textContent=result;
     pastP.textContent = "";
});



clearBtn.addEventListener('click',()=>{
  clear();
  selectedNumbers = [];
});

deleteBtn.addEventListener('click',()=>{

  if (resultP.textContent >0) {
    
    let deletedResult = resultP.textContent.slice(0,-1);
    resultP.textContent = deletedResult;

  }
});
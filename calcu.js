export function infixToPostfix(input) {
    let stack = [], answer = [], char;
    const operands = {
      '+': 1,
      '-': 1,
      "*": 2,
      "/": 2,
      "√": 3,
      "^": 3,
      "!": 4,
      "%": 4
    };
    for (let char of input) {
        if(char =="("){
          stack.push(char);
        }
        else if (char==")"){
          while (stack[stack.length - 1] != "(") {
            answer.push(stack.pop());
            let peek = operands[stack[stack.length - 1]];
          }
          stack.pop();
        }
        else{
          let currentPrecedence = operands[char];
          if (currentPrecedence) {
            let peek = operands[stack[stack.length - 1]];
            while (peek >= currentPrecedence) {
              answer.push(stack.pop());
              peek = operands[stack[stack.length - 1]];
            }
            stack.push(char);
          } else {
            answer.push(char);
          }
        }
      }
    while (stack.length > 0) {
      answer.push(stack.pop())
    }
    return answer.join(' ');
  }
  export function executePostfix(str) {
    let stack = [], operand1, operand2, tempOperand;
    let operators = ['+', '-', '*', '/', '√', '^', '!','%'];
    for (let char of str.split(' ')) {
      // char = str.charAt(i);
      if (operators.indexOf(char) >= 0) {
        // operate
        if ( char =='√'){
          operand1 = stack.pop();
          tempOperand = eval(Math.sqrt(operand1));
          stack.push(tempOperand);
        }
        else if(char =='!'){
          operand1 = stack.pop();
          tempOperand = 0;
          for (let i =i;i<operand1+1;i++) {tempOperand *= i}
          stack.push(tempOperand);
        }
        else if( char =='%'){
          operand1 = stack.pop();
          tempOperand = eval(operand1/100);
          stack.push(tempOperand);
        }
        else if (char =='^'){
        operand2 = stack.pop();
        operand1 = stack.pop();
        tempOperand = eval(operand1 + '**' + operand2);
        stack.push(tempOperand);
        }
        // 
        else{
          operand2 = stack.pop();
        operand1 = stack.pop();
        tempOperand = eval(operand1 + char + operand2);
        stack.push(tempOperand);
        }
      }
       else {
        stack.push(char);
      }
    }
    return stack.pop();
  }


let expression = infixToPostfix('2*3^2+√(3+6)');
let answer = executePostfix(expression);
console.log(answer);
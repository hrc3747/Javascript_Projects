const Calculator = {        //Define an object which will contain inputs for the calculator
    Display_Value: '0',     //Set screen to display 0
    First_Operand: null,        //Create space to store first operand
    Wait_Second_Operand: false,     //Check if second operand has been input
    operator: null,     //Space to store the operator
};

function Input_Digit(digit) {       //Create a function to modify values when buttons are clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {       //Create a function to manage decimals
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {       //Create a function to handle operators
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);       //Convert input to number and store as operand once operator is selected
    if (operator && Calculator.Wait_Second_Operand) {       //Check if an operator exists and wait second operand is true then updates the operator and exits the function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {        //Check if first operand exists
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {      //Checks if an operator exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)      //Add fixed number of digits after the decimal 
        result = (result * 1).toString()        //Remove any trailing zero's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
}

function Calculator_Reset() {       //Create a function to reset calculator and revert values in object
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {     //Create a function to show the value on the calculator screen
    const display = document.querySelector ('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;       //Create an object that represents the element that was clicked
    if (!target.matches('button')) {        //Exit function if click was not on a button
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
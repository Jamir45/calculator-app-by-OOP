// Calculator Class
class Calculator {
   constructor(previousDisplay, currentDisplay){
      this.previousDisplay = previousDisplay
      this.currentDisplay = currentDisplay
      this.allClear()
   }

   // All Clear
   allClear(){
      this.previousDisplayValue = ''
      this.currentDisplayValue = ''
      this.operationButtonValue = ''
   }


   // Add Number In Current Display
   addNumberInDisplay(number) {
      if (number === '.' && this.currentDisplayValue.includes('.')) return 
      this.currentDisplayValue = this.currentDisplayValue.toString() + number.toString()
   }

   // Add Number In Current Display
   deleteNumberFromDisplay() {
      this.currentDisplayValue = this.currentDisplayValue.toString().slice(0, -1)
   }

   // Operation After Click button
   selectedButtonOperation(operator){
      if (this.currentDisplayValue !== ''){
         this.operationButtonValue = operator
         this.previousDisplayValue = `${this.currentDisplayValue} ${operator}`
         this.currentDisplayValue = ''
      }
   }

   // Number Calculation
   numberCalculation(){
      if (this.previousDisplayValue !== '' && this.currentDisplayValue !== '') {
         let calculation
         let currentDisplayNumber = parseFloat(this.currentDisplayValue)
         let previousDisplayNumber = parseFloat(this.previousDisplayValue)

         if (this.operationButtonValue === '+') {
            calculation = currentDisplayNumber + previousDisplayNumber
         } else if (this.operationButtonValue === '-') {
            calculation = previousDisplayNumber - currentDisplayNumber
         }else if (this.operationButtonValue === 'x') {
            calculation = currentDisplayNumber * previousDisplayNumber
         }else if (this.operationButtonValue === '÷') {
            calculation = previousDisplayNumber / currentDisplayNumber
         }else if (this.operationButtonValue === '%') {
            calculation = (previousDisplayNumber * currentDisplayNumber)/100
         }

         this.currentDisplayValue = calculation;
         this.operationButtonValue = '';
         this.previousDisplayValue = ''
      }
   }

   // Pass Number In Display
   updateDisplay() {
      this.currentDisplay.innerText = this.currentDisplayValue
      this.previousDisplay.innerText = this.previousDisplayValue
   }
}


// Select All Element
const numberButton = document.querySelectorAll('[number]')
const operationButton = document.querySelectorAll('[operation]')
const deleteButton = document.getElementById('delete')
const allClearButton = document.getElementById('all-clear')
const equalsButton = document.getElementById('equals')

const previousDisplay = document.getElementById('previousDisplay')
const currentDisplay = document.getElementById('currentDisplay')


// All Button Events
const calculator = new Calculator(previousDisplay, currentDisplay)

// Add Number Event
numberButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.addNumberInDisplay(button.innerText)
      calculator.updateDisplay()
   })
});

// Operation Button Event
operationButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.selectedButtonOperation(button.innerText)
      calculator.updateDisplay()
   })
});

// Delete Button Event
deleteButton.addEventListener('click', function () {
   calculator.deleteNumberFromDisplay()
   calculator.updateDisplay()
})

// All Clear Button Event
allClearButton.addEventListener('click', () => {
   calculator.allClear()
   calculator.updateDisplay()
})

// Equal Button Event
equalsButton.addEventListener('click', () => {
   calculator.numberCalculation()
   calculator.updateDisplay()
})
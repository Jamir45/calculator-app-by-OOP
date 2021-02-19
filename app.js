// Calculator Class
class Calculator{
   constructor(currentDisplay, previousDisplay){
      this.previousDisplay = previousDisplay;
      this.currentDisplay = currentDisplay;
      this.allClear()
   }

   // All Clear
   allClear(){
      this.currentDisplayValue = ''
      this.previousDisplayValue = ''
      this.operationButtonValue = ''
   }

   // Add Number In Display
   addNumberInDisplay(number){
      if (number === '.' && this.currentDisplayValue.includes('.')) return
      this.currentDisplayValue = this.currentDisplayValue.toString() + number.toString()
   }

   // Delete Number From Display
   deleteNumberFromDisplay(){
      this.currentDisplayValue = this.currentDisplayValue.toString().slice(0, -1)
   }

   // Selected Button Operation after Click Operator Button
   selectedButtonOperation(operator){
      if (this.currentDisplayValue !== '') {
         this.operationButtonValue = operator
         this.previousDisplayValue = `${this.currentDisplayValue} ${operator}`
         this.currentDisplayValue = ''
      }
   }

   // Number Calculation
   numberCalculation(){
      if (this.currentDisplayValue !== '' && this.previousDisplayValue !== '') {
         let calculation;
         let currentDisplayNumber = parseFloat(this.currentDisplayValue)
         let previousDisplayNumber = parseFloat(this.previousDisplayValue)

         if (this.operationButtonValue === '+') {
            calculation = currentDisplayNumber + previousDisplayNumber
         }else if (this.operationButtonValue === '-'){
            calculation = previousDisplayNumber - currentDisplayNumber
         }else if (this.operationButtonValue === 'x'){
            calculation = currentDisplayNumber * previousDisplayNumber
         }else if (this.operationButtonValue === '%'){
            calculation = (previousDisplayNumber * currentDisplayNumber)/100
         }else if (this.operationButtonValue === '÷'){
            calculation = previousDisplayNumber / currentDisplayNumber
         }

         this.currentDisplayValue = calculation
         this.operationButtonValue = ''
         this.previousDisplayValue = ''
      }
   }

   // Pass Value In The Display
   updateDisplay(){
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

const currentDisplay = document.getElementById('currentDisplay')
const previousDisplay = document.getElementById('previousDisplay')


const calculator = new Calculator(currentDisplay, previousDisplay)

// Add Number Events
numberButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.addNumberInDisplay(button.innerText)
      calculator.updateDisplay()
   })
})

// Delete Button Event
deleteButton.addEventListener('click', () => {
   calculator.deleteNumberFromDisplay()
   calculator.updateDisplay()
})

// All Clear Event
allClearButton.addEventListener('click', () => {
   calculator.allClear()
   calculator.updateDisplay()
})

// Operator Button Event
operationButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.selectedButtonOperation(button.innerText)
      calculator.updateDisplay()
   })
})

// Equal Button Event
equalsButton.addEventListener('click', () => {
   calculator.numberCalculation()
   calculator.updateDisplay()
})

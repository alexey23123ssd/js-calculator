const container = document.querySelector('.calc__container')
const input = document.querySelector('.calc__input')
const calcBtn = document.querySelector('.calc__btn')

calcBtn.addEventListener('click',(btn)=>{
    if(btn.target.matches('button')){
        const key = btn.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const inputValue = input.textContent
        const previousKeyType = container.dataset.previousKeyType

        if(!action){
            if(inputValue === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
                input.textContent = keyContent 
                
            }

            else{
                input.textContent = inputValue + keyContent 
               
            }

            container.dataset.previousKeyType = 'number'
        }

        if(action === 'decimal') {
            if(!inputValue.includes('.'))
            {
                input.textContent = inputValue + '.'
            }

            else if(previousKeyType === 'operator')
            {
                input.textContent = "0."
            }  

            container.dataset.previousKeyType = 'decimal'
        }

        
        if(action === 'sum'|| action === 'subtract' || action === 'multiply' || action === 'divide' ){
            container.dataset.previousKeyType = 'operator'
            container.dataset.firstValue = inputValue
            container.dataset.operator = action
        }
         
        if(action === 'calculate'){
            const firstValue = container.dataset.firstValue
            const operator = container.dataset.operator
            const secondValue = inputValue
           
            input.textContent = calc(firstValue, operator, secondValue)

            container.dataset.previousKeyType = 'calculate'
        }

        if(action === 'clear'){
            input.textContent = 0
            container.dataset.firstValue = ''
            container.dataset.operator = ''
            container.dataset.previousKeyType = ''

            container.dataset.previousKeyType = 'clear'
        }
    } 
})



  function calc(firstValue, operator, secondValue){
     let result = '0'
     
  if (operator === 'sum') {
    result = parseFloat(firstValue) + parseFloat(secondValue)
  } else if (operator === 'subtract') {
    result = parseFloat(firstValue) - parseFloat(secondValue)
  } else if (operator === 'multiply') {
    result = parseFloat(firstValue) * parseFloat(secondValue)
  } else if (operator === 'divide') {
    result = parseFloat(firstValue) / parseFloat(secondValue)
  }

  return result
}

   

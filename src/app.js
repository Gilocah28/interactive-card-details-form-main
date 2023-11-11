// input Element
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('month');
const cardYear = document.getElementById('year');
const cvcNumber = document.getElementById('cvc-number');



//Container for state
const formInput = document.getElementById('form');
const greetForm = document.getElementById('thankyou');
//error state for every input
const errorName = document.querySelector('.name-error')
const errorNumber = document.querySelector('.cardNumber-error')
const errorMonthYear = document.querySelector('.year-error')
const errorCVC = document.querySelector('.cvc-error')
const errorValue = document.querySelectorAll('input')
const errorState = document.querySelectorAll('.errorState')


//button
const btnSubmit = document.getElementById('submit')
const btnThnks = document.getElementById('submitThankyou')


const cardNameHolder = document.querySelector('.card-holder-name')
const numberHolder = document.getElementById('cardHolderNumber')
const cardMonthHolder = document.querySelector('.card-month')
const cardYearHolder = document.querySelector('.card-year')
const cardCVCHolder = document.querySelector('.card-cvc')

const contianerThankyou = document.querySelector('.thankyou')
const formContainer = document.querySelector('#form')




btnSubmit.addEventListener('click',()=>{
    checkEmptyFields()
})

btnThnks.addEventListener('click',()=>{
    formContainer.style.display = 'block'
    contianerThankyou.style.display = 'none'
    btnSubmit.style.display = 'block'
    clearValue()

    cardNameHolder.textContent = 'Jane Appleseed'
    numberHolder.textContent = '0000 0000 0000 0000'
    cardYearHolder.textContent = '00'
    cardMonthHolder.textContent = '00'
    cardCVCHolder.textContent = '123'

})


function checkEmptyFields(){
    let isState = true;
    if(cardName.value === ''){
        errorName.style.display = 'block'
        cardName.classList.add('errorBorder')
        errorName.textContent = `Can't be blank`
        isState = false;
    
    }

    if(cardNumber.value === ''){
        cardNumber.classList.add('errorBorder')
        errorNumber.style.display = 'block'
        errorNumber.textContent = `Can't be blank`
    
        isState = false;
    }else if(isNaN(cardNumber.value)){
        cardNumber.classList.add('errorBorder')
        errorNumber.style.display = 'block'
        errorNumber.textContent = `Not should contain any letters`
        isState = false;
        
    }

    if(cardMonth.value === ''){
        cardMonth.classList.add('errorBorder')
        errorMonthYear.style.display = 'block'
        
        isState = false;
    }else if(isNaN(cardMonth.value)){
        cardMonth.classList.add('errorBorder')
        errorMonthYear.style.display = 'block'
        
        isState = false;
    }

    if(cardYear.value === ''){
        cardYear.classList.add('errorBorder')
        errorMonthYear.style.display = 'block'
        
        isState = false;
    }else if(isNaN(cardYear.value)){
        cardYear.classList.add('errorBorder')
        errorMonthYear.style.display = 'block'
        
        isState = false;
    }

    if(cvcNumber.value === ''){
        cvcNumber.classList.add('errorBorder')
        errorCVC.style.display = 'block'
        errorCVC.textContent = `Can't be blank`
        
        isState = false;
    }else if(isNaN(cvcNumber.value)){
        cvcNumber.classList.add('errorBorder')
        errorCVC.style.display = 'block'
        errorCVC.textContent = `Not should contain any letters`
        
        isState = false;
    }

    if(isState === true){
        formContainer.style.display = 'none'
        contianerThankyou.style.display = 'block'
        cardNameHolder.textContent = cardName.value
        numberHolder.textContent = cardNumber.value
        cardMonthHolder.textContent = cardMonth.value
        cardYearHolder.textContent = cardYear.value
        cardCVCHolder.textContent = cvcNumber.value
        btnSubmit.style.display = 'none'
    }
}



function clearValue(){
    cardName.value = ''
    cardNumber.value = ''
    cardMonth.value = ''
    cardYear.value = ''
    cvcNumber.value = ''

    errorValue.forEach(err =>{
        if(err.classList.contains('errorBorder')){
            err.classList.remove('errorBorder')
        }
    })

    errorState.forEach(textRemoveError=>{
        textRemoveError.style.display ='none'
    })

}




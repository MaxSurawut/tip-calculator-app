const tips = document.querySelectorAll('.tips')
let billInput = document.querySelector('.bill-input')
let tipCustom = document.querySelector('.tip-custom')
let peopleInput = document.querySelector('.people-input')
let tipResult = document.querySelector('.tipResult')
let totalResult = document.querySelector('.totalResult')
const resetAmount = document.querySelector('.resetAmount')
const alert = document.querySelector('.alert')

billInput.value = "0.0"
peopleInput.value = "1"


billInput.addEventListener('input', billInputFunc)
peopleInput.addEventListener('input', peopleInputFunc)
tips.forEach((val)=>{
    val.addEventListener('click',tipSelect)
})
tipCustom.addEventListener('input',tipCustomInputFunction)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.0


function billInputFunc(){
    billValue = parseFloat(billInput.value)
    calculateTip()
}
function peopleInputFunc(){
    peopleValue = parseFloat(peopleInput.value)
    calculateTip()
}
function tipCustomInputFunction(){
    tipValue = parseFloat(tipCustom.value) / 100
    tips.forEach((val)=>{
        val.classList.remove('active-tip')
    })
    calculateTip()
}


function tipSelect(e){
    tips.forEach((val)=>{
        val.classList.remove('active-tip')
        if(e.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip')
            tipValue = parseFloat(val.innerHTML) / 100
        }
    })
    calculateTip()
}

const calculateTip = ()=>{
    if(peopleValue >= 1){
        alert.classList.remove('active')
        let tipAmount = (billValue * tipValue)
        let tipPerson = (billValue * tipValue) / peopleValue
        let total = (billValue + tipAmount) / peopleValue
        tipResult.textContent = "$" + tipPerson.toFixed(2)
        totalResult.textContent = "$" + total.toFixed(2)
    }else{
        alert.classList.add('active')
    }
    resetAmount.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetAmount.style.color = "hsl(183, 100%, 15%)"
}

resetAmount.addEventListener('click',()=>{
    tipResult.textContent = "$0.00"
    totalResult.textContent = "$0.00"
    billInput.value = "0.0"
    peopleInput.value = "1"
})
    

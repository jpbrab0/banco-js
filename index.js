const inputSaque = document.querySelector("input[name=saque]");
const btnDeposito = document.querySelector("button[name=btn1]")
const btnSaque = document.querySelector("button[name=btn2]")
const inputDeposito = document.querySelector("input[name=deposito]")
var total = document.querySelector(".saldo")
let saldo = 0
function Deposito(){
    var valorDeposito = Number(inputDeposito.value)
    if(valorDeposito !== ''){
        
        total.innerHTML = `R$ ${Number(saldo += valorDeposito)}`
        inputDeposito.value = ''
    }
}
function Saque(){
    var valorSaque = Number(inputSaque.value)
    saldo = saldo - valorSaque
    if (valorSaque !== ''){
        total.innerHTML = `R$ ${saldo}`
        inputSaque.value = ''
    }
}
btnDeposito.addEventListener("click",Deposito)
btnSaque.addEventListener("click", Saque)
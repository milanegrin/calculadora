let operadora, operadorb, operacion;
let valFirts = 0;
let valSeconds = 0;
let operadores = ["+","-","*","/"];
let operator;
let op;

function init(){
    var calculo = document.getElementById('calculo');
}

const returnByid = (id) =>{
    return document.getElementById(id);
}

function tecla1($event) {
    event.preventDefault();
    const tecla = $event.target.innerText;
    console.log(tecla);
    let cal = document.getElementById("calculo");
    console.log(cal)
    if(cal.value == "0"){
        cal.value = "";
    }
    op = operadores.find(o => o == tecla);
    console.log(op, op === undefined)
    if(op === undefined){
        cal.value += tecla;
        if(!valFirts) {
            valFirts = cal.value;
        }else{
            valSeconds += tecla;
        }
    }else{
        operator = tecla;
        cal.value = 0;
    }

}

const enter = ()=> {
    document.getElementById("calculo").value = calcular();
}

function calcular() {
    switch (operator) {
        case "+":
            return Number(valFirts) + Number(valSeconds);
        case "-":
            return Number(valFirts) - Number(valSeconds);
        case "*":
            return Number(valFirts) * Number(valSeconds);
        case "/":
            return Number(valFirts) / Number(valSeconds);
    }
}

function reset(){
    // limpiar visor
    document.getElementById('calculo').value = '0';
    valorReset = 0;
    valFirts = 0;
    valSeconds = 0;
    op = undefined;
}

function lllreset(){
    calculo.textContent = "";
    operandora = 0;
    operandorb = 0;
    operacion = "";
}
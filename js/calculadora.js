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
    let cal = document.getElementById("calculo");
    if(cal.value == "0"){
        cal.value = "";
    }
    op = operadores.find(o => o == tecla);
    console.log(op, op === undefined)
    if(op === undefined){
        cal.value += tecla;
        if(!valFirts || !operator) {
            valFirts = cal.value;
        }else{
            valSeconds += tecla;
        }
    }else{
        operator = tecla;
        cal.value = '';
    }
    console.log("primer valor", valFirts, "segundo valor", valSeconds);

}

const enter = ()=> {
    document.getElementById("calculo").value = calcular();
    valReset();
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

function inputReset(){
    // limpiar visor
    document.getElementById('calculo').value = '';
    valReset();

}

function valReset(){
    valFirts = 0;
    valSeconds = 0;
    op = undefined;
    operator = undefined;
}
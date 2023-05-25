let numero
function tecla1($event) {
    event.preventDefault();
    const tecla = $event.target.innerText;
    console.log(tecla);
    let cal = document.getElementById("calculo");
    console.log(cal)
    if(cal.value == "0"){
        cal.value = "";
    }
    cal.value += tecla;
}
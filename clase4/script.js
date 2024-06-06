function mostrarAlerta(){
    alert("Click");
}

function mostrarAlertaEvent(){
    alert("Click Event")
}

function modificarModeBlack(){
    titulo.innerHTML = 'Titulo modificado';
    titulo.classList.add('nueva-clase');
    document.body.style.backgroundColor = 'black';  
    console.log(titulo);
}

function quitarClases(){
    titulo.classList.remove('nueva-clase');
    document.body.style.backgroundColor = 'white';
}

function sumar(){
    contador++;
    console.log(contador);
    titulo_contador.innerHTML = contador;
}

function restar(){
    contador--;
    console.log(contador);
    titulo_contador.innerHTML = contador;
}


//contador 
let contador = 2;

let titulo_contador = document.getElementById('titulo-contador');

titulo_contador.innerHTML = contador;

document.getElementById('btn-sumar').addEventListener('click',sumar);

document.getElementById('btn-restar').addEventListener('click',restar);

//Fin Contador

let titulo = document.getElementById('idTitulo');


let btn_black_mode = document.getElementById('btn-black-mode');

let btn_quitarClase = document.getElementById('btn-quitar-clase');

btn_quitarClase.addEventListener('click',quitarClases);

btn_black_mode.addEventListener('click',modificarModeBlack);








// document.getElementById('myBtn').addEventListener('click',mostrarAlertaEvent);
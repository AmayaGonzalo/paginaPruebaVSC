let contador = 0;
let imagen = document.querySelector("img");
let parr = document.getElementById("texto");

function contarClicks() {
  contador++;
  document.getElementById("texto").innerHTML =
    "Se realizaron " + contador + " clicks";
if(contador % 2 == 0){
    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxkoakzSU1QmK3TunPMuju0FI9jIGEmZ6sQ&usqp=CAU";
    texto.style.color="blue";
}else{
    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8z3NbDfameYtWnkAvaKuKBh78evwI5N5RzA&usqp=CAU";
    texto.style.color="red";
  
}

  //console.log("hiciste", contador, "click");
}
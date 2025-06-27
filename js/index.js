// Se obtienen todos los libros
    const arreglo = document.querySelectorAll('.libro');

function buscarLibro(event){

    // Se obtiene el 'input'
    let identificador = event.target.parentNode.querySelector("input").id;
    // Se accede al valor del 'input'
    let texto = document.getElementById(identificador).value;

    const nuevoArreglo = [];
    let x=0;

    for(let i=0; i < arreglo.length; i++){
        
        // Se compara la cadena de texto ingresada en el "input", con lo habido en el 'h3'(título), 'h5'(autor) o 'h6'(género): se llevó a minusculas y se normalizó para omitir las tildes
        if(arreglo[i].querySelector('h3').textContent.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === texto.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || arreglo[i].querySelector('h5').textContent.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === ("Autor: " + texto).toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || arreglo[i].querySelector('h6').textContent.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === ("Género: " + texto).toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
          
            // Una vez se haya comparado y arroje un 'true', se toma el 'HTML' que existe en esa posición i, y se almacena en el nuevo arreglo a renderizar
            nuevoArreglo[x] = arreglo[i].innerHTML;
            x++;
        }
    }

    // Se obtiene el contenedor de libros y el contenedor de coincidencias
    let contenedorLibro = document.getElementById("contenedor_libro");
    contenedorLibro.innerHTML = "";
    let numeroCoincidencias = document.getElementById("numeroCoincidencias");
    numeroCoincidencias.innerHTML = x + ' coincidencia(s)';
    
    // Se recorre el nuevo arreglo y se acumula el HTML a renderizar
    nuevoArreglo.forEach(element => {
        contenedorLibro.innerHTML += "<div class='libro'>" + element + "</div>";
    });
}

// JavaScript del formulario
document.getElementById("Boton").addEventListener("click", function() {
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const contraseña = document.getElementById("contraseña").value.trim();

            if (nombre === "" || correo === "" || contraseña === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert("¡Te has registrado con éxito!");
                
            }
        });

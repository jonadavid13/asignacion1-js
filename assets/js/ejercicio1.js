var totalRegistros = 0;
var menosDe40 = 0;
var entre40y50 = 0;
var mas50y60 = 0;
var masIgual60 = 0;

function agregarPeso(){
    let peso = document.getElementById("inputPeso").value;

    if(peso !== ""){
        peso = parseInt(peso);

        if(peso < 0 || peso > 999){
            document.getElementById("Alerta").innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <span>Ingrese una cantidad válida</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
        } else {
            totalRegistros += 1;

            if(peso < 40){
                menosDe40 += 1;
            } else if(peso <= 50){
                entre40y50 += 1;
            } else if(peso < 60){
                mas50y60 += 1; 
            } else {
                masIgual60 += 1;
            }

            // Actualizar datos en los elementos correspondientes
            document.getElementById("span-cantidad1").innerHTML = menosDe40;
            document.getElementById("span-cantidad2").innerHTML = entre40y50;
            document.getElementById("span-cantidad3").innerHTML = mas50y60;
            document.getElementById("span-cantidad4").innerHTML = masIgual60;

            document.getElementById("inputPeso").value = "";
        }
    } else {
        document.getElementById("Alerta").innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <span>Ingrese el valor del peso</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }

    console.log(typeof peso)
    console.log(peso)

    document.getElementById("cantidadRegistros").innerHTML = totalRegistros;
}
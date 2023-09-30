// Variables generales
var alumnosRegistrados = 0;

var sumaMath = 0;
var sumaFisica = 0;
var sumaProg = 0;

var aprobaronTodas = 0;
var aprobaronUna = 0;
var aprobaronDos = 0;

var promedioMath = 0;
var promedioFisica = 0;
var promedioProg = 0;

// Matemáticas
var aprobadosMath = 0;
var aplazadosMath = 0;
var notaMaxMath = 0;

// Física
var aprobadosFisica = 0;
var aplazadosFisica = 0;
var notaMaxFisica = 0;

// Programación
var aprobadosProg = 0;
var aplazadosProg = 0;
var notaMaxProg = 0;

function verificarDatos(){
    document.getElementById("alertDiv").innerHTML = "";

    let nombre = document.getElementById("idNombre").value;
    let cedula = document.getElementById("idCedula").value;
    let notaMatematicas = document.getElementById("idMath").value;
    let notaFisica = document.getElementById("idFisica").value;
    let notaProgramacion = document.getElementById("idProgramacion").value;

    if(nombre == "" || cedula == "" || notaMatematicas == "" || notaFisica == "" || notaProgramacion == ""){
        document.getElementById("alertForm").innerHTML = `<div class="alert alert-warning" role="alert">
            <span>Todos los campos deben estar completados.</span>
        </div>`;
    } else if( (notaMatematicas < 0 || notaMatematicas > 20 ) || (notaFisica < 0 || notaFisica > 20 ) || (notaProgramacion < 0 || notaProgramacion > 20 )){
        document.getElementById("alertForm").innerHTML = `<div class="alert alert-danger" role="alert">
        <span>Las notas deben tener un valor entre 0 y 20</span>
        </div>`;
    } else {
        document.getElementById("alertForm").innerHTML = `<div class="alert alert-success" role="alert">
        <span>Alumno registrado</span>
        </div>`;;
        let materiasAprobadas = 0;
        
        alumnosRegistrados += 1;
        
        sumaFisica += notaFisica;
        sumaMath += notaMatematicas;
        sumaProg += notaProgramacion;

        // Comparación de notas /Matemáticas
        if(notaMatematicas > notaMaxMath){
            notaMaxMath = notaMatematicas;
        }
        if(notaMatematicas >= 10){
            aprobadosMath += 1;
            materiasAprobadas += 1;
        } else {
            aplazadosMath += 1;
        }

        // Comparación de notas /Física
        if(notaFisica > notaMaxFisica){
            notaMaxFisica = notaFisica;
        }
        if(notaFisica >= 10){
            aprobadosFisica += 1;
            materiasAprobadas += 1;
        } else {
            aplazadosFisica += 1;
        }

        // Comparación de notas /Programación
        if(notaProgramacion > notaMaxProg){
            notaMaxProg = notaProgramacion;
        }
        if(notaProgramacion >= 10){
            aprobadosProg += 1;
            materiasAprobadas += 1;
        } else {
            aplazadosProg += 1;
        }

        if(materiasAprobadas > 0){
            switch(materiasAprobadas){
                case 1:
                    aprobaronUna += 1;
                    break;
                case 2:
                    aprobaronDos += 1;
                    break;
                case 3:
                    aprobaronTodas += 1;
                    break;
            }
        }
        
        // Promedios
        promedioMath = sumaMath / alumnosRegistrados;
        promedioFisica = sumaFisica / alumnosRegistrados;
        promedioProg = sumaProg / alumnosRegistrados;

        document.getElementById("promedioMath").innerHTML = `<span>${promedioMath}</span>`;
        document.getElementById("aprobadosMath").innerHTML = `<span>${aprobadosMath}</span>`;
        document.getElementById("aplazadosMath").innerHTML = `<span>${aplazadosMath}</span>`;
        document.getElementById("notaMaxMath").innerHTML = `<span>${notaMaxMath}</span>`;

        document.getElementById("promedioFisica").innerHTML = `<span>${promedioFisica}</span>`;
        document.getElementById("aprobadosFisica").innerHTML = `<span>${aprobadosFisica}</span>`;
        document.getElementById("aplazadosFisica").innerHTML = `<span>${aplazadosFisica}</span>`;
        document.getElementById("notaMaxFisica").innerHTML = `<span>${notaMaxFisica}</span>`;

        document.getElementById("promedioProgramacion").innerHTML = `<span>${promedioProg}</span>`;
        document.getElementById("aprobadosProgramacion").innerHTML = `<span>${aprobadosProg}</span>`;
        document.getElementById("aplazadosProgramacion").innerHTML = `<span>${aplazadosProg}</span>`;
        document.getElementById("notaMaxProgramacion").innerHTML = `<span>${notaMaxProg}</span>`;

        document.getElementById("aprobadosTodas").innerHTML = `<span>${aprobaronTodas}</span>`;
        document.getElementById("aprobadosUna").innerHTML = `<span>${aprobaronUna}</span>`;
        document.getElementById("aprobadosDos").innerHTML = `<span>${aprobaronDos}</span>`;

        document.getElementById("RegistroForm").reset();
    }
};

function limpiarAlerta(){
    document.getElementById("alertForm").innerHTML = "";
}

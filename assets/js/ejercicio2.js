function calcularInteres(){
    let alerta = document.getElementById("alertForm");
    alerta.innerHTML = "";

    let interes;
    let montoFinal = 0;
    let montoInicial = document.getElementById("idInicial").value;
    let totalDepositado = 0;
    const tasaInteresMensual = 0.0125;
    const montoMensual = 250.00;
    const nPeriodos = 12;

    if(montoInicial == ""){
        alerta.innerHTML = `<div class="alert alert-warning" role="alert">
            <span>Ingrese una cantidad válida.</span>
        </div>`;
    } else {
        montoInicial = parseFloat(montoInicial);
        totalDepositado = montoInicial + montoMensual*11;

        montoFinal += montoInicial*(Math.pow((1 + tasaInteresMensual), nPeriodos));
        
        for(i=11; i >= 1; i--){
            montoFinal += montoMensual*(Math.pow((1 + tasaInteresMensual), i));            
        }

        interes = (montoFinal-totalDepositado).toFixed(3);
        interes = interes.toString();
        interes += " Bs.";

        document.getElementById("idResultado").value = interes;
        console.log(montoFinal)
    }
}
window.onload = function (){
     
     document.querySelector('#excuses').innerHTML = generadorExcusas();
}

let generadorExcusas = () => {
    
    let quienFue = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let queIso = ['comió', 'pisó', 'aplastó', 'rompió'];
    let queDaño = ['mi tarea', 'mi teléfono', 'el auto'];
    let cuandoFue = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras oraba'];

    let quienIdx = Math.floor(Math.random() * quienFue.length);
    let isoIdx = Math.floor(Math.random() * queIso.length);
    let dañoIdx = Math.floor(Math.random() * queDaño.length);
    let fueIdx = Math.floor(Math.random() * cuandoFue.length);

    return `${quienFue[quienIdx]}, ${queIso[isoIdx]}, ${queDaño[dañoIdx]}, ${cuandoFue[fueIdx]}.`;
}
function getMedian(list) {
    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        });

        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    const listaArreglada = list.sort((a, b) => a - b)
console.log(listaArreglada);
    const mitadLista = parseInt(listaArreglada.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true
        } else {
            return false
        }
    }


    if (esPar(listaArreglada.length)) {
        const elemento1 = listaArreglada[mitadLista - 1];
        const elemento2 = listaArreglada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return promedioElemento1y2;
    } else {
        return listaArreglada[mitadLista];
    }

}
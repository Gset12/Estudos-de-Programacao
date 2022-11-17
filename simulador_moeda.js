const dado = {
    moeda: () => {
        let dado = Math.floor(Math.random() * 2);
        var result = (dado === 0)? "Cara":"Coroa";
        return result;
    },

    jogar_moeda: () => {
        let cont = 1;
        let resultados = [];
    
        while(cont <= 6){
            resultados.push(dado.moeda());
            ++cont;
        }
        return resultados;},
        
    resultados: () => {
        let cont = 1;
        let matrix_resultados = [];
    
        while(cont <= 6){
            matrix_resultados.push(dado.jogar_moeda());
            ++cont;
        }
        console.log(matrix_resultados);}
};

dado.resultados();

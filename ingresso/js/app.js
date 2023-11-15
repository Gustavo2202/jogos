
function comprar() {
    let tipoDoIngresso = document.getElementById('tipo-ingresso');
    let campo = parseInt(document.getElementById('qtd').value);

    /*alert(campo.value);
    alert(tipoDoIngresso.value);
    */

    if (tipoDoIngresso.value == "pista") {
        comprarPista(campo);
    } else if (tipoDoIngresso.value == "superior") {
        comprarsuperior(campo);
    }
    else{
        comprarInferior(campo);
    }



    function comprarInferior(campo) {
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

        if (campo > qtdInferior) {
            alert('Quantidade indisponivel para tipo inferior');
        }else{
            qtdInferior = qtdInferior - campo;
            document.getElementById('qtd-inferior').textContent = qtdInferior;

            alert('Compra realizada com sucesso!')
        }

    }


    function comprarsuperior(campo) {
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

        if (campo > qtdSuperior) {
            alert('Quantidade indisponivel para tipo superior');
        }else{
            qtdSuperior = qtdSuperior - campo;
            document.getElementById('qtd-superior').textContent = qtdSuperior;

            alert('Compra realizada com sucesso!')
        }

    }



    function comprarPista(campo) {
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

        if (campo > qtdPista) {
            alert('Quantidade indisponivel para tipo pista');
        }else{
            qtdPista = qtdPista - campo;
            document.getElementById('qtd-pista').textContent = qtdPista;

            alert('Compra realizada com sucesso!')
        }

    }



}




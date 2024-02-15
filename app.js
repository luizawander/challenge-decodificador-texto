function criptografar(){

    //atribui valor da textarea a variavel
    var puxarTexto = document.getElementById('input').value;
    var retornarTexto = document.getElementById ('out');

    //replace é o método chamado para substituir 
    retornarTexto.value= puxarTexto.replace(/e/g, 'enter') // o g (global) é para que todas as ocorrencias sejam
                                   .replace(/i/g, 'imes') //subistituidas
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
}

function descriptografar(){

    var puxarTexto = document.getElementById('input').value;
    var retornarTexto = document.getElementById ('out');

    //replace é o método chamado para substituir 
    retornarTexto.value= puxarTexto.replace(/enter/g, 'e')
                                   .replace(/imes/g, 'i')
                                   .replace(/ai/g, 'a')
                                   .replace(/ober/g, 'o')
                                   .replace(/ufat/g, 'u');
}

function copiarTexto() {
    var textoCopiado = document.getElementById('out').value;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado com sucesso: " + textoCopiado);
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}

function obterDados(){
    nome = $("#inputNome")
    numero = $("#inputNumero")
    $.ajax({
        contentType: 'application/json',
         url : "/cadastrar",
         type : 'post',
         data : JSON.stringify({
              nome : nome.val(),
              numero : numero.val()
         }),
         beforeSend : () => $("#resultado").html("Buscando...")

    })
    .done( (msg) => {
        $("#resultado").html(msg)
    } )
}
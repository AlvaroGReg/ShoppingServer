window.addEventListener('load', function () {

    $.get('/getdata','kittens',function(respuesta){

        console.log('Respuesta del servidor:', respuesta);
    })
});
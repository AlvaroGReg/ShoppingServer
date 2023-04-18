let main = document.getElementById('mainframe');


//ONLOAD INDEX
window.addEventListener('load', function () {

    chargeMain('home');
});

//NAVEGATION

function chargeMain(direction){
  
  switch(direction){
      
    case 'admin':
      clearMain();
      loadAdmin();
      break;
      
    case 'home':
      clearMain();
      loadHome();
      break;
  }
}

function loadHome(){
  
   let newSection = document.createElement('section');
  
    $.get('/getdata', function (respuesta) {

        respuesta.forEach(function (element) {
           
            let newContainer = document.createElement('div');
            let newArticle = document.createElement('article');
            let newIMG = document.createElement('img');
            let newName = document.createElement('p')

            newSection.setAttribute("class", "sectionoffers");
            newContainer.setAttribute("class", "listcontainer");

            newIMG.src = element.product_img;
            newName.innerHTML = element.product_name;

            main.appendChild(newSection);
            newSection.appendChild(newContainer);
            newContainer.appendChild(newArticle);
            newArticle.appendChild(newIMG);
            newArticle.appendChild(newName);
        });
    });
  
}

function loadAdmin(){
  
  let newSection = document.createElement('section');
  let newContainer = document.createElement('div');
  let newList = document.createElement('ul');

  $.get('/getproducts', function (respuesta){
    
    console.log(respuesta);
    
  });
}

function clearMain(){
   while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}
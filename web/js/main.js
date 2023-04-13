//ONLOAD INDEX
window.addEventListener('load', function () {

    $.get('/getdata', function (respuesta) {

        respuesta.forEach(function (element) {
            let newSection = document.createElement('section');
            let newContainer = document.createElement('div');
            let newArticle = document.createElement('article');
            let newIMG = document.createElement('img');
            let newName = document.createElement('p')

            newContainer.setAttribute("class", "listcontainer");
            newArticle.setAttribute("class", "listitem");
            newIMG.setAttribute("class", "itemimg");
            newName.setAttribute("class", "itemname");

            newIMG.src = element.cat_img;
            newName.innerHTML = element.cat_name;

            document.getElementById('main').appendChild(newSection);
            newSection.appendChild(newContainer);
            newContainer.appendChild(newArticle);
            newArticle.appendChild(newIMG);
            newArticle.appendChild(newName);
        });
    });
});
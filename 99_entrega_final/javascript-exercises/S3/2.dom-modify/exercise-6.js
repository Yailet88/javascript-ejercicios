/*Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.*/


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


// Crear lista
const lista = document.createElement('ul');

// Crear loop que tome cada elemento del array, y lo agregue a la lista como li
apps.forEach(app => {
    
    let listItem = document.createElement('li');

    listItem.textContent = app;

    lista.appendChild(listItem);
});


document.body.appendChild(lista);
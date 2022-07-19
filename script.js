//1.- Selector
const charactersContainer = document.querySelector("#characters_container");
//2.- URL 
const charactersURL = "https://starwars-server.vercel.app/characters";

//3.- Iniciamos con la funcion initCharacters y tambien incluir el mapeo que necesitaremos mas tarde (recuerda el ejemplo del huevo xD) 
window.onload = () => {
    //Este es el ON de todo lo demas
    initCharacters()
}


const initCharacters = async () => {

    //Datos en JSON
    const characters = await getCharacters();
    //Pasar la lista en JSON para luego mapearlas :3
    mapCharacters(characters);
};

const getCharacters = async () => {
    //Agarrar datos de la API crudo
    const rawData = await fetch(charactersURL);
    //Convierte datos crudos en JSON (Formato refinado para que el JS pueda leerlo, the "spice" of Arrakis, the Space Guild, and the Empire! T_T)
    const jsonData = await rawData.json();
    return jsonData;
};

const mapCharacters = (list) => {
    //Donde estan los datos a mapear? (OJO: cada API tiene su propio orden!!! T_T)
    list.data.characters.map((item) => {
    //Aqui hacemos una funcion para escoger los datos que estamos interesados a pasar al html generado :3
        return generateHTML({
        name: item.name,
        origin: item.origin,
        role: item.role,
        image: item.image,
        description: item.description
    });
    });
};

const generateHTML = (item) => {
//Aca generamos una constante en donde vamos a organizar la info (datos) que mapeamos en el paso anterior
const myFigure = `
        <figure class="figure_container">
            <div class="name_origin_container">
                <h3>${item.name}</h3>
                <h4>${item.origin}</h4>
            </div>
            <img src="${item.image}" alt="${item.name}" />
            <h4>${item.role}</h4>
            <p>${item.description}</p>
        </figure>
        `; 
    //Ahora a imprimir cada uno de los figure con la siguiente funcion:
    print(myFigure);
};

const print = (figure) => {
//Ahora atacamos al contenedor (la nave xD), y le inyectamos los figures 
//(html organizado en el paso anterior), y la llave para entrar es el siguiente argumento:
 charactersContainer.innerHTML += figure;
};


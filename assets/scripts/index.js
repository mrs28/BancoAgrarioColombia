// *********** SUBMENU  DE PRODUCTOS - HEADER********
// crear el evento en btn products
const subMenuProducts = document.querySelector(".header__subMenu");
subMenuProducts.classList.add("boxHidden");

let showSubMenuProducts = ()=>{
    subMenuProducts.classList.remove("boxHidden")
}

const btnNavProducts = document.getElementById("btnNavProducts");
btnNavProducts.addEventListener("click", showSubMenuProducts);

// ****** LISTA DE PRODUCTOS SUB MENU ************

const containerListProducts = document.querySelector(".containerListProducts");
containerListProducts.classList.add("boxHidden");

let showContainerListProducts = ()=>{
    containerListProducts.classList.remove("boxHidden");
}

const btnMenuCredits = document.getElementById("btnMenuCredits");
btnMenuCredits.addEventListener("click", showContainerListProducts);

// lista Personales
let listSubMenuPersonal = document.createElement("div");
listSubMenuPersonal.setAttribute("class", "itemMenu");
containerListProducts.appendChild(listSubMenuPersonal);

const titlePersonal = document.createElement("h6");
titlePersonal.innerText = "Personales";
listSubMenuPersonal.appendChild(titlePersonal);


let listPersonal = document.createElement("div"); 
listPersonal.innerHTML = ""; // aqui array objeto
listSubMenuPersonal.appendChild(listPersonal)


// Lista Productivos
let listSubMenuProductive = document.createElement("div");
listSubMenuProductive.setAttribute("class", "itemMenu");
containerListProducts.appendChild(listSubMenuProductive);

const titleProductive = document.createElement("h6");
titleProductive.innerText = "Productivos";
listSubMenuProductive.appendChild(titleProductive);

let listProductive = document.createElement("div"); 
listProductive.innerHTML = ""; // aqui array objeto
listSubMenuProductive.appendChild(listProductive)

// Solictar crédito
let listSubMenuCredit = document.createElement("div");
listSubMenuCredit.setAttribute("class", "itemMenu");
containerListProducts.appendChild(listSubMenuCredit);

const titleCredit = document.createElement("h6");
titleCredit.innerText = "Un crédito para lo que necesites";
listSubMenuCredit.appendChild(titleCredit);

const imgCredit = document.createElement("img");
imgCredit.src = "./assets/images/salesman.png";
listSubMenuCredit.appendChild(imgCredit);

const btnCredit = document.createElement("button");
btnCredit.setAttribute("class", "btn btnCreditList");
btnCredit.innerText= "Solicítalo aquí";
listSubMenuCredit.appendChild(btnCredit);


// ***OBJETOS
    let personals = [  
        {   link: "Crédito semilla emprendedora",
            url:"https://newportalbacprod.azurewebsites.net/personas/productor-agropecuario/credito-para-siembra"
        },
        {   link: "CrediAgri al instante",
            url: "https://developer.mozilla.org/es/"
        },
        {   link: "Crédito para jóvenes rurales",
            url: "https://www.bancoagrario.gov.co/personas/productor-agropecuario/credito-adecuacion-tierras"
        },
        {   link: "Crédito verde",
            url: "https://www.bancoagrario.gov.co/personas/productor-agropecuario/credito-verdes"
        },
        {   link: "Cañafacil",
            url: "https://www.bancoagrario.gov.co/personas/productor-agropecuario/cana-facil"
        },
        {   link: "Cupo rotativo agropecuario",
            url: "https://www.bancoagrario.gov.co/personas/productor-agropecuario/cupo-rotativo-agropecuario"
        },
        {   link: "Finagro",
            url: "https://www.bancoagrario.gov.co/financiacion/finagro"
         },
         {  link: "Crédito para mujeres rurales",
            url: "https://www.bancoagrario.gov.co/personas/productor-agropecuario/credito-mujeres-rurales"
         },
    ]

    let personalList = personals.map(personal=> {
        return `<li><a href="${personal.url}">${personal.link}</a></li>`
    });
    listPersonal.innerHTML = personalList.join("")

/// ***
    let productives = [
        "Abonando mi tierra",
        "Crédito para siembra",
        "Crédito para maquinaria", 
        "Crédito para infraestructura",
        "Crédito para servicios de apoyo",
        "Crédito para capital de trabajo", 
        "Crédito para certificaciones",
        "Crédito para adecuacion de tierras"
    ]

    let productiveList = productives.map(productive=> {
        return `<li>${productive}</li>`
    });
    listProductive.innerHTML = productiveList.join("")
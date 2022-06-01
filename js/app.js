/* 

Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
Consigli del giorno:
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico, ed anche il console.table()
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva immagine visibile nell’html?

*/

// Definiamo un array di oggetti che rappresentano i membri del team.

const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo:"Fouder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll" ,
        ruolo: "Chief Editor" ,
        foto: "./img/angela-caroll-chief-editor.jpg" ,
    },
    {
        nome: "Walter Gordon" ,
        ruolo: "Office Manager" ,
        foto: "./img/walter-gordon-office-manager.jpg" ,
    },
    {
        nome: "Angela Lopez" ,
        ruolo: "Social Media Manager" ,
        foto: "./img/angela-lopez-social-media-manager.jpg" ,
    },
    {
        nome: "Scott Estrada" ,
        ruolo: "Developer" ,
        foto: "./img/scott-estrada-developer.jpg" ,
    },
    {
        nome: "Barbara Ramos" ,
        ruolo: "Graphic Designer" ,
        foto: "./img/barbara-ramos-graphic-designer.jpg" ,
    },
]


//Milestone 1

stampaDatiTeam();

function stampaDatiTeam (){
    for(let i = 0; i < ourTeam.length; i++){
        console.log("Nome: " + ourTeam[i].nome + ", Ruolo: " + ourTeam[i].ruolo + ", foto: " + ourTeam[i].foto + ";" )
    }
    console.table(ourTeam);
}

//


// Milestone 2

const container = document.getElementById("team-container");



//
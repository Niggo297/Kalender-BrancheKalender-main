let date = new Date();
let month = date.getMonth() + 1;
let year = date.getYear() + 1900;
let dateD = document.getElementById("dateD");
let germandate = date.toLocaleDateString("de-DE");
document.getElementById("dateD").innerText = germandate;
document.getElementById("year").innerText = year;



// ich möchte was ausgeben und zwar das vor dem Tag/Monat wenn es nur eine ziffer ist eine 0 steht
// gelöst habe ich das mit einer Bedinung ? hier kommt dann was kommen soll : und hier was ansonten gemacht wird
// date.getDate() holt das heutige Datum, um etwas statisches mit etwas dynamsiche zu verbinden benutzt man backticks und $ 
// `${date.getDate() <10 ? `0${date.getDate()}`:date.getDate()} <-- das ist die bedingung für den Tag
//.${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1} <--  das für den Moant 
//.${date.getFullYear()}` <-- hier kommt einfach das Jahr, das passt deshalb wird damit nichts gemacht 
//EIne weitere möglichkeit um es ein wenig lesbarer zu gestalten
// let monthUpdate = date.getMonth()+1 
//  if (monthUpdate < 10 ){ 
//     monthUpdate =  `0${monthUpdate}`
// }

// let dayUpdate = date.getMonth()
// if ( dayUpdate < 10){
//     dayUpdate = "0"  + dayUpdate
// }

// let jahresanzahl = date.getFullYear()

// let komplettesDatum = dayUpdate + "." + monthUpdate + "." + jahresanzahl
// console.log(komplettesDatum)
function richtigesDatumAusgeben(){
dateD.innerText = `${date.getDate() <10 ? `0${date.getDate()}`:date.getDate()}.${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}.${date.getFullYear()}`

}
richtigesDatumAusgeben()







//WeekdayD beziehungweise gedDay gibt den Index des WTages aus (z.B1)
//die wochentage habe ich dann nochmal neu in einem Array in weekdays
// weekdayName = weekday[weekday] 
// da wird der wert von dem weekday index an das selbst erstelle Array
//wiedergegeben ( also index 0 = sonntag, 1 = montag usw.)
// das wird in der variable gespeichert und dann ausgegeben
let weekday = date.getDay();
let weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
let weekdayName = weekdays[weekday];
document.getElementById("weekday").innerText = weekdayName;
// das gleiche wie bei den wochentage nur für die monate 
// ich habe einen array und dieser array gibt die zahl des index month wieder
let monate = ["Januar", "Februar","März", "April", "Mai", "Juni", "Juli", "August", "September","Oktober", "November","Dezember"]
let monateName = monate[month -1]
document.getElementById("monthD").innerText = monateName

// wenn der Wert von 1-7 ist muss es sich ja um den ersten Tag in der Woche halten( bei 7)
//Tag des Monatstrifft es besser wie "Woche"
let woche = date.getDate();

if (woche >= 1 & woche <= 7) {
  document.getElementById("weekInMonth").innerText = "erste";
}
if (woche >= 8 & woche <= 14) {
  document.getElementById("weekInMonth").innerText = "zweite";
}

if (woche >= 15 & woche <= 21) {
  document.getElementById("weekInMonth").innerText = "dritte";
}
if (woche >= 22 & woche <= 28) {
  document.getElementById("weekInMonth").innerText = "vierte";
}

if (woche >= 29 & woche <= 31) {
  document.getElementById("weekInMonth").innerText = "fünfte";
}




// Die schleife geht die liste solange durch bis die i = todayheute ist also der heutige Tag als Zahl.
//dann sagen wir dem elementen welches die liste gefunden hat, dass es dem eine id="today" geben soll
// die css funktionn macht die farbe rot
todaydate= date.getDate()
let tdlist = document.getElementsByTagName("td");
for (let i = 0; i < tdlist.length; i++) {
  if (tdlist[i].innerText == todaydate) {
    tdlist[i].setAttribute("id", "today");
  }
}

//Eine weitere möglichkeit um die Wochentage anzeigen zu lassen
//date.getDay gibt immer die Zahl des Monats wieder
//  let übungsindex = date.getDay();
//  function index (){
//    if(übungsindex == 0){
//       return "Sonntag"
//    }

//    if(übungsindex == 1){
//       return "Montag"
//    }

//    if(übungsindex == 2){
//       return "Dienstag"
//    }

//    if(übungsindex == 3){
//       return "Mittwoch"
//    }
//    if(übungsindex == 4){
//       return "Donnerstag"
//    }

//    if(übungsindex == 5){
//       return "Freitag"
//    }

//    if(übungsindex == 6){
//       return "Samstag"
//    }

// }



let monateÜberschrift = ["Januar", "Februar","März", "April", "Mai", "Juni", "Juli", "August", "September","Oktober", "November","Dezember"]
let monateNameÜberschrift = monate[month -1]
document.getElementById("MonatÜberschrift").innerText = monateNameÜberschrift
let jahresÜberschrift = document.getElementById("JahresÜberschrift").innerText = year;
const wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag","Freitag", "Samstag","Sonntag"];
const table = document.getElementById("calendar-table")



    
function createKalender (){
  const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    
  // Tabelle und Kopfzeile erstellen
  const table = document.getElementById('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Kopfzeile hinzufügen
  const headerRow = document.createElement('tr');
  for (let i = 0; i < weekdays.length; i++) {
      const th = document.createElement('th');
      th.textContent = weekdays[i];
      headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Beispiel-Daten für den Körper der Tabelle
  const exampleData = [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["8", "9", "10", "11", "12", "13", "14"],
      ["15", "16", "17", "18", "19", "20", "21"],
      ["22", "23", "24", "25", "26", "27", "28"],
      ["29", "30", "31", "", "", "", ""]
  ];

  // Körper der Tabelle füllen
  for (let i = 0; i < exampleData.length; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < weekdays.length; j++) {
          const td = document.createElement('td');
          td.textContent = exampleData[i][j] || ''; // Leere Zellen für nicht vorhandene Tage
          row.appendChild(td);
      }
      tbody.appendChild(row);
  }
  table.appendChild(tbody);
};

function createButton(){
  const maincontainer = document.querySelector(".section2")

let button1 = document.createElement("button")
let button2 = document.createElement("button")
button1.textContent ="zurück"
button2.textContent = "weiter"
maincontainer.appendChild(button2)
maincontainer.appendChild(button1)

}

createKalender()
createButton()

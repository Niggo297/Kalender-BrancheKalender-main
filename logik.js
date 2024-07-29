let date = new Date();
let month = date.getMonth() + 1;
let year = date.getYear() + 1900;
let dateD = document.getElementById("dateD");
let germandate = date.toLocaleDateString("de-DE");
document.getElementById("dateD").innerText = germandate;
document.getElementById("year").innerText = year;

function richtigesDatumAusgeben() {
  dateD.innerText = `${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }.${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }.${date.getFullYear()}`;
}
richtigesDatumAusgeben();
function updateKalender() {
  // Leere die Tabelle, bevor du sie neu erstellst
  const table = document.getElementById("table");
  table.innerHTML = "";
  createKalender();
}
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
let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
let monateName = monate[month - 1];
document.getElementById("monthD").innerText = monateName;

// wenn der Wert von 1-7 ist muss es sich ja um den ersten Tag in der Woche halten( bei 7)
//Tag des Monatstrifft es besser wie "Woche"
let woche = date.getDate();

if ((woche >= 1) & (woche <= 7)) {
  document.getElementById("weekInMonth").innerText = "erste";
}
if ((woche >= 8) & (woche <= 14)) {
  document.getElementById("weekInMonth").innerText = "zweite";
}

if ((woche >= 15) & (woche <= 21)) {
  document.getElementById("weekInMonth").innerText = "dritte";
}
if ((woche >= 22) & (woche <= 28)) {
  document.getElementById("weekInMonth").innerText = "vierte";
}

if ((woche >= 29) & (woche <= 31)) {
  document.getElementById("weekInMonth").innerText = "fünfte";
}

// Die schleife geht die liste solange durch bis die i = todayheute ist also der heutige Tag als Zahl.
//dann sagen wir dem elementen welches die liste gefunden hat, dass es dem eine id="today" geben soll
// die css funktionn macht die farbe rot
todaydate = date.getDate();
let tdlist = document.getElementsByTagName("td");
for (let i = 0; i < tdlist.length; i++) {
  if (tdlist[i].innerText == todaydate) {
    tdlist[i].setAttribute("id", "today");
  }
}

let monateÜberschrift = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
let monateNameÜberschrift = monate[month - 1];
document.getElementById("MonatÜberschrift").innerText = monateNameÜberschrift;
let jahresÜberschrift = (document.getElementById(
  "JahresÜberschrift"
).innerText = year);
const wochentage = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];
const table = document.getElementById("calendar-table");
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let firstDayOfMonth = new Date(currentYear, currentMonth, 1);
let startDay = (firstDayOfMonth.getDay() + 6) % 7; // Montag = 0, Sonntag = 6
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

function createKalender() {
  const weekdays = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  // Tabelle und Kopfzeile erstellen
  const table = document.getElementById("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Kopfzeile hinzufügen
  const headerRow = document.createElement("tr");
  for (let i = 0; i < weekdays.length; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    headerRow.appendChild(th);
    switch (i) {
      case 0: // Montag
      case 1: // Dienstag
      case 2: // Mittwoch
      case 3: // Donnerstag
        th.classList.add("weekday-primary"); // Klasse für Montag bis Donnerstag
        break;
      case 4: // Freitag
        th.classList.add("weekday-friday"); // Klasse für Freitag
        break;
      case 5: // Samstag
        th.classList.add("weekday-saturday"); // Klasse für Samstag
        break;
      case 6: // Sonntag
        th.classList.add("weekday-sunday"); // Klasse für Sonntag
        break;
    }
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  let currentDay = 1;
  for (let i = 0; i < 6; i++) {
    // maximal 6 Reihen (Wochen) notwendig
    const row = document.createElement("tr");
    for (let j = 0; j < weekdays.length; j++) {
      const td = document.createElement("td");
      if (i === 0 && j < startDay) {
        td.textContent = ""; // Leere Zellen vor dem 1. Tag des Monats
      } else if (currentDay > daysInMonth) {
        td.textContent = ""; // Leere Zellen nach dem letzten Tag des Monats
      } else {
        td.textContent = currentDay.toString();
        td.classList.add("day-cell");

        if (j === 4) {
          td.classList.add("friday");
        } else if (j === 5) {
          td.classList.add("saturday");
        } else if (j === 6) {
          td.classList.add("sunday");
          
        }
        if (currentDay === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
          td.setAttribute("id", "today");}
        currentDay++;
      }

      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
}
function vorherigerMonat() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  updateKalender();
}

function naechsterMonat() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  updateKalender();
}
function createButton() {
  const maincontainer = document.querySelector(".section2");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  button1.textContent = "zurück";
  button2.textContent = "weiter";
  maincontainer.appendChild(button2);
  maincontainer.appendChild(button1);
  button1.addEventListener("click",vorherigerMonat)
button2.addEventListener("click",naechsterMonat)
}


createButton();
createKalender();

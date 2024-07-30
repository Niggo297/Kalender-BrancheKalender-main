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
let TageImMonat = date.getDate();

if ((TageImMonat >= 1) & (TageImMonat <= 7)) {
  document.getElementById("weekInMonth").innerText = "erste";
}
if ((TageImMonat >= 8) & (TageImMonat <= 14)) {
  document.getElementById("weekInMonth").innerText = "zweite";
}

if ((TageImMonat >= 15) & (TageImMonat <= 21)) {
  document.getElementById("weekInMonth").innerText = "dritte";
}
if ((TageImMonat >= 22) & (TageImMonat <= 28)) {
  document.getElementById("weekInMonth").innerText = "vierte";
}

if ((TageImMonat >= 29) & (TageImMonat <= 31)) {
  document.getElementById("weekInMonth").innerText = "fünfte";
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


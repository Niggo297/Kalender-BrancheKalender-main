let date = new Date();

let ersterTagDesJahres = new Date(date.getFullYear(), 0, 1); // 0 steht für Januar
let ersterTagMonat = new Date(date.getFullYear(), date.getMonth(), 1); // z.B Feb 01 2024
let startTag = ersterTagMonat.getDay(); // Thu
let letzterTagImMonat = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let endTag = letzterTagImMonat.getDay();
let tageImMonat = letzterTagImMonat.getDate();
let restTageVormonat = startTag == 0 ? 6 : startTag - 1; // starttag - 1 gibt die differenz zu Montag wieder/ wenn starttag 0 ist wird 6 wiedergegeben weil von sonntag zu Montag 6 Tage dazwischen ist
let calender = document.getElementById("kalender");
let Wochen = Math.ceil((restTageVormonat + tageImMonat) / 7); // ceil rundet die Wochen auf / durch wochen bekomme ich raus wie viele wochen oder eher gesagt wie viele Zeilen ich benötige für den Monat
let kalenderContainer = document.getElementById("kalender-container");
let aktuellerMonat = 0;
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



function Kalender() {
  for (i = 0; i < Wochen; i++) {
    // Schleife 1 wird gestartet und läuft solange bis doe wochen noch kleiner sind // dadurch erreichen wir wie viele Reihen wir benötigen oder generiert werden
    let reihe = document.createElement("tr");


    for (j = 0; j < 7; j++) {
      // j wird gestartet bis wir 7 erreicht haben, weil die woche eben nur 7 Tage hat
      let zelle = document.createElement("td"); // die innere Schleife generiert die einzelnen Zellen (td)

      let aktuellerTag = i * 7 + j - restTageVormonat + 1; // hier wird geschaut in welcher woche wir sind indem wir i * 7 rechnen ( 0 *7 = 0, also woche 0)
      // + j also die Tage --> 0*7 + 2 = O Woche + zweiter Tag
      // - restTageVormonat --> der Monat startet ja nicht immer bei dem ersten mit Montag, die differenz sorgt dafür wann der kalender die erste Zeile ausgibt
      // und + 1 weil die woche standardmäßig bei 0 startet und somit der Montag erreicht wird, welcher bei 1 liegt
     
      if (aktuellerTag > 0 && aktuellerTag <= tageImMonat) {
        zelle.textContent = aktuellerTag;
        // wenn der aktuelle Tag größer ist wie 0 und kleiner gleich der tage im Monat dann soll der Tag ausgegeben werden, ansonten soll die Zeile leer bleiben
      } else {
        zelle.textContent = "";
        
      }

      reihe.appendChild(zelle);
    }
    calender.appendChild(reihe);
  }
  
}

let ButtonDiv = document.createElement("div");
ButtonDiv.setAttribute("id", "buttonDiv");
kalenderContainer.appendChild(ButtonDiv)
let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.setAttribute("id", "button1")
button2.setAttribute("id", "button2")
button1.innerText = "zurück";
button2.innerText = "weiter";

ButtonDiv.appendChild(button1);
ButtonDiv.appendChild(button2);




function MonatWeiter (){
  date.setMonth(date.getMonth() + 1);
 Kalender = null;
 
  
}
console.log(date)

function MonatZurück (){
  
  date.setMonth(date.getMonth()-1)
  console.log(date)
Kalender()
}







button1.addEventListener("click", MonatZurück);
button2.addEventListener("click", MonatWeiter);

Kalender();



// // Die schleife geht die liste solange durch bis die i = todayheute ist also der heutige Tag als Zahl.
                                     //dann sagen wir dem elementen welches die liste gefunden hat, dass es dem eine id="today" geben soll
                                       // die css funktionn macht die farbe rot
                                                    // todaydate = date.getDate();
todaydate = date.getDate();
let tdlist = document.getElementsByTagName("td");  
for (let i = 0; i < tdlist.length; i++) {
  if (tdlist[i].innerText == todaydate) {
    tdlist[i].classList.add("makieren");
  }
  
}


let date = new Date();
let ersterTagDesJahres = new Date(date.getFullYear(), 0, 1); // 0 steht für Januar
let ersterTagMonat = new Date(date.getFullYear(), date.getMonth(), 1); // z.B Feb 01 2024
let startTag = ersterTagMonat.getDay(); // Thu
let letzterTagImMonat = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let endTag = letzterTagImMonat.getDay();
let tageImMonat = letzterTagImMonat.getDate();

let restTageVormonat = startTag == 0 ? 6 : startTag - 1; // starttag - 1 gibt die differenz zu Montag wieder/ wenn starttag 0 ist wird 6 wiedergegeben weil von sonntag zu Montag 6 Tage dazwischen ist
let calender = document.getElementById("kalender");
let Wochen = Math.ceil(restTageVormonat + tageImMonat / 7); // ceil rundet die Wochen auf / durch wochen bekomme ich raus wie viele wochen oder eher gesagt wie viele Zeilen ich benötige für den Monat
let kalenderContainer = document.getElementById("kalender-container");
let aktuellerMonat = 0;
let wochentage = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];
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

let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.innerText = "zurück";
button2.innerText = "weiter";

kalenderContainer.appendChild(button1);
kalenderContainer.appendChild(button2);

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

let datToday = new Date();
let date = new Date(
  datToday.getFullYear(),
  datToday.getMonth(),
  datToday.getDate()
);
// let ersterTagDesJahres = new Date(datToday.getFullYear(), 0, 1); // 0 steht für Januar
// let ersterTagMonat = new Date(datToday.getFullYear(), datToday.getMonth(), 1); // z.B Feb 01 2024
// let startTag = ersterTagMonat.getDay(); // Thu
// let letzterTagImMonat = new Date(
//   datToday.getFullYear(),
//   datToday.getMonth() + 1,
//   0
// );
// let endTag = letzterTagImMonat.getDay();
// let AnzahlDerTageImMonat = letzterTagImMonat.getDate();
// let restTageVormonat = startTag == 0 ? 6 : startTag - 1; // starttag - 1 gibt die differenz zu Montag wieder/ wenn starttag 0 ist wird 6 wiedergegeben weil von sonntag zu Montag 6 Tage dazwischen ist
// let calender = document.getElementById("kalender");
// let Wochen = Math.ceil((restTageVormonat + AnzahlDerTageImMonat) / 7); // ceil rundet die Wochen auf / durch wochen bekomme ich raus wie viele wochen oder eher gesagt wie viele Zeilen ich benötige für den Monat
// let kalenderContainer = document.getElementById("kalender-container");


  



  function ÜberschriftAusgeben() {
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

    let month = datToday.getMonth() + 1;
    let year = datToday.getYear() + 1900;
    let monateNameÜberschrift = monate[month - 1];
    document.getElementById("MonatÜberschrift").innerText =
      monateNameÜberschrift;
    document.getElementById("JahresÜberschrift").innerText = year;
  }
  ÜberschriftAusgeben();
  
  
  
  
  
  
  
  
  
  
  function InfoBox() {
    let month = datToday.getMonth() + 1;
    let year = datToday.getYear() + 1900;
    let dateD = document.getElementById("dateD");
    let germandate = datToday.toLocaleDateString("de-DE");
    let weekday = datToday.getDay();
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
    MonatAusgebenText = monate[month - 1];

    document.getElementById("weekday").innerText = weekdayName;
    document.getElementById("dateD").innerText = germandate;
    document.getElementById("year").innerText = year;
    document.getElementById("monthD").innerText = MonatAusgebenText;

    dateD.innerText = `${
      datToday.getDate() < 10 ? `0${datToday.getDate()}` : datToday.getDate()
    }.${
      datToday.getMonth() + 1 < 10
        ? `0${datToday.getMonth() + 1}`
        : datToday.getMonth() + 1
    }.${datToday.getFullYear()}`;

    // das gleiche wie bei den wochentage nur für die monate
    // ich habe einen array und dieser array gibt die zahl des index month wieder

    // wenn der Wert von 1-7 ist muss es sich ja um den ersten Tag in der Woche halten( bei 7)
    //Tag des Monatstrifft es besser wie "Woche"
    let TagIndex = datToday.getDate();

    if ((TagIndex >= 1) & (TagIndex <= 7)) {
      document.getElementById("weekInMonth").innerText = "erste";
    }
    if ((TagIndex >= 8) & (TagIndex <= 14)) {
      document.getElementById("weekInMonth").innerText = "zweite";
    }

    if ((TagIndex >= 15) & (TagIndex <= 21)) {
      document.getElementById("weekInMonth").innerText = "dritte";
    }
    if ((TagIndex >= 22) & (TagIndex <= 28)) {
      document.getElementById("weekInMonth").innerText = "vierte";
    }

    if ((TagIndex >= 29) & (TagIndex <= 31)) {
      document.getElementById("weekInMonth").innerText = "fünfte";
    }
  }
  InfoBox();
  
  
  
  
  
  
  
  
  
  function HeutigenTagRotMakieren() {
    todaydate = datToday.getDate();
    let tdlist = document.getElementsByTagName("td");
    for (let i = 0; i < tdlist.length; i++) {
      if (tdlist[i].innerText == todaydate) {
        tdlist[i].classList.add("makieren");
      } 
    }
  }
  HeutigenTagRotMakieren();

  
  
  
  
  
  
  
  
  // function richtigesDatumAusgeben() {
  //   dateD.innerText = `${
  //     datToday.getDate() < 10 ? `0${datToday.getDate()}` : datToday.getDate()
  //   }.${
  //     datToday.getMonth() + 1 < 10
  //       ? `0${datToday.getMonth() + 1}`
  //       : datToday.getMonth() + 1
  //   }.${datToday.getFullYear()}`;
  // }
  // richtigesDatumAusgeben();

 
 
 
 
 
 
 
 
 
  function ÜberschriftAusgeben() {
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

    let month = datToday.getMonth() + 1;
    let year = datToday.getYear() + 1900;
    let monateNameÜberschrift = monate[month - 1];
    document.getElementById("MonatÜberschrift").innerText =
      monateNameÜberschrift;
    document.getElementById("JahresÜberschrift").innerText = year;
  }
  ÜberschriftAusgeben();


function Kalender() {
  let ersterTagMonat = new Date(date.getFullYear(), date.getMonth(), 1); // z.B Feb 01 2024
  let startTag = ersterTagMonat.getDay(); // Thu
  let letzterTagImMonat = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let tageImMonat = letzterTagImMonat.getDate();
  let restTageVormonat = startTag == 0 ? 6 : startTag - 1; // starttag - 1 gibt die differenz zu Montag wieder/ wenn starttag 0 ist wird 6 wiedergegeben weil von sonntag zu Montag 6 Tage dazwischen ist
  let calender = document.getElementById("kalender");
  let Wochen = Math.ceil((restTageVormonat + tageImMonat) / 7); // ceil rundet die Wochen auf / durch wochen bekomme ich raus wie viele wochen oder eher gesagt wie viele Zeilen ich benötige für den Monat

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







function ButtonErstellen() {
  let kalenderContainer = document.getElementById("kalender-container");
  let ButtonDiv = document.createElement("div");
  ButtonDiv.setAttribute("id", "buttonDiv");
  kalenderContainer.appendChild(ButtonDiv);
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  button1.setAttribute("id", "button1");
  button2.setAttribute("id", "button2");
  button1.innerText = "zurück";
  button2.innerText = "weiter";

  ButtonDiv.appendChild(button1);
  ButtonDiv.appendChild(button2);
}
ButtonErstellen();

function MonatWeiter() {
  let calender = document.getElementById("kalender");
  date.setMonth(date.getMonth() + 1);
  calender.innerHTML = `<tr>
<th class="day">Montag</th>
<th class="day">Dienstag</th>
<th class="day">Mittwoch</th>
<th class="day">Donnerstag</th>
<th class="day">Freitag</th>
<th class="day" id="samstag">Samstag</th>
<th class="day" id="sonntag">Sonntag</th>
</tr>`;
  Kalender();
}

function MonatZurueck() {
  let calender = document.getElementById("kalender");
  date.setMonth(date.getMonth() - 1);
  calender.innerHTML = `<tr>
          <th class="day">Montag</th>
          <th class="day">Dienstag</th>
          <th class="day">Mittwoch</th>
          <th class="day">Donnerstag</th>
          <th class="day">Freitag</th>
          <th class="day" id="samstag">Samstag</th>
          <th class="day" id="sonntag">Sonntag</th>
        </tr>`;
  Kalender();
}

button2.addEventListener("click", MonatWeiter);
button1.addEventListener("click", MonatZurueck);
Kalender();




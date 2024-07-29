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


//-------------------------------------------------------------------------------------

 // Beispiel-Daten für den Körper der Tabelle
  // let exampleData = [
  //     ["1", "2", "3", "4", "5", "6", "7"],
  //     ["8", "9", "10", "11", "12", "13", "14"],
  //     ["15", "16", "17", "18", "19", "20", "21"],
  //     ["22", "23", "24", "25", "26", "27", "28"],
  //     ["29", "30", "31", "", "", ""]
  // ];

  // // Körper der Tabelle füllen
  // for (let i = 0; i < exampleData.length; i++) {
  //     const row = document.createElement('tr');
  //     for (let j = 0; j < weekdays.length; j++) {
  //         const td = document.createElement('td');
  //         td.textContent = exampleData[i][j] || '';
  //         td.classList.add('day-cell');
          
  //         if (weekdays[j] === "Freitag") {
  //           td.classList.add('friday');
  //         } else if (weekdays[j] === "Samstag") {
  //           td.classList.add('saturday');
  //         } else if (weekdays[j] === "Sonntag") {
  //           td.classList.add('sunday');
  //         } // Leere Zellen für nicht vorhandene Tage
         
  
//-------------------------------------------------------------------------------

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














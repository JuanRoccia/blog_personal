let day;
switch (new Date().getDay()) {
  case 0:
    // day = "Sunday";
    day = "Domingo";
    break;
  case 1:
    // day = "Monday";
    day = "Lunes";
    break;
  case 2:
    // day = "Tuesday";
    day = "Martes";
    break;
  case 3:
    // day = "Wednesday";
    day = "Miércoles";
    break;
  case 4:
    // day = "Thursday";
    day = "Jueves";
    break;
  case 5:
    // day = "Friday";
    day = "Viernes";
    break;
  case 6:
    // day = "Saturday";
    day = "Sábado";
}
// document.getElementById("wichDay").innerHTML = "Today is " + day;
document.getElementById("wichDay").innerHTML = "Hoy es " + day;

const magic = () => new Date()
console.log(magic())
document.getElementById("wichDay2").innerHTML = magic();
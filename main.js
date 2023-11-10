{
let person = prompt("Please Enter Your Name ?", "");
  if (person != null) {
    document.getElementById("name").innerHTML =
    "WELCOME !" + person + " ";
  }
}
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;



let scoreHome = 0;
let scoreGuest =0;



 
function addOneHome() {

    scoreHome+=1;
    document.getElementById("scoreHome").innerHTML =scoreHome;
    return scoreHome;

  }

  function addTwoHome() {
    scoreHome+=2;
    document.getElementById("scoreHome").innerHTML =scoreHome;
    return scoreHome;
   }

   function addThereHome() {
    scoreHome+=3;
    document.getElementById("scoreHome").innerHTML =scoreHome;

   }


   function addOneGuest() {
    scoreGuest+=1;
    document.getElementById("scoreGuest").innerHTML =scoreGuest;
  }

  function addTwoGuest() {
    scoreGuest+=2;
    document.getElementById("scoreGuest").innerHTML =scoreGuest;

   }

   function addThereGuest() {
    scoreGuest+=3;
    document.getElementById("scoreGuest").innerHTML =scoreGuest;

   }


   function NewGame() {
    document.getElementById("scoreGuest").innerHTML =0;
    document.getElementById("scoreHome").innerHTML =0;
   }











// 15 rows
// 16 seats

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function randowCharacter() {
  let c = getRandomInt(15);
  let result = "";
  switch (c) {
    case 1:
      result = "A";
      break;
    case 2:
      result = "B";
      break;
    case 3:
      result = "C";
      break;
    case 4:
      result = "D";
      break;
    case 5:
      result = "E";
      break;
    case 6:
      result = "F";
      break;
    case 7:
      result = "G";
      break;
    case 8:
      result = "H";
      break;
    case 9:
      result = "I";
      break;
    case 10:
      result = "J";
      break;
    case 11:
      result = "K";
      break;
    case 12:
      result = "L";
      break;
    case 13:
      result = "M";
      break;
    case 14:
      result = "N";
      break;
    case 15:
      result = "O";
      break;
    default:
      result = "Press Again";
      break;
  }
  return result;
}

function randowSeat() {
  let x = getRandomInt(16) + randowCharacter();
  // console.log(getRandomInt(16) + randowCharacter());
  console.log(x);

  document.getElementById("seat").innerHTML = x;
}

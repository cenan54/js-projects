function convertToDecimal() {
  var binaryInput = document.getElementById("binaryInput").value;
  var decimal = document.getElementById("decimal");
  //binary validaty condition statement
  if (isBinary(binaryInput)) {
    //turning text to binary
    var binary = parseInt(binaryInput, 2);
    decimal.innerText = binary;
  } else {
    decimal.innerText = "Please enter a valid Binary number";
  }
}

//validation function
function isBinary(str) {
  return /^[01]+$/.test(str);
}

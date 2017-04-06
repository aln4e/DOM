function isIdValid (str){
  return str.length >= 6 && (!str.includes("!") && !str.includes("#") && !str.includes("$"))
}

function hasLower(str){
  return str.toUpperCase() !== str;
}

function hasUpper(str){
  return str.toLowerCase() !== str;
}

function isPasswordValid(str){
  return str != "password" && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes("$")) && (str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9") || str.includes("0")) && hasUpper(str) && hasLower(str)
}

function main(){
  var username = document.getElementById("requestedId").value
  if (isIdValid(username) == true){ document.getElementById("idResult").innerHTML = "id is valid"
  } else { document.getElementById("idResult").innerHTML = "id is invalid"
  }
}

function mainTwo(){
  var password = document.getElementById("requestedPass").value
  if (isPasswordValid(password) == true){ document.getElementById("passwordResult").innerHTML = "password is valid"
} else { document.getElementById("passwordResult").innerHTML = "password is invalid"
  }
}




function togglePasswordVisibility(){
    var input = document.getElementById("pass-form")
    if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}


var input = document.querySelector(".text").value

function changing()
{
  var div = document.createElement("p")
  div.textContent = input

  document.querySelector(".showimg").append(div)

}

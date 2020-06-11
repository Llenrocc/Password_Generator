var setChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
var setMinimumLength = 8; 
var setMaximumLength = 128;
var setNum = 5; 
 
//Strings:
var pass = ""; //Password string.
var plainText = ""; //Plain text version.
var textTitle = ""; //Plain text intro.
var fileName = "pass.txt"; //Plain text filename.
 
//Random password function:
function randString() {
  //Get user values:
  var newChars = $("#new-chars").val();
  var newLenght = $("#new-length").val();
  var newNum = $("#new-num").val();
  //Check valid values:
  if (newChars) {
    setChars = newChars;
  };
  if (newLenght) {
    setLenght = newLenght;
  };
  if (newNum) {
    setNum = newNum;
  };
  //Reset table:
  $("table").empty();
  //Passwords gen:
  for (i=0; i<setNum; i++) {
    //Shuffle chars:
    for(var j = 0; j < setLenght; j++) {
      pass += setChars.charAt(Math.floor(Math.random() * setChars.length));
    };
    //Append items:
    $("table").append("<tr><td>" + parseInt(i+1) + "</td><td>" + pass + "</td><td contenteditable=''>Edit me!</td></tr>");
    //Reset 'pass' string:
    pass = "";
  };
};
 
//Run password generator:
$(document).ready(function(){
  randString();
});
 
//Password generator triggers:
$("input").change(function(){
  randString();
});
 

function toPlain(){
  
  textTitle = "\n\n=========================\nRandom password generator\n=========================\n\n"
 
  tableContent = $("table").html();
  
  plainText = tableContent.replace(/<tbody>|<\/tbody>|<tr>|<\/td>/g, '').replace(/<\/tr>/g, '\n').replace(/<td>|<td contenteditable="">/g, ' > ');
};
 

function download() {
  
  toPlain();
  
  var textContent = document.createElement('a');
  textContent.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textTitle+plainText)); //Set content.
  textContent.setAttribute('download', fileName) //set filename.
  textContent.style.display = 'none'
  document.body.appendChild(textContent)
  textContent.click()
  document.body.removeChild(textContent)
};
 
//Print function:
function printTable(){
  window.print();
}
 
//Buttons display:
$(".buttons-box").hide(0);
setTimeout(function(){ 
  $(".buttons-box").fadeIn(300);
}, 5000);
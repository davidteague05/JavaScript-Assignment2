// constants for query selector
const custcolor = document.querySelector(".custColor");
const randcolor = document.querySelector(".randColor");
const imgselect = document.querySelector("#imageSelect");
var custnumber = document.querySelector("#customNumber");
var pageBgColor = document.querySelector("html");
// function to change bg color from user input and add student id
function changeCustomColor(){
    var custColor = custnumber.value;
    if(custColor <= 20 && custColor >= 0){
        pageBgColor.style.backgroundColor = "green";
    }else if(custColor <= 40 && custColor > 20){
        pageBgColor.style.backgroundColor = "blue";
    }else if(custColor <= 60 && custColor > 40){
        pageBgColor.style.backgroundColor = "orange";
    }else if(custColor <= 80 && custColor > 60){
        pageBgColor.style.backgroundColor = "purple";
    }else if(custColor <= 100 && custColor > 80){
        pageBgColor.style.backgroundColor = "yellow";
    }else{
        pageBgColor.style.backgroundColor = "red";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {

}

// event listeners for on click event of buttons and select
custcolor.addEventListener("click", changeCustomColor);
randcolor.addEventListener("click", changeRandomColor);
imgselect.addEventListener("click", addList);
// event listeners for on change event of select
imgselect.addEventListener("change", changeImage);
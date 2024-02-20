// constants for query selector
const custcolor = document.querySelector(".custColor");
const randcolor = document.querySelector(".randColor");
const imgselect = document.querySelector("#imageSelect");
var custnumber = document.querySelector("#customNumber");
var pageBgColor = document.querySelector("html");
var studentId = document.querySelector("#myStudentId");
// function to change bg color from user input and add student id
function changeCustomColor(){
    studentId.style.visibility = "visible";
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
    studentId.style.visibility = "visible";
    var randNum = Math.floor(Math.random()*(100-1))+1;
    console.log(randNum);
    if(randNum <= 20 && randNum >= 0){
        pageBgColor.style.backgroundColor = "green";
    }else if(randNum <= 40 && randNum > 20){
        pageBgColor.style.backgroundColor = "blue";
    }else if(randNum <= 60 && randNum > 40){
        pageBgColor.style.backgroundColor = "orange";
    }else if(randNum <= 80 && randNum > 60){
        pageBgColor.style.backgroundColor = "purple";
    }else if(randNum <= 100 && randNum > 80){
        pageBgColor.style.backgroundColor = "yellow";
    }else{
        pageBgColor.style.backgroundColor = "red";
    }
}

// function to generate options for select list
function addList() {
    studentId.style.visibility = "visible";
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    var imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Array containing image file paths
    imgselect.innerHTML = '';
    for (var i = 0; i < imageArray.length; i++) {
        var option = document.createElement("option");
        option.value = imageArray[i];
        option.text = imageArray[i];
        imgselect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    var select = document.getElementById("imageSelect");
    var selectedImage = select.value;
    var imgElement = document.getElementById("images");
    imgElement.src = "img/" + selectedImage;
}

// event listeners for on click event of buttons and select
custcolor.addEventListener("click", changeCustomColor);
randcolor.addEventListener("click", changeRandomColor);
imgselect.addEventListener("click", addList);
// event listeners for on change event of select
imgselect.addEventListener("change", changeImage);
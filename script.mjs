function yard(event){
console.log("Button Active");
event.preventDefault();

let inp= document.querySelector("#yardsInput").value;
let result = inp*9;
let message= "This is your :---- "+ result;
document.querySelector("#Show").innerHTML= message;


}
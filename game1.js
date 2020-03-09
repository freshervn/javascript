//challenge 1:your age in days 
function ageInDays(){
    var birthYear =prompt("what year were you born...");
    var ageInDays=(2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer =document.createTextNode("You are "+ ageInDays+" day old");
    h1.setAttribute("id","ageIndays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    console.log(ageInDays)
}
function Reset(){
    document.getElementById("ageIndays").remove();
}
function generateCat(){
    var image=document.createElement("img");
    var div=document.getElementById("flex-cat-gen");
    image.src="https://i.pinimg.com/236x/e2/a5/45/e2a5455ce9c0c23f6dddd2fe51381655.jpg";
    div.appendChild(image);
}
/* function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice=yourChoice.id,botchoice;
    result =decideWiner(humanChoice,botchoice);
    message =finalMessage(result);
    rpsFrontEnd(yourChoice.id,botchoice,message);
    >
} */
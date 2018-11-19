var score = 0;
var round = Math.floor(Math.random() * 7);
var i = 0;   
var words = ["usa", "japan", "italy", "germany", "england", "china", "scotland"];
const lengths = words.length;
var invalid = ["0","1","2","3","4","5","6","7","8","9","enter","[","]","tab","capslock", 
"shift","control","alt"];
var used = [];
var usedwrong = [];
var guesses = 6 ; 
var index;
var j = round;

function underDash(){
if (i < words[j].length) {
        for (i = 0; i < words[j].length; i++) {
                var targetDiv = document.getElementById("current");
                var newDiv = document.createElement("div");
                newDiv.textContent = "_";
                newDiv.setAttribute("class", "dash");
                newDiv.setAttribute("id", "current" + (i+1))
                targetDiv.appendChild(newDiv);
        } 
}
}

function rounds(){
//Selecting which flag to show
if (round == 0) {
        document.getElementById("img").src="assets/Images/USA.png";
        }
        else if (round == 1){
        document.getElementById("img").src="assets/Images/Japan.png";
        }
        else if (round == 2){
        document.getElementById("img").src="assets/Images/Italy.png";
        }
        else if (round == 3){
        document.getElementById("img").src="assets/Images/Germany.png";
        }
        else if (round == 4){
        document.getElementById("img").src="assets/Images/England.png";
        }
        else if (round == 5){
        document.getElementById("img").src="assets/Images/China.png";
        }
        else if (round == 6){
        document.getElementById("img").src="assets/Images/Scotland.png";
        }
}




document.onkeyup = function(event) {

        j = round;
        var letter = event.key.toLowerCase();

        if (i < words[j].length) {
                underDash();
        }

        //Win the grand prize
        if (score >= 6) {
        document.getElementById("Text").innerHTML = "You Win!";
        document.getElementById("img").src="Images/Win.png";
        //new Audio().play
        return false;
        }

                if (words[j].indexOf(letter) > -1) {
                        var x = words[j].indexOf(letter) + 1;
                        var y = 0;
                        document.getElementById("current" + x).innerHTML = letter; 
                        used.push(letter);
                        words[j] = words[j].replace(letter," ")
                        }
                
                else if (invalid.indexOf(letter) > -1) {
                        alert("please enter letters only!");
                }   
                else if (used.indexOf(letter) > -1) {
                        return false;
                }               
                else if (usedwrong.indexOf(letter) > -1) {
                        return false;
                }
                else  {
                        usedwrong.push(letter);
                        guesses = guesses - 1;
                } 

        //Declaring a victory      
        if (used.length == words[j].length){
                score++;
                for(i = 0; i < words[j].length; i++){
                used.splice(i);
                }
                for(i = 0; i < words[j].length; i++){
                usedwrong.splice(i);
                }
                words = ["usa", "japan", "italy", "germany", "england", "china", "scotland"];
                guesses = 6; 
                for(i = 0; i < words[j].length; i++){
                document.getElementById("current" + (i+1)).remove();
                }
                i = 0;
                round = Math.floor(Math.random() * 7);
                return score;
        }

        //Declaring a loss
        if (guesses < 1) {
                alert("you lose!");   
        }

        rounds();

        document.getElementById("score").innerHTML = "Score: " + "<br>" + "<br>" + score;
        document.getElementById("guessesleft").innerHTML = "Guesses left: " + "<br>" + "<br>" + guesses;
        //document.getElementById("current").innerHTML = "Current Word: ";
        document.getElementById("latter").innerHTML = "Letters already used: " + usedwrong;
        
}

function main() {
underDash();
rounds();

}
// Task 1:
/*Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".*/

var zakatPercentage = 0.025;
var userInput = +prompt("Enter your wealth amount.");
var result = userInput * zakatPercentage;
alert("Your zakat value is " + result);

// Task 2:
/*calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/

var familyMembers = +prompt("For Fitrah please enter the total number of your family members");
var method = +prompt("For Gandum type '1', Jau type '2', Khajoor type '3', Khishmish type '4', Ajwa Khajoor type '5'");
// for Gandum
if(method == 1){
    alert("Your family's total fitra for Gandum is "+(familyMembers*320));
}
//for Jau
else if(method == 2){
    alert("Your family's total fitra for Jau is "+(familyMembers*800));
}
//for Khajoor
else if(method == 3){
    alert("Your family's total fitra for Khajoor is "+(familyMembers*2800));
}
// for kishmish
else if(method == 4){
    alert("Your family's total fitra for Khismish is "+(familyMembers*6400));
}
// for Ajwa Khajoor
else if(method == 5){
    alert("Your family's total fitra for Ajwa Khajoor is "+(familyMembers*10400));
}
// invalid input
else{
    alert("Invalid Input Try again!")
}

// Task 3:
/*Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.*/

let secretNumber = Math.floor((Math.random()*10));
var guess = +prompt("Guess the number between 1 and 10");
if(secretNumber == guess){
    alert("Congratulations! You guessed the secret number")
}
else if(secretNumber > guess ){
    alert("Your Guess is low keep trying, success is near to you!")
}
else if(secretNumber == (guess-2) ){
    alert("Your Guess is too low keep trying success is near to you!")
}
else if(secretNumber < guess ){
    alert("Your Guess is high keep trying success is near to you!")
}
else if(secretNumber == (guess+2) ){
    alert("Your Guess is too high keep trying success is near to you!")
}
else{
    alert("Try number between 1 and 10.")
}

// Task 4:
/*Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make sure your name in capitalized case).*/

var name = prompt("Enter your name in block or capital letters.");
// name= name.toLowerCase();
// name =name.CharAt(0)
var Name = name.CharAt(0).toUpperrCase() + name.slice(1); //error
alert(Name);

// Task 5:
/*In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity.*/

// empty arrays
var contactNumbers = [];
var contactNames = [];

//number of inputs
var numberOfContacts =2;

// for loop to run prompt for numberOfContacts
for (let i = 0; i < numberOfContacts; i++) {
  var InputNumber = prompt("Enter a contact number: ");
  let InputName = prompt("Enter a contact name: ");

  //put input of prompt in array
  contactNumbers.push(InputNumber);
  contactNames.push(InputName);
}

console.log("Contact Numbers:");
// for loop to display all contactNumbers input arrays of numberOfContacts
for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}

console.log("Contact Names:");
// for loop to display all contactNames input arrays of numberOfContacts
for (let i = 0; i < contactNames.length; i++) {
  console.log(contactNames[i]);
}

// Task 6:
/*Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.*/


var products = [' Rabit pair',' Duck pair',' Peacock pair',' Parrot pair '];
var Inputproduct = +prompt("For purchasing Rabit pair press '1', Duck pair '2', Peacock pair '3', Parrot pair '4'");

if(Inputproduct ==1 || Inputproduct < 5){

    var removedProduct = products.splice(Inputproduct-1, 1);
    alert("Remaining Prodicts: " +products + " & Number of remaining Products: "+ products.length);
}
else{
    alert("Invalid input");
}

// Task 7:
/*Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.*/

var inputNation = prompt("Enter your nationality:");

if (inputNation == 'Pakistan' || inputNation == 'Pakistani' || inputNation == 'Pakistan' || inputNation == 'pakistani' ||inputNation == 'pakistan' || inputNation == 'PAKISTANI' || inputNation == 'PAKISTAN' || inputNation == 'Indian' || inputNation == 'India' || inputNation == 'indian' || inputNation == 'india' ){
    alert("You are eligible to vote! click 'Ok' to proceed further:")
    var inputGender = prompt("Please enter your gender Male or Female:");
    var inputAge = +prompt("Please enter your age:");
    if (inputGender == ('male'||'men'||'Male'||'Men'||'MALE'||'MEN') && inputAge >= 19){
        alert("You are eligible to vote!");
    }
    else if(inputGender == ('female'||'Female'||'FeMale'||'feMale'||'FEMALE') && inputAge >= 19){
        var maritalStatus = prompt("Are you married? Yes or No");
        if(maritalStatus == 'yes' || maritalStatus == 'Yes' || maritalStatus == 'YES'){
            alert("You are eligible to vote");
        }
        else{
            alert("You are not eligible to vote because of unmarried status")
        }

    }
    else{
        alert("You are not eligible to vote because your age should be over 18")
    }

}
else{
    alert("For eligibility your nationality must b Pakistani or Indian")
}

// Task 8:
/*You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array)*/

var WorldCupSquad = ['Babar azam', 'Shoaib Akhtar','Shadab', 'Azhar Ali', 'M.Rizwaan','Haris Sohail', 'Shaeen Afridi', 'Imran Hashmi', 'Umer Akmal', 'M.Amir','Ahmed Shehzaad', 'Sarfaraz Ahmed', 'Imad Waseem', 'M.Harris', 'Hassan Ali'];
var finalplayers = WorldCupSquad.slice(0,15);

console.log("WorldCupSquad:");
console.log(WorldCupSquad);
//random 11 players selection from copied array of finalplayers (15 players)
var removedPlayers = finalplayers.splice(Math.floor((Math.random()*15)), 11);

console.log("Final Players selected from worldcupSquad for tomorrow's Match with India are:");
console.log(removedPlayers);

///////////////////OR///////////////////

var WorldcupSquad = ['Babar azam', 'Shoaib Akhtar','Shadab', 'Azhar Ali', 'M.Rizwaan','Haris Sohail', 'Shaeen Afridi', 'Imran Hashmi', 'Umer Akmal', 'M.Amir','Ahmed Shehzaad', 'Sarfaraz Ahmed', 'Imad Waseem', 'M.Harris', 'Hassan Ali'];
//copied 11 array items
var finalplayer = WorldCupSquad.slice(0,11);

console.log("No.Of WorldCupSquad : " + WorldcupSquad.length + " Squad Players: " + WorldcupSquad);
console.log("No.Of Final selected Players: "+ finalplayer.length + " Final Selected Players: " +finalplayer);


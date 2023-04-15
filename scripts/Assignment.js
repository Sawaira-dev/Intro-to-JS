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


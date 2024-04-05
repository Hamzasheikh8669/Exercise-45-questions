//                                                        EXERCISE 1
// installation are completed


//                                                        EXERCISE 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName : string = "Eric";
console.log(`Hellow ${personName}, Would you like to learn some python today?`);

//                                                      EXERCISE 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let quote: stri// Lower case
let personName: string ="Hamza";
console.log("lowercase:", personName.toLowerCase());

// // upper case
console.log("Uppercase:", personName.toLocaleUpperCase());

// // title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//                                                           EXERCISE 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote = "A person never made a mistake never tried to anything";
let author = "Albert Einstine";
console.log(`${author} once said, "${quote}`);

//                                                           EXERCISE 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote: string = "A person never made a mistake never tried to anything";
let famous_person = "Albert Einstine";
let message =`${famous_person} Once said, ${quote}`;
console.log(message);
//                                                            EXERCISE 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let peronName: string = `\n\t Hamza sheikh\t\n`;
console.log(peronName);
let stripped: string = peronName.trim();
console.log(stripped);


//                                                            EXERCISE 7,8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the 8. Be sure number  to enclose your operations in print statements to see the results.
//8) You should create four lines that look like this:
// Your output should simply be four lines with the number 8 appearing once on each line.

console.lo-g(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//                                                           EXERCISE 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber: number = 5;
console.log(`my favorite number is ${favoriteNumber}`);

//                                                          EXERCISE 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// my name is Hamza sheikh
// Dated: 29/02/2024
// this program will run simple program
console.log('Hello world simple program');

//                                                          EXERCISE 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let members: string[] =['Hamza','Asad','Waleed','ibrahim','shehroz'];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

//                                                          EXERCISE 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name

let members: string[] =['Hamza','Asad','Waleed','ibrahim','shehroz'];
let message: string =' Today All school & colleges are closed due to heavy rain';
for(let i=0; i<members.length; i++){
    console.log(message , members[i]);
}
//                                                          EXERCISE 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] =['land cruser','Honda civic','parado','vitz','Heavy bike'];
for(let i=0; i<transportation.length; i++){
 console.log('i would like to own a' , transportation[i]);
}

//                                                          EXERCISE 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
for(let i=0; i<guest_list.length; i++){
console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
}
export{guest_list};
//                                                          EXERCISE 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list

let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
for(let i=0; i<guest_list.length; i++){
console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
// }
// let not_present : string = 'irfan';
// let new_guest : string = 'Kamran khan tessori';
// guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
    }
   console.log(`Mr . ${not_present} will not coimg on dinner`)

//                                                        EXERCISE 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];

let not_present : string = 'irfan';
let new_guest : string = 'Kamran khan tessori';
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
console.log('Respected sir', guest_list[i] , '\n we invited you on Dinner.\n\nThank you')
    }
  guest_list.unshift('farhan','anus', 'ammar','faizan');
  for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir', guest_list[i] , '\n we invited you on Dinner.\n\nThank you')
   }
// //                                         EXERCISE 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
// tart with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
let not_present : string = 'irfan';
let new_guest : string = 'Kamran khan tessori';
guest_list[1] = new_guest;
guest_list.unshift('farhan','anus', 'ammar','faizan');
console.log('\nunfortunately we can not arrange a big table.jut only two people allow');
while(guest_list.length > 2){
  let remove_guest = guest_list.pop();
  console.log(`sorry sir/madam.${remove_guest}you are not invite for Dinner.`);
}
for(let i=0; i<guest_list.length; i++){
  console.log('Respected sir'+ guest_list[i] + '\nyes you are still invite for Dinner.\nThank you\n')
   }
   guest_list.splice(0,2);
   console.log(guest_list);
//                                                  EXERCISE 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places = ['Melbourne', 'sydney', 'berlin', 'milano', 'toronto', 'new york']
console.log('original ' + places);
console.log('copy ' + [...places].sort())
console.log('original ' + places);
console.log('copy ' + [...places].sort().reverse());
console.log('copy ' + [...places].sort().reverse());
console.log('original ' + places.sort());
console.log('copy ' + [...places].sort().reverse());


// //                                                             EXERCISE 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let invitation : string[] = ["Hamza" , "Asad"]
let count_invitation : number = invitation.length

console.log(`${count_invitation} people wil come on dinner`)

//                                                             EXERCISE 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let cities : string [] =['karachi', 'islamabad', 'lahore', 'multan', 'quetta', 'peshawar', 'sialkot']
console.log("list of cities:");
for(let names of cities){
    console.log(names);
}

//                                                         EXERCISE 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item  {
  name:string
  price:number
}
// create two objects
const Book: item ={
  name: 'ESSENTIAL TYPESCRIPT'
  price: 300
}
const Apple: item ={
  name: 'apple'
  price: 200
}
console.log(`Book: ${Book.name}, price: $${Book.price}`)
console.log(`apple: ${Apple.name}, price: $${Apple.price}`)

// //                                                   EXERCISE 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let array: (string | Number) [] =['Hamza','Asad',2,3,4,'Tariq']
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//                                                 EXERCISE 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';

// // Test1 : equality  comparison(True); 
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru')//True

// // Test2 :Strict equality  comparison(True); 
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru')// True

// // Test3 :Strict Inequality  comparison(False); 
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru')// False

// // Test4 :Strict Inequality  comparison(False); 
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru')// False

// // Test5 :Strict Less than  comparison(False); 
console.log("Is car < 'subaru'? I predict True.");
console.log(car < 'subaru')// False

// // Test6 :Strict Greater than  comparison(False); 
console.log("Is car > 'subaru'? I predict True.");
console.log(car > 'subaru')// False

// // Test7 :Strict Less than & equal  comparison(True); 
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru')// True

// // Test8 :Strict Greater than & equal  comparison(True); 
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru')// True

// // Test9 :Checking truthiness(true); 
console.log("Is car?  I predict True.");
console.log(car <= 'subaru')// True (non-empty string is truthy)

// // Test10 :Checking Falsiness(false); 
console.log("Is !car?  I predict false.");
console.log(!car); // false (negation of a truthy value)



//                                                  EXERCISE 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car: string = 'subaru';
let age: number = 24;
let numbers: number[] = [1, 2, 3, 4];

// // STRINGS

// //  Test 1: equality (True)
 console.log("Is car == 'subaru'? I predict True.");
 console.log(car == 'subaru'); //True(case insensitive)

// //  Test 2:  Strict equality (False)
 console.log("Is car === 'subaru'? I predict false.");
 console.log(car === 'subaru'); //false(case sensitive)

// //  Test 3:  Strict equality (true)
 console.log("Is car != 'civic'? I predict True.");
 console.log(car != 'civic'); //false(case sensitive)
 
// //  Test 4:  Strict equality (false)
 console.log("Is car !== 'subaru'? I predict false.");
 console.log(car !== 'subaru'); //false(case sensitive)



// //  LOWERCASE FUNCTIONS CASE

// // Test 5: lowercase conversion (true)
console.log("Is car.tolowercase() == 'subaru'? I predict True.");
 console.log(car.toLowerCase() == 'subaru'); //true (converted to lowercase)

// Test 6: lowercase conversion (false)
console.log("Is car === car.tolowercase()? 'subaru'? I predict False.");
 console.log(car === car.toLowerCase()); //false (Original value remains uppercase)

//  NUMERICALS TEST
//  Test 7: equality (True)
console.log("Is age == 25? i predict True");
console.log(age == 25); //true

// // Test 8: inequality (False)
console.log("Is age != 30? I predict true");
console.log(age != 30);

// // Test 9: Greater than (False)
console.log("Is age > 30? I predict False");
console.log(age > 30); // False

// // Test 10: Less than or equal (True)
console.log("Is age <= 25? I predict true");
console.log(age <= 25); // True

// // LOGICAL OPERATORS
// // Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True");
console.log(age > 20 && age < 30);// True (Both condition met)

// // Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False");
console.log(age > 30 || age < 18);// False (neither condition met)

// // ARRAY TESTS
// // Test 13:In array
console.log("is 3 not is numbers? I predict True");
console.log(3 in numbers); //True (Check for index existense)

// //  Test 14: Not in array (False)
console.log("Is 5 not in numbers? I predict True");
 console.log(5 not in numbers); //True (negation of "in" operator)

//                                                   EXERCISE 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

//  create a variable called alien_color
let alien_color: string = "Green";

if(alien_color == "Green"){
  console.log("The player just earned 5 points");

}
alien_color = "Yellow";
if(alien_color == "Green"){
  console.log("the player earned just 5 points");
}
//                                             EXERCISE 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// choose a color for an alien as you
// did in exercise 26,& write if-else chain
let alien_color: string = "Green";

// if the alien color is green , print a statement that
// the player just earned 5 points for tshooting the alien
if(alien_color == "Green"){
  console.log("The player just earned 5 points for shooting the alien");
}else{
  console.log("the player just earned 10 points");
}
alien_color = "Red";
if(alien_color == "Green"){ 
  console.log("the player just earned 5 points for shooting the alien")
}
//                                         EXERCISE 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color: string = "Green";

  if(alien_color == "Green"){
    console.log("the player earned just 5 points");
  }

 else if(alien_color == "Yellow"){
    console.log("the player earned just 10 points");
  }
else if(alien_color == "Red"){
    console.log("the player earned just 15 points");
  }
  else{
    console.log("Please select the Rigth color");
  }
  
  //                                           VERSION 2
  alien_color = "Red";
  if(alien_color == "Green"){
    console.log("the player earned just 5 points");
  }
  else if(alien_color == "Red"){
    console.log("the player earned just 10 points");
  }
  else if(alien_color == "Yellow"){
    console.log("the player earned just 15 points");
  }
  else{
    console.log("Please select the Rigth color");
  }
  //                                     VERSION 3
  alien_color = "Yellow";
  if(alien_color == "Green"){
    console.log("the player earned just 5 points");
  }
  else if(alien_color == "Red"){
    console.log("the player earned just 10 points");
  }
  else if(alien_color == "Yellow"){
    console.log("the player earned just 15 points");
  }
  else{
    console.log("Please select the Rigth color");
  }

  
//                                                                     EXERCISE 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder

let age: number = 18;
 if (age < 2){
  console.log("you are a baby")
 } else if(age <  4){
  console.log("you ara a Toddler")
 }else if(age < 13){
  console.log("you are a kid")
 }else if(age < 20){
  console.log("You are a teenager")
 }else if(age < 65){
  console.log("you are a Adult ")
 }else {
  console.log("You are older")
 }

//                                                           EXERCISE 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruit: string [] = ["Apple","Grapes","Mango","Peach","Watermelon"]

if(favourite_fruit.includes("Apple")){
  console.log("Apple")
}

if(favourite_fruit.includes("Grapes")){
  console.log("Grapes")
}
if(favourite_fruit.includes("Mango")){
  console.log("Mango")
}
if(favourite_fruit.includes("Peach")){
  console.log("You really like Banana")
}
if(favourite_fruit.includes("watermelon")){
  console.log("You really like Banana")
}

//                                                                         EXERCISE 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

 let users : string [] = ["Hamza","Asad","faraz","farhan","admin"]

 for(let user of users){
  if(user === "admin"){
   console.log("Hellow admin, would you like to see a status report?" )
 } else {
     console.log(`Hellow ${user}, Thank you for logging in again`)
 }

 }

//                                                                               EXERCISE 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users : string [] = ["Hamza","Asad","faraz","farhan","admin"]

users = []
if(users.length === 0){
  console.log("we need to find some user")
}

//                                                                                        EXERCISE 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users : string [] = ["Hamza", "Mahnoor", "Maheen", "Asma", "Asad"]
let new_users : string [] = ["hamza" ,"asma" ,"Alina" ,"Waleed" ,"Sharib"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
  if(current_users_lower.includes (new_user.toLowerCase())) {
    console.log(`sorry ${new_user}, that name is taken`)
  } else {
      console.log(`yes ${new_user}, is Still in list`)
  }
}

//                                                                                         EXERCISE 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for(let number of numbers){

  if(number === 1){
    console.log(`${number}st`)

  }else if (number === 2){
    console.log(`${number}nd`)

  } else if(number === 3){
    console.log(`${number}rd`)
  } else{
    console.log(`${number}th`)
  }
}

//                                                                                         EXERCISE 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favourite_pizza :  string [] = ["pepperoni Pizza","chicken","veg"]

for(let pizza of favourite_pizza){
  console.log(pizza)
}
console.log("\n")

for(let pizza of favourite_pizza){
  console.log(`i really like ${pizza} pizza`)
}
console.log("\nI really love pizza")

//                                                                         EXERCISE 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals : string [] = ["Cat" , "Dog" , "goat"]

for(let animal of animals){
  console.log(animal)
}

console.log("\n")

for(let animal of animals){
  console.log(`A ${animal} has a Unique voice`)
}

// console.log("\nAll of these are Great pets. But i love cat more")

//                                                                          EXERCISE 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size: string, text: string): void {
  console.log(` you order a ${size} shirt that says ${text}`)
}
makeShirt('large','"i love typescript"')
makeShirt('medium','"i need a big shirt"')


//                                                                          EXERCISE 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: string = "large" ,text: string = "i love typescript"):  void{
  console.log(`you have order a ${size}, shirt that guys ${text}`)
}
makeShirt('small','i need a big shirt to wear')

//                                                                           EXERCISE 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = 'pakistan'): void{
  console.log(`${city} is in ${country}`)
}

describe_city("Karachi")
describe_city("Italy","europe")
describe_city("islamabad","punjab")

//                                                                          EXERCISE 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function citycountry(city: string, country: string): void{
  console.log (`${city}, ${country}`)
}
let c1 = citycountry("lahore","PAKISTAN")
let c2 = citycountry("Newyork","USA")
let c3 = citycountry("tokyo","JAPAN")

//                                                                     EXERCISE 40
// . Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist
//  name and an album title, and it should return a Object containing these two pieces of information. Use the function to make
//  three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

function makeAlbum  (artist: string, title: string ): {artist: string, title: string}{
  const  dictionary = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1)
  }
  return dictionary
}
let album = makeAlbum("Hamza", "Blue")
console.log(album)

 album = makeAlbum("Asad", "Green")
console.log(album)

 album = makeAlbum("Waleed", "yellow")
console.log(album)
//                                                EXERRCISE 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
  for(const magician of magicians){
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    
  }
}

const  magician: string[] = ["hamza" ,"asad", "waleed"]
show_magicians(magician)

//                                                   EXERCISE 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

function make_great(magicians: string[]): void {
  for(let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the great"
  }
} 

const magicians2: string [] = ["anus", "usama", "tahir"]
  make_great(magicians2)
  show_magicians(magicians2)

//                                        EXERCISE 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]){
  const greatmagicians: string[] =[];
  for(let i =0; i < magicians.length; i++){
    greatmagicians.push(magicians[i] + " the great")

  }
  return greatmagicians;
}
 const magicians3: string []=["anus", "usama", "tahir"]
 const greatmagicians2: string[] = make_great2(magicians3)
 show_magicians(magicians3)
 show_magicians(greatmagicians2)

//                                                    EXERCISE 44
// . Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time

function sandWich(...items: string[]): void{
  console.log("sandWich ordered")


for (let i = 0; i < items.length; i++){
  console.log(`- ${items[i]}`)
}
}

console.log("enjoy your sandwich")

sandWich("tomato" , "beef", "capsicum")
sandWich("cheese" , "chicken")
sandWich("mayo sause" , "garlic chicken")

//                                                 EXERCISE 45
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

type car ={
  manufactured: string
  model: string
  [key: string]: any;
}
function createCar(manufactured: string, model: string, optional: Record<string, any >): car{
  return{
    manufactured,
    model,
    ...optional
  }
}

const myCar: car = createCar("toyota", "corolla", {color: "Black" , year: "2024"})
console.log(myCar);
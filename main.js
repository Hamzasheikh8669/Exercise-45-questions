"use strict";
//                                                        EXERCISE 1
// installation are completed
//                                                        EXERCISE 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName : string = "Eric";
// console.log(`Hellow ${personName}, Would you like to learn some python today?`);
//                                                      EXERCISE 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// // let quote: stri// Lower case
// let personName: string ="Hamza";
// console.log("lowercase:", personName.toLowerCase());
// // upper case
// console.log("Uppercase:", personName.toLocaleUpperCase());
// // title case
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
//                                                           EXERCISE 4
// let quote = "A person never made a mistake never tried to anything";
// let author = "Albert Einstine";
// console.log(`${author} once said, "${quote}`);
//                                                           EXERCISE 5
// let quote: string = "A person never made a mistake never tried to anything";
// let famous_person = "Albert Einstine";
// let message =`${famous_person} Once said, ${quote}`;
// console.log(message);
//                                                            EXERCISE 6
// let peronName: string = `\n\t Hamza sheikh\t\n`;
// console.log(peronName);
// let stripped: string = peronName.trim();
// console.log(stripped);
//                                                            EXERCISE 7,8
// console.lo-g(6 + 2);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
//                                                           EXERCISE 9
// let favoriteNumber: number = 5;
// console.log(`my favorite number is ${favoriteNumber}`);
//                                                          EXERCISE 10
// my name is Hamza sheikh
// Dated: 29/02/2024
// this program will run simple program
// console.log('Hello world simple program');
//                                                          EXERCISE 11
// let members: string[] =['Hamza','Asad','Waleed','ibrahim','shehroz'];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }
//                                                          EXERCISE 12
// let members: string[] =['Hamza','Asad','Waleed','ibrahim','shehroz'];
// let message: string =' Today All school & colleges are closed due to heavy rain';
// for(let i=0; i<members.length; i++){
//     console.log(message , members[i]);
// }
//                                                          EXERCISE 13
// let transportation: string[] =['land cruser','Honda civic','parado','vitz','Heavy bike'];
// for(let i=0; i<transportation.length; i++){
//  console.log('i would like to own a' , transportation[i]);
// }
//                                                          EXERCISE 14
// let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
// }
// export{guest_list};
//                                                          EXERCISE 15
// let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
// // }
// // let not_present : string = 'irfan';
// // let new_guest : string = 'Kamran khan tessori';
// // guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected sir', guest_list[i] , '\n we invited you on dinner.\n\nThank you')
//     }
//    console.log(`Mr . ${not_present} will not coimg on dinner`)
//                                                        EXERCISE 16
// let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
// let not_present : string = 'irfan';
// let new_guest : string = 'Kamran khan tessori';
// guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected sir', guest_list[i] , '\n we invited you on Dinner.\n\nThank you')
//     }
// guest_list.unshift('farhan','anus', 'ammar','faizan');
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected sir', guest_list[i] , '\n we invited you on Dinner.\n\nThank you')
//  }
// //                                         EXERCISE 17
// let guest_list: string[] =['Hamza','Asad','Waleed', 'irfan'];
// let not_present : string = 'irfan';
// let new_guest : string = 'Kamran khan tessori';
// guest_list[1] = new_guest;
// guest_list.unshift('farhan','anus', 'ammar','faizan');
// console.log('\nunfortunately we can not arrange a big table.jut only two people allow');
// while(guest_list.length > 2){
//   let remove_guest = guest_list.pop();
//   console.log(`sorry sir/madam.${remove_guest}you are not invite for Dinner.`);
// }
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected sir'+ guest_list[i] + '\nyes you are still invite for Dinner.\nThank you\n')
//    }
//    guest_list.splice(0,2);
//    console.log(guest_list);
// EXERCISE 18
// let places = ['Melbourne', 'sydney', 'berlin', 'milano', 'toronto', 'new york']
// console.log('original ' + places);
// console.log('copy ' + [...places].sort())
// console.log('original ' + places);
// console.log('copy ' + [...places].sort().reverse());
// console.log('copy ' + [...places].sort().reverse());
// console.log('original ' + places.sort());
// console.log('copy ' + [...places].sort().reverse());
// //                                                             EXERCISE 19
let invitation = ["Hamza", "Asad"];
let count_invitation = invitation.length;
console.log(`${count_invitation}peoplw wil come on dinner`);
function createCar(manufactured, model, optional) {
    return Object.assign({ manufactured,
        model }, optional);
}
const myCar = createCar("toyota", "corolla", { color: "Black", year: "2024" });
console.log(myCar);

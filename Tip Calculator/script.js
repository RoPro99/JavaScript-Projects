/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const bill=document.getElementById('billTotalInput');
const tip=document.getElementById('tipInput');
const NoOfPeo=document.getElementById('numberOfPeople');
const PerPerson=document.getElementById('perPersonTotal');


// Get number of people from number of people div
let noofpeople=Number(NoOfPeo.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bills=Number(bill.value);
  

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipper=Number(tip.value)/100;
   

  // get the total tip amount
  const tipAmount = bills*tipper;
  

  // calculate the total (tip amount + bill)
  const total=tipAmount+bills;
  

  // calculate the per person total (total divided by number of people)
   const peravg= total/noofpeople;
  

  // update the perPersonTotal on DOM & show it to user
  PerPerson.innerText=`Rs ${peravg.toFixed(2).toLocaleString('en-US')}`;

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  noofpeople+=1;

  // update the DOM with the new number of people

NoOfPeo.innerText=noofpeople;
  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(noofpeople<=1){
    alert('Heyy!! You Can Not Have Less Then One Person');
    return
  }
  
  // decrement the amount of people
  noofpeople -= 1;

  // update the DOM with the new number of people
 NoOfPeo.innerText=noofpeople;

  // calculate the bill based on the new number of people
 calculateBill();
}
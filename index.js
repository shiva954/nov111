function bookPurchase() {
  let num = Number(prompt("Number of books you purchased : "));
  let total = 0;
  let low = 0, mid = 0, high = 0;

  for (let i = 0; i < num; i++) {
      let bookName = prompt(`Enter the name of book ${i + 1}:`);
      let bookPrice = Number(prompt(`Enter the price of ${bookName}:`));
      total += bookPrice;

      if (bookPrice < 10) {
          low++;
      } else if (bookPrice >= 10 && bookPrice <= 20) {
          mid++;
      } else {
          high++;
      }
  }

  console.log(`the total cost is: ${total}`);
  console.log(`there are ${low} cost books`);
  console.log(`there are ${mid} cost books`);
  console.log(`there are ${high} cost books`);
}
function average() {
  let num = Number(prompt("enter number of ratings:"));
  let total = 0;
  for (let i = 1; i <= num; i++) {
      let rating = Number(prompt(`enter the rating of person ${i}`));
      total += rating;
  }

  console.log(`the average ratiung of the movie is ${total / num}`);
}

function savings() {
  let salary = Number(prompt("enter your salary:"));
  let expenses = Number(prompt("enter your total expenses:"));
  let savings = salary - expenses;
  if (savings >= (25 / 100) * salary) {
      console.log(`you are saving good amount of money`);
  }
  else if ((savings >= (10 / 100) * salary) && (savings < (25 / 100) * salary)) {
      console.log(`you need to save a little more money`);
  }
  else if (savings < (10 / 100) * salary) {
      console.log(`you need to save money `);
  }
  else if (savings <= 0) {
      console.log(`you are in loss and you are not saving money`);
  }
}

function timeToTravel() {
  let distance = Number(prompt("enter the total distance:"));
  let speed = Number(prompt("enter the speed:"));
  let time = distance / speed;
  console.log(`you will reach your destination in ${time} hours`);
}

function total() {
  let total = 0;
  let maths = Number(prompt("enter math marks:"));
  let physics = Number(prompt("enter physics marks:"));
  let chemistry = Number(prompt("enter chemistry marks:"));
  total = maths + physics + chemistry;
  return total;
}
function avgOfStudent() {
  let num = Number(prompt("enter number of students:"));
  for (let i = 1; i <= num; i++) {
      let total = total();
      console.log(`the total of the student ${i} is ${total} and the average is ${total / 3} `)
  }
}
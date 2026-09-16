// const maths = prompt("Enter your Maths score");
// const english = prompt("Enter your English score");
// const science = prompt("Enter your Science score");

// const average = (maths + english + science) / 3;
// console.log(average)
// if (average < 0 || average > 100) {
//   console.log("Wrong input");
// }
// else if (average >= 70) {
//   console.log("A");
// } else if (average >= 60) {
//   console.log("B");
// } else if (average >= 50) {
//   console.log("C");
// } else if (average >= 40) {
//   console.log("D");
// } else if (average >= 30) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// for (a = 0; a <= 11; a++) {
//   console.log(a)

// }
// const firstName = "Havilah";
// const lastName = "Joshua";
// const gender = "Male";
// const path = "Web dev"

// // Template string
// console.log(`i am ${firstName} ${lastName}. I am learning ${path}`);

// // to check the name of the length
// console.log(lastName.length)

// // tHIS CHECKS THE POSITION OF AN INDEX
// let text = "HELLO WORLD";
// console.log(text.charAt(6))

// console.log(text.charCodeAt(2))

// let text1= "Hello world)

// let shop = prompt(" LIST OF ITEMS \n Book \n Chair \n Phone \n Car \n Pen");

// const Book = 2.09;
// const Chair = 14.36;
// const Phone = 12.098;
// const Car = 5.05;
// const Pen = 31.03;

// const item1 = prompt(
//   `1st item.  \n Book- N${Book} \n Chair- N${Chair} \n Phone- N${Phone} \n Car- N${Car} \n Pen- N${Pen}`,
// );
// const item2 = prompt(
//   `2nd item.  \n Book- N${Book} \n Chair- N${Chair} \n Phone- N${Phone} \n Car- N${Car} \n Pen- N${Pen}`,
// );
// const item3 = prompt(
//   `3rd item.  \n Book- N${Book} \n Chair- N${Chair} \n Phone- N${Phone} \n Car- N${Car} \n Pen- N${Pen}`,
// );

// switch (item1) {
//   case "Book":
//     item1=Book
//     break;

// case "Chair":
//   item1 = Chair;
//   break;
// case "Phone":
//   item1 = Phone;
//   break;
// case "Car":
//   item1 = Car;
//   break;
// case "Pen":
//   item1 = Pen;
//   break

// default:
//   console.log();

// }

// if (item2 == "Book") {
//   item2 = Book;
// } else if (item2 == "Chair") {
//   item2 = Chair;
// } else if (item2 == "Phone") {
//   item2 = Phone;
// } else if (item2 == "Car") {
//   item2 = Car;
// } else if ((item2 = "Pen")) {
//   item2 = Pen;
// } else {
//   console.log(`${item2} is not availiable`);
// }

// if (item3 == "Book") {
//   item3 = Book;
// } else if (item3 == "Chair") {
//   item3 = Chair;
// } else if (item3 == "Phone") {
//   item3 = Phone;
// } else if (item3 == "Car") {
//   item3 = Car;
// } else if ((item3 = "Pen")) {
//   item3 = Pen;
// } else {
//   console.log(`${item3} is not availiable`);
// }

// if (item4 == "Book") {
//   item4 = Book;
// } else if (item4 == "Chair") {
//   item4 = Chair;
// } else if (item4 == "Phone") {
//   item4 = Phone;
// } else if (item4 == "Car") {
//   item4 = Car;
// } else if ((item4 = "Pen")) {
//   item4 = Pen;
// } else {
//   console.log(`${item4} is not availiable`);
// }

// if( item5 == "Book" )
// {
//   item1 = Book;
// } else if( item5 == "Chair" )
// {
//   item1 = Chair;
// } else if( item5 == "Phone" )
// {
//   item1 = Phone;
// } else if( item5 == "Car" )
// {
//   item1 = Car;
// } else if( ( item5 = "Pen" ) )
// {
//   item5 = Pen;
// } else
// {
//   console.log( `${ item5 } is not availiable` );
// }

// function calculator(a, b) {
//   let answer;
//   let operation = prompt(
//     "Select operation \n 1.addition \n 2.Subtraction \n 3.multiplication \n4.division ",
//   );

//   switch (operation) {
//     case "addition":
//       answer = a + b;
//       return a + b;

//       break;

//     case "subtraction":
//       answer = a - b;
//       return(answer);

//       break;
//     case "multiplication":
//       answer = a * b;
//       return(answer);

//       break;
//     case "division":
//       answer = a / b;
//       return(answer);

//       break;
//     default:
//       console.log("Invalid");
//       ;
//       break;
//   }
// }

// operation(2, 3);

// const person={
//   firstName: "Ada",
//   lastName: "Okafor",
//   age: 34,
//   gender: "female",
//   fullname ()
//   {
//     return `${ this.firstName } ${ this.lastName }`
// }

// };

// console.log(person.fullname())

// function Student ( fullName,phoneNo,path )
// {
//   this.fullName = fullName;
//   this.phoneNo = phoneNo;
//   this.path = path;

// }

// const student1 = new Student( "Joshua","0908", "Web-dev" );

// console.log(student1.path);

// const d = new Date();
//  console.log(d);

// prompt("Welcome");
// const yourname = prompt("Enter your name");
// const age = Number(prompt("Enter your age"));
// const phonenumber = Number(prompt("Enter your phone number"));

// function data(yourname, age, phonenumber) {
//   this.yourname = yourname;
//   this.age = age;
//   this.phonenumber = phonenumber;
// }

// const data1 = data(yourname, age, phonenumber);
// console.log(yourname.age.phonenumber);

// let movies = prompt(
//   "List of Movies avaliable \n 1.Fallen(2016) Pg18 N2000 \n 2.Jumanji(2016) Pg16 N3000 \n 3.Lucifer(2010) Pg20 N4000",
// );

// const Fallen = Number(2000);
// const Jumanji = Number(3000);
// const Lucifer = Number(4000);

// const movie = prompt(
//   `Select a movie. \n Fallen ${Fallen} \n Jumanji ${Jumanji}  \n Lucifer ${Lucifer}`,
// );

// let ticket = prompt("How many ticket are you purchasing? ");
// if (ticket > 1) {
//   console.log("max ticket reached");
// } else if ((ticket = 1)) {
//   console.log("Proceed");
// }

// let package1 = "Regular";
// let package2 = "Premium";
// let package = prompt(
//   `Which package are you for? \n 1.${package1} \n 2.${package2} `,
// );

// const snack = prompt(`Do you want snacks?`);

// const balance = Number(prompt("Enter your balance"));

// if (balance < Fallen) {
//   console.log();
// } else if (balance > Fallen) {
//   console.log("Proceed");
// }

// if (balance < Jumanji) {
//   console.log("Insufficient");
// } else if (balance > Jumanji) {
//   console.log("Proceed");
// }

// if (balance < Lucifer) {
//   console.log("Insufficient");
// } else if (balance > Lucifer) {
//   console.log("Proceed");
// }

// const headingText = document.getElementById("welcome");

// const headingText2 = document.getElementByClassName("my-list");

// const welcome = document.querySelector("#welcome");

// console.log(headingText);
// console.log(welcome);

// const changeColor = () => {
//   const newHeadingText = Array.from(headingText);
//   newHeadingArray.forEach(function (heading, id, arr) {
//     heading.style.color = "red";
//   });

//   myListItems.forEach(function (item, id, arr) {
//     item.style.color = "blue";
//   });
// };

// const coursesCount = document.querySelector("#courses");
// const courseSum = document.querySelector("#course-sum");
// const courseBtn = document.querySelectorAll(".course-btn");
// const regForm = document.querySelector("#reg-form");
// const inputName = document.querySelector("#reg-form input[type='text']");
// const courses = [
//   {
//     name: "Frontend Dev",
//     price: 2000,
//     img: "./Avatar.png",
//   },

//   {
//     name: "Backend-Dev",
//     price: 2000,
//     img: "./Avatar.png",
//   },
// ];

// document.addEventListener("DOMContentLoaded", function () {
//   courses.forEach(function (course, id, arr) {
//     const courseDiv = document.createElement("div");
//     courseDiv.classList.add("course");

//     courseDiv.innerHTML = `
//         <p>${course.name}</p>
//         <img src="${course.img}">
//         <button class="courseBtn" onclick="totalPrice('${course.price}',this)">Select Courses</button>
//         `;

//     coursesCount.appendChild(courseDiv);
//   });

//   courseSum.innerText = 0;
// });

// console.log(courseBtn);

// const totalPrice = function( coursePaid,button )
// {
//     if( button.dataset.clicked === "true" )
//     {
//     return;
// }

// button.dataset.clicked = "true";

//   let priceTotal = Number(courseSum.innerText);
//   courseSum.innerText = priceTotal + Number(coursePaid);
// };

// regForm.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// inputName.addEventListener("input", function () {
//   console.log(inputName.value);
// } );

// registeredUsers.Unshift({
//   name: inputName.value,
//   email: inputName.value
// } );

const products = document.querySelector( "#to-do" );
const easyBtn = document.querySelector( "#easy" );
fetch("https://dummyjson.com/todos")
  .then(function (result) {
    return result.json();
  })

  .then(function (data) {
    console.log(data.todos);
    data.todos.forEach(function (todo, id) {
      const todoTodo = document.createElement("p");
      todoTodo.innerText = `${todo.todo}`;
      products.appendChild(todoTodo);
    });
  });


easyBtn.addEventListener( "click",function(){
    todos.innerHTML= ``
  fetch( "https://dummyjson.com/todos" )
    .then( function( result )
    {
      return result.json();
    } );
  
   .then( function( data ) {
    console.log( data )
    const easy = data.todos.filter( function( todo, id )
    {
      return todo.difficulty.to  === "easy";
    })
    
    
  } )

  function dailyPlan ()
  {
    
    
    
  }
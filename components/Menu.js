// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

//
//   [x]Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

//   <div class="menu">
//     <ul>
//       {each menu item as an <li>}
//     </ul>
//   </div>

// [x]Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>
//

// Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
//

// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
//

// Step 5: Don't forget to return your div.menu.
//

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
//
//new code attempt
//
//create the  'home'

const menuClick = document.querySelector(".header");
console.log(menuClick);
//function to add menuItems to the menu div.
const menuMaker = (arr) => {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
//

  const menuUl = document.createElement("ul");
  //itterate through array for menu items, appending 
  arr.forEach((ele)=>{
    const menuLi = document.createElement("li");
    menuLi.textContent = ele;
    menuUl.appendChild(menuLi);
  })
  //append initial UL
  menuDiv.appendChild(menuUl);
    //create event to open the menu
 
  menuClick.addEventListener("click", (event) => {
    // console.log("I clicked it!", event.target);
    menuDiv.classList.toggle("menu--open");
    // console.log("Hi");
  });
  //return
  
  return menuDiv;
};

//call the function
menuClick.appendChild(menuMaker(menuItems));

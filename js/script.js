/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.getElementsByTagName("li");
const numItems = 10;

// console.log(studentList);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(studentList, page) {
  let startIndex = page * numItems - numItems;
  let endIndex = page * numItems;

  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(studentList) {
  numPages = Math.ceil(studentList.length / numItems);
  let divTag = document.createElement("div");
  divTag.className = "pagination";

  let pageTag = document.querySelector(".page");

  //console.log(pageTag);
  pageTag.appendChild(divTag);

  let ulTag = document.createElement("ul");
  divTag.appendChild(ulTag);

  //create li elements
  //append li elements to ul
}

for (l  = 1; l <= numPages; l++) {

let li = document.createElement('li');
let a = doccument.createElement('a');
ul.appendChild(li);
li.appendChild(a);

a.setAttribute("href", "#");
a.textContent = l;
   if (l === 1){
      a.className = "active";
 }

 
}






showPage(studentList, 1);

appendPageLinks(studentList);
// Remember to delete the comments that came with this file, and replace them with your own code comments.

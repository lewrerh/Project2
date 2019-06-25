/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.getElementsByClassName('student-item');
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
  const startIndex = page * numItems - numItems;
  const endIndex = page * numItems;

  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
}

function appendPageLinks(studentList) {
  let numPages = Math.ceil(studentList.length / numItems);
  let divTag = document.createElement("div");
  divTag.className = "pagination";

  let pageTag = document.querySelector(".page");

  //console.log(pageTag);
  pageTag.appendChild(divTag);

  let ul = document.createElement("ul");
  divTag.appendChild(ul);

  for (let l = 1; l <= numPages; l++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(a);

    a.setAttribute("href", "#");
    a.textContent = l;
    if (l === 1) {
      a.className = "active";
    }

    a.addEventListener("click", (event) => {
      let active = event.target.textContent;
      let a = document.querySelectorAll("a");
      showPage(studentList, active);

      for (let k = 0; k < a.length; k++) {

        a[k].classList.remove("active");
      }

      event.target.className = "active";
    });
  }
}
showPage(studentList, 1);
appendPageLinks(studentList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

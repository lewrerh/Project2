/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//Global variables created
const studentList = document.getElementsByClassName('student-item');
const numItems = 10;

// console.log(studentList);

//Function created with two arguments & variable created for start & end Index
function showPage(studentList, page) {
  const startIndex = page * numItems - numItems;
  const endIndex = page * numItems;
//loop will run once to show and hide student list
  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
}
//this funtion does the math to create the pagination buttons to work properly
function appendPageLinks(studentList) {
  let numPages = Math.ceil(studentList.length / numItems);
  let divTag = document.createElement("div");
  divTag.className = "pagination";

  let pageTag = document.querySelector(".page");

  //console.log(pageTag);
  pageTag.appendChild(divTag);

  let ul = document.createElement("ul");
  divTag.appendChild(ul);
   //for loop will create and append my pagination links/elements created per decendents
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
    //event lister is set to each tag and when clicked to show page and removed by for loop
    a.addEventListener("click", (event) => {
      let nextPage = event.target.textContent;
      let a = document.querySelectorAll("a");
      showPage(studentList, nextPage);

      for (let k = 0; k < a.length; k++) {
        a[k].classList.remove("active");
      }
      //event target set to active status allowing the completion of the process
      event.target.className = "active";
    });
  }
}
showPage(studentList, 1);
appendPageLinks(studentList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

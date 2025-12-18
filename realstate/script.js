let valudispalys = document.querySelectorAll(".num");
// console.log(valudispalys);
let inteval = 2000;
valudispalys.forEach((result) => {
  let statvalue = 0;
  let endvl = (alue = parseInt(result.getAttribute("data-val")));
  // console.log(endvl);
  let duration = Math.floor(inteval / endvl);
  // console.log(duration);

  let counter = setInterval(function () {
    statvalue += 1;
    result.textContent = statvalue;
    if (statvalue == endvl) {
      clearInterval(counter);
    }
  }, duration);
});

// for responsive navigation
const nav = document.querySelector(".navitems");

const icon = document.getElementById("ham");

icon.addEventListener("click", () => {
    nav.classList.toggle('active');
  // toggle hamburger icon

  icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

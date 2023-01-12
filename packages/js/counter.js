const count = document.getElementById("count");

incrementVisitCount();

function incrementVisitCount() {
  let visits;

  if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
  else {
    visits = +localStorage.getItem("visits");
    const incrementedCount = visits + 1;

    localStorage.setItem("visits", incrementedCount);
  }

  count.innerText = localStorage.getItem("visits");
}

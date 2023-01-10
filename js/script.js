

document.getElementById("oblicz").addEventListener("click", paySalary);

  function paySalary() {

  let employees = document.querySelectorAll('[id^=pracownik]');
  let bestEmployees = [];
  
  for (let i = 0; i < employees.length; i++) {

    let rate = employees[i].querySelector(".stawka").value;
    let hours = employees[i].querySelector(".czas").value;

    let overtime = 0;
    let salary = 0;

      if (hours >= 160) {
      overtime = hours - 160;
      salary = 160 * rate + overtime * (rate*2);
      employees[i].querySelector(".wyplata").textContent = salary;
      } else {
        salary = rate * hours;
        employees[i].querySelector(".wyplata").textContent = salary;
      }
      

    if (hours <= 100) {
    employees[i].style.backgroundColor = 'red';
    }

  bestEmployees.push(employees[i].querySelector(".czas"));  
  }
  
   bestEmployees.sort((a, b) => b.value - a.value);

   let napis = '';
   napis += bestEmployees[0].parentElement.firstElementChild.textContent;
   napis += bestEmployees[1].parentElement.firstElementChild.textContent;
   napis += bestEmployees[2].parentElement.firstElementChild.textContent;
   document.getElementById('najlepsi-pracownicy').textContent = napis;

  //  document.getElementById('najlepsi-pracownicy').textContent = bestEmployees[0].parentElement.firstElementChild.textContent;
  //  document.getElementById('najlepsi-pracownicy').textContent = bestEmployees[1].parentElement.firstElementChild.textContent;
  //  document.getElementById('najlepsi-pracownicy').textContent = bestEmployees[2].parentElement.firstElementChild.textContent;
   
  //  console.log(bestEmployees[0].parentElement.firstElementChild.textContent);

 };




      







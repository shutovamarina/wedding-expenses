const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();

    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();

    const weddingDress = parseFloat(document.querySelector("#weddingDress").value) || 0;
    const rings = parseFloat(document.querySelector("#rings").value) || 0;
    const decor = parseFloat(document.querySelector("#decor").value) || 0;
    const foto = parseFloat(document.querySelector("#foto").value) || 0;
    const rent = parseFloat(document.querySelector("#rent").value) || 0;
    const menu = parseFloat(document.querySelector("#menu").value) || 0;
    const people = parseFloat(document.querySelector("#people").value) || 1;
    const tip = document.querySelector("#tip").value;

    // Рассчитываем стоимость нарядов и колец на человека
    let amountPerPerson = (weddingDress + rings);

    // Считаем организационные расходы
    let totalExpenses = (menu * people) + decor + foto + rent;

    // Вычисляем чаевые
    let tipAmount = totalExpenses * tip;

    // Общая сумма, включая чаевые
    let totalSum = amountPerPerson + totalExpenses + tipAmount;

    // Обновляем значения на странице
    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);
    document.querySelector("#dividedTip").textContent = (totalExpenses + tipAmount).toFixed(2);
    document.querySelector("#billAndTip").textContent = totalSum.toFixed(2);

    /*let amountPerPerson = (weddingDress + rings);
    let tipPerPerson = ((menu * people) + decor + foto + rent);
    let totalSum = amountPerPerson + tipPerPerson;


    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);
    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#billAndTip").textContent = totalSum.toFixed(2);*/
    console.log(totalExpenses)
}
var wallet = 0;
var incomes = 0;
var expenses = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    const incomesList = document.querySelector("#incomesList");
    const incomesSum = document.querySelector("#incomes")
    const expensesList = document.querySelector("#expensesList");
    const expensesSum = document.querySelector("#expenses")
    const btnRemove = document.querySelector("#btnRemove")
    const testFormIncomeMain = document.querySelector("#testFormIncomeMain");
    const testFormIncome = document.querySelector("#testFormIncome");
    const testFormValue = document.querySelector("#testFormValue");
    const howSpendMoney = document.querySelector("#howSpend")
    
    incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
    expensesSum.innerHTML = "Suma wydatków: " + expenses + " zł";
    howSpendMoney.innerHTML = "Można wydać: " +  wallet + " zł";


    // TODO  create function which upadte wallet incomes and expenses

    testFormIncomeMain.addEventListener("submit", (e) => {
        e.preventDefault();

        let income = {
            przychod: testFormIncome.value,
            kwotaIncome: testFormValue.value,
        };
        
        const li = document.createElement("li");
        li.innerText = `${income.przychod} - ${income.kwotaIncome} zł`;
        console.log(li);
        // li.dataset.wydatek = income.wydatek;
        // li.dataset.id = 1;
        incomesList.appendChild(li);

        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        li.appendChild(btnEdit);

        const btnRemove = document.createElement("button");
        btnRemove.innerText = "Usuń";
        btnRemove.dataset.id = Math.random() * 10000;
        li.appendChild(btnRemove);
        
        // const sum = document.createElement("h1")
        // sum1.appendChild(sum);

        incomes += parseFloat(income.kwotaIncome);
        incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
        wallet = incomes - expenses;
        howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
    })

    testFormExpenseMain.addEventListener("submit", (e) => {
        e.preventDefault();

        let expense = {
            wydatek: testFormExpenses.value,
            kwotaExpense: testFormValueExpense.value,
        };
        
        const li = document.createElement("li");
        li.innerText = `${expense.wydatek} - ${expense.kwotaExpense} zł`;
        console.log(li);
        // li.dataset.wydatek = income.wydatek;
        // li.dataset.id = 1;
        expensesList.appendChild(li);

        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        li.appendChild(btnEdit);

        const btnRemove = document.createElement("button");
        btnRemove.innerText = "Usuń";
        btnRemove.id = "btnRemove";
        li.appendChild(btnRemove);
        
        // const sum = document.createElement("h1")
        // sum1.appendChild(sum);

        expenses += parseFloat(expense.kwotaExpense);
        expensesSum.innerHTML = "Suma wydatków: " + expenses +" zł";

        wallet = incomes - expenses;
        howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
    })


    btnRemove.addEventListener("click", (e) => {
        console.log("usunieto");
        li.remove();
    });
});
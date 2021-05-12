var wallet = 0;
var incomes = 0;
var expenses = 0;
var uids = [];

document.addEventListener("DOMContentLoaded", (e) => {
    const incomesList = document.querySelector("#incomesList");
    const incomesSum = document.querySelector("#incomes")
    const expensesList = document.querySelector("#expensesList");
    const expensesSum = document.querySelector("#expenses")
    // const btnRemoveIncome = document.querySelector("#btnRemoveIncome")
    // const btnRemoveExpense = document.querySelector("#btnRemoveExpense")
    var testFormIncomeMain = document.querySelector("#testFormIncomeMain");
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
        
        let li = document.createElement("li");
        li.innerText = `${income.przychod} - ${income.kwotaIncome} zł`;
        console.log(li);
        li.dataset.name = income.przychod;
        li.dataset.amount = income.kwotaIncome;
        li.classList = "liListIncome";
        incomesList.appendChild(li);

        var btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        li.appendChild(btnEdit);
        
        var btnRemoveIncome = document.createElement("button");
        btnRemoveIncome.id = "btnRemoveIncome";
        btnRemoveIncome.innerText = "Usuń";
        li.appendChild(btnRemoveIncome);
        
        
        incomes += parseFloat(income.kwotaIncome);
        incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
        wallet = incomes - expenses;
        howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
        
        testFormIncome.value = "";
        testFormValue.value = "";
        
        function generateUid() {
            var uid = Math.floor(Math.random() * 100000000);
            btnRemoveIncome.setAttribute('id', uid);
            var elementToBeDeleted = document.getElementById(uid);
            elementToBeDeleted.remove();
            uids.push(uid);
        }


        btnEdit.addEventListener("click", (e) => {
            li.innerHTML = "";
            const inputName = document.createElement("input");
            inputName.className = "inputName";
            const inputValue = document.createElement("input");
            inputValue.className = "inputValue";
            const btnSave = document.createElement("button");
            btnSave.classList = "btnSave";
            btnSave.innerText = "V";
            const btnCancel = document.createElement("button");
            btnCancel.classList = "btnCancel";
            btnCancel.innerText = "X";
            inputName.value = li.dataset.name;
            inputValue.value = li.dataset.amount;
            li.appendChild(inputName);
            li.appendChild(inputValue);
            li.appendChild(btnSave);
            li.appendChild(btnCancel);

            btnSave.addEventListener("click", (e) =>{
                li.innerText = `${inputName.value} - ${inputValue.value} zł`;
                li.appendChild(btnEdit);
                li.appendChild(btnRemoveIncome);
                incomes -= li.dataset.amount - inputValue.value;
                incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
                wallet = incomes - expenses;
                howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
                li.dataset.name = inputName.value;
                li.dataset.amount = inputValue.value;
            });

            btnCancel.addEventListener("click", (e) =>{
                li.innerText = `${income.przychod} - ${income.kwotaIncome} zł`;
                li.appendChild(btnEdit);
                li.appendChild(btnRemoveIncome);
            });

        });

        btnRemoveIncome.addEventListener("click", (e) => {
            generateUid();
            incomes -= parseFloat(li.dataset.amount);
            incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
            wallet = incomes - expenses;
            howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
            console.log("usunieto");
            li.remove();
        });
    
    })

    testFormExpenseMain.addEventListener("submit", (e) => {
        e.preventDefault();

        let expense = {
            wydatek: testFormExpenses.value,
            kwotaExpense: testFormValueExpense.value,
        };
        
        let li = document.createElement("li");
        li.innerText = `${expense.wydatek} - ${expense.kwotaExpense} zł`;
        li.dataset.name = expense.wydatek;
        li.dataset.amount = expense.kwotaExpense;
        li.classList = "liListExpense";
        console.log(li);
        expensesList.appendChild(li);

        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        li.appendChild(btnEdit);

        const btnRemoveExpense = document.createElement("button");
        btnRemoveExpense.innerText = "Usuń";
        btnRemoveExpense.id = "btnRemoveExpense";
        li.appendChild(btnRemoveExpense);

        testFormExpenses.value = "";
        testFormValueExpense.value = "";
        
        function generateUid() {
            var uid = Math.floor(Math.random() * 100000000);
            btnRemoveExpense.setAttribute('id', uid);
            var elementToBeDeleted = document.getElementById(uid);
            elementToBeDeleted.remove();
            uids.push(uid);
        }

        btnEdit.addEventListener("click", (e) => {
            li.innerHTML = "";
            const inputNameExpense = document.createElement("input");
            inputNameExpense.className = "inputNameExpense";
            const inputValueExpense = document.createElement("input");
            inputValueExpense.className = "inputValueExpense";
            const btnSaveExpense = document.createElement("button");
            btnSaveExpense.innerText = "V";
            const btnCancelExpense = document.createElement("button");
            btnCancelExpense.innerText = "X";
            inputNameExpense.value = li.dataset.name;
            inputValueExpense.value = li.dataset.amount;
            li.appendChild(inputNameExpense);
            li.appendChild(inputValueExpense);
            li.appendChild(btnSaveExpense);
            li.appendChild(btnCancelExpense);

            btnSaveExpense.addEventListener("click", (e) =>{
                li.innerText = `${inputNameExpense.value} - ${inputValueExpense.value} zł`;
                li.appendChild(btnEdit);
                li.appendChild(btnRemoveExpense);
                expenses -= li.dataset.amount - inputValueExpense.value;
                expensesSum.innerHTML = "Suma przychodów: " + expenses + " zł";
                wallet = incomes - expenses;
                howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
                li.dataset.name = inputNameExpense.value;
                li.dataset.amount = inputValueExpense.value;
            });

            btnCancel.addEventListener("click", (e) =>{
                li.innerText = `${income.przychod} - ${income.kwotaIncome} zł`;
                li.appendChild(btnEdit);
                li.appendChild(btnRemoveIncome);
            });
        });

        btnRemoveExpense.addEventListener("click", (e) => {
            generateUid();
            expenses -= parseFloat(li.dataset.amount);
            expensesSum.innerHTML = "Suma wydatków: " + expenses + " zł";
            wallet = incomes - expenses;
            howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
            console.log("usunieto");
            li.remove();
        });

        expenses += parseFloat(expense.kwotaExpense);
        expensesSum.innerHTML = "Suma wydatków: " + expenses +" zł";

        wallet = incomes - expenses;
        howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
    })
});
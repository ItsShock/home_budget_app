var wallet = 0;
var incomes = 0;
var expenses = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    const incomesList = document.querySelector("#incomesList");
    const incomesSum = document.querySelector("#incomes")
    const expensesList = document.querySelector("#expensesList");
    const expensesSum = document.querySelector("#expenses")
    var testFormIncomeMain = document.querySelector("#testFormIncomeMain");
    const testFormIncome = document.querySelector("#testFormIncome");
    const testFormValue = document.querySelector("#testFormValue");
    const howSpendMoney = document.querySelector("#howSpend")
    
    incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
    expensesSum.innerHTML = "Suma wydatków: " + expenses + " zł";
    howSpendMoney.innerHTML = "Można wydać: " +  wallet + " zł";

    function updateWallet()
    {
        wallet = incomes - expenses;
        howSpendMoney.innerHTML = "Można wydać: " + wallet + " zł";
    }

    testFormIncomeMain.addEventListener("submit", (e) => {
        e.preventDefault();

        let income = {
            title: testFormIncome.value,
            incomeValue: testFormValue.value,
        };
        
        let incomesListPoint = document.createElement("li");
        incomesListPoint.innerText = `${income.title}: ${income.incomeValue} zł`;
        incomesListPoint.dataset.name = income.title;
        incomesListPoint.dataset.amount = income.incomeValue;
        incomesListPoint.classList = "liListIncome";
        incomesList.appendChild(incomesListPoint);

        var btnEditIncome = document.createElement("button");
        btnEditIncome.innerText = "Edytuj";
        btnEditIncome.id = "btnEdit";
        incomesListPoint.appendChild(btnEditIncome);
        
        var btnRemoveIncome = document.createElement("button");
        btnRemoveIncome.id = "btnRemoveIncome";
        btnRemoveIncome.innerText = "Usuń";
        incomesListPoint.appendChild(btnRemoveIncome);
        
        
        testFormIncome.value = "";
        testFormValue.value = "";
        
        function generateUid() {
            var uid = Math.floor(Math.random() * 100000000);
            btnRemoveIncome.setAttribute('id', uid);
            var elementToBeDeleted = document.getElementById(uid);
            elementToBeDeleted.remove();
        }
        
        btnEditIncome.addEventListener("click", (e) => {
            incomesListPoint.innerHTML = "";
            const inputName = document.createElement("input");
            inputName.className = "inputName";
            const inputValue = document.createElement("input");
            inputValue.className = "inputValue";
            const btnSaveIncome = document.createElement("button");
            btnSaveIncome.classList = "btnSave";
            btnSaveIncome.innerText = "V";
            const btnCancelIncome = document.createElement("button");
            btnCancelIncome.classList = "btnCancel";
            btnCancelIncome.innerText = "X";
            inputName.value = incomesListPoint.dataset.name;
            inputValue.value = incomesListPoint.dataset.amount;
            incomesListPoint.appendChild(inputName);
            incomesListPoint.appendChild(inputValue);
            incomesListPoint.appendChild(btnSaveIncome);
            incomesListPoint.appendChild(btnCancelIncome);
            
            btnSaveIncome.addEventListener("click", (e) =>{
                incomesListPoint.innerText = `${inputName.value}: ${inputValue.value} zł`;
                incomesListPoint.appendChild(btnEditIncome);
                incomesListPoint.appendChild(btnRemoveIncome);
                incomes -= incomesListPoint.dataset.amount - inputValue.value;
                incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
                updateWallet();
                incomesListPoint.dataset.name = inputName.value;
                incomesListPoint.dataset.amount = inputValue.value;
            });
            
            btnCancelIncome.addEventListener("click", (e) =>{
                incomesListPoint.innerText = `${income.title} - ${income.incomeValue} zł`;
                incomesListPoint.appendChild(btnEditIncome);
                incomesListPoint.appendChild(btnRemoveIncome);
            });
            
        });
        
        btnRemoveIncome.addEventListener("click", (e) => {
            generateUid();
            incomes -= parseFloat(incomesListPoint.dataset.amount);
            incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
            updateWallet();
            incomesListPoint.remove();
        });
        
        incomes += parseFloat(income.incomeValue);
        incomesSum.innerHTML = "Suma przychodów: " + incomes + " zł";
        updateWallet();
    })
    
    testFormExpenseMain.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let expense = {
            title: testFormExpenses.value,
            expenseValue: testFormValueExpense.value,
        };
        
        let expensesListPoint = document.createElement("li");
        expensesListPoint.innerText = `${expense.title}: ${expense.expenseValue} zł`;
        expensesListPoint.dataset.name = expense.title;
        expensesListPoint.dataset.amount = expense.expenseValue;
        expensesListPoint.classList = "liListExpense";
        expensesList.appendChild(expensesListPoint);

        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        expensesListPoint.appendChild(btnEdit);

        const btnRemoveExpense = document.createElement("button");
        btnRemoveExpense.innerText = "Usuń";
        btnRemoveExpense.id = "btnRemoveExpense";
        expensesListPoint.appendChild(btnRemoveExpense);

        testFormExpenses.value = "";
        testFormValueExpense.value = "";
        
        function generateUid() {
            var uid = Math.floor(Math.random() * 100000000);
            btnRemoveExpense.setAttribute('id', uid);
            var elementToBeDeleted = document.getElementById(uid);
            elementToBeDeleted.remove();
        }

        btnEdit.addEventListener("click", (e) => {
            expensesListPoint.innerHTML = "";
            const inputNameExpense = document.createElement("input");
            inputNameExpense.className = "inputNameExpense";
            const inputValueExpense = document.createElement("input");
            inputValueExpense.className = "inputValueExpense";
            const btnSaveExpense = document.createElement("button");
            btnSaveExpense.innerText = "V";
            btnSaveExpense.classList = "btnSaveExpense";
            const btnCancelExpense = document.createElement("button");
            btnCancelExpense.innerText = "X";
            btnCancelExpense.classList = "btnCancelExpense"
            inputNameExpense.value = expensesListPoint.dataset.name;
            inputValueExpense.value = expensesListPoint.dataset.amount;
            expensesListPoint.appendChild(inputNameExpense);
            expensesListPoint.appendChild(inputValueExpense);
            expensesListPoint.appendChild(btnSaveExpense);
            expensesListPoint.appendChild(btnCancelExpense);

            btnSaveExpense.addEventListener("click", (e) =>{
                expensesListPoint.innerText = `${inputNameExpense.value}: ${inputValueExpense.value} zł`;
                expensesListPoint.appendChild(btnEdit);
                expensesListPoint.appendChild(btnRemoveExpense);
                expenses -= expensesListPoint.dataset.amount - inputValueExpense.value;
                expensesSum.innerHTML = "Suma przychodów: " + expenses + " zł";
                updateWallet();
                expensesListPoint.dataset.name = inputNameExpense.value;
                expensesListPoint.dataset.amount = inputValueExpense.value;
            });

            btnCancelExpense.addEventListener("click", (e) =>{
                expensesListPoint.innerText = `${expense.title}: ${expense.expenseValue} zł`;
                expensesListPoint.appendChild(btnEdit);
                expensesListPoint.appendChild(btnRemoveExpense);
            });
        });

        btnRemoveExpense.addEventListener("click", (e) => {
            generateUid();
            expenses -= parseFloat(expensesListPoint.dataset.amount);
            expensesSum.innerHTML = "Suma wydatków: " + expenses + " zł";
            updateWallet();
            expensesListPoint.remove();
        });

        expenses += parseFloat(expense.expenseValue);
        expensesSum.innerHTML = "Suma wydatków: " + expenses +" zł";
        updateWallet();
    })
});
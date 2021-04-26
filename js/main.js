document.addEventListener("DOMContentLoaded", (e) => {
    const incomes = document.querySelector("#incomes");
    const buttons = document.querySelector("#buttons")
    const testForm1 = document.querySelector("#testForm1");
    const testFormIncome = document.querySelector("#testFormIncome");
    const testFormValue = document.querySelector("#testFormValue");

    testForm1.addEventListener("submit", (e) => {
        e.preventDefault();

        let income = {
            wydatek: testFormIncome.value,
            kwota: testFormValue.value,
        };
        
        const li = document.createElement("li");
        li.innerText = `${income.wydatek} - ${income.kwota} zł`;
        console.log(li);
        li.dataset.wydatek = income.wydatek;
        li.dataset.id = 1;
        incomes.appendChild(li);

        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edytuj";
        btnEdit.id = "btnEdit";
        incomes.appendChild(btnEdit);

        const btnRemove = document.createElement("button");
        btnRemove.innerText = "Usuń";
        btnRemove.id = "btnRemove";
        incomes.appendChild(btnRemove);
        
        const sum = document.createElement("h1")
        sum1.appendChild(sum);
    })
});
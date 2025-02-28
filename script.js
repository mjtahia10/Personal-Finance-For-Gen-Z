document.getElementById('budgetForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = income - expenses;
    const result = savings >= 0 ? `You can save $${savings} this month!` : `You are overspending by $${Math.abs(savings)}.`;
    document.getElementById('budgetResult').innerText = result;
});
document.getElementById('startSimulator').addEventListener('click' , function () {
 const virtualPortfolio = `
     h3 class="text-xl font-semibold">Your Virtual Portfolio</h3>
        <ul>
            <li>Stocks: $500</li>
            <li>Bonds: $300</li>
            <li>Cryptocurrency: $200</li>
        </ul>
        <p class="mt-4">Total Investment: $1000</p>
       `
       document.getElementById('portfolio').innerHTML = virtualPortfolio;
    });
document.getElementById('debtForm').addEventListener('submit' , function (e) {
    e.preventDefault();
    const debt = parseFloat(document.getElementById('debtAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);

    const interestPerMonth = interestRate/ 12;
    let months = 0;
    let balance = debt;
    while( balance > 0) {
        balance = balance * (1 + interestPerMonth) - monthlyPayment;
        months++;
        if(balance <= 0) break;
        const years = Math.floor(month/12);
        const remainingMonths = months % 12;
        const result = `It will take you ${years} years and ${remainingMonths} months to pay off your debt.`;
    document.getElementById('debtResult').innerText = result;
    }
})
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert( ` Thank You For Subscribing With ${email}!`)
})
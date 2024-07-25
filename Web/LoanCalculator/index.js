function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value;
    interestRate = document.getElementById("loan-interest").value;
    monthToPay = document.getElementById("month-to-pay").value;

    interest = loanAmount * (interestRate * 0.01) / monthToPay;
    payment = (loanAmount / monthToPay + interest).toFixed(2);
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${payment}`;
    
}
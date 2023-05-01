
document.getElementById('deposit-button').addEventListener('click', function () {

     const depositField = document.getElementById('deposit-field');
     const depositAmountString = depositField.value;


     const newDepositAmount = parseFloat(depositAmountString);



     depositField.value = "";



     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

     const newDepositTotal = previousDepositTotal + newDepositAmount;

     depositTotalElement.innerText = newDepositTotal;




     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousTotalAmount = parseFloat(previousBalanceTotalString);

     const newBalanceTotal = previousTotalAmount + newDepositTotal;
     balanceTotalElement.innerText = newBalanceTotal;



})


document.getElementById('withdraw-button').addEventListener('click', function () {


     const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(withdrawAmountText);

     const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawText);

     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal;



     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceText);
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

     balanceTotal.innerText = newBalanceTotal;

     withdrawInput.value = '';


})
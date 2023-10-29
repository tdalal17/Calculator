const billTotalInput = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillInput = document.getElementById('totalBill');
const errorMsg = document.getElementById('error');

document.getElementById('tipForm').addEventListener('input', function() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseFloat(tipSlider.value);

    if (isNaN(billTotal)) {
        errorMsg.style.display = 'block';
        return;
    } else {
        errorMsg.style.display = 'none';
    }

    const tipAmount = (billTotal * tipPercentage / 100).toFixed(2);
    const totalBill = (billTotal + parseFloat(tipAmount)).toFixed(2);

    tipPercentageInput.value = tipPercentage + '%';
    tipAmountInput.value = tipAmount;
    totalBillInput.value = totalBill;
});

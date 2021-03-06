function calculate() {
    
    let firstNumber = document.getElementById("first_number").value;
    let secondNumber = document.getElementById("second_number").value;
    let operator = document.getElementById("operator").value;

    result = firstNumber + secondNumber;

    document.getElementById('result_paragraph').innerHTML = "Result: " + result;
}
window.onload=function() {
    document.getElementById("calculator").addEventListener('click', function() { 
        document.location.href = "../html/calculator.html";
    }, true);
    document.getElementById("contacts").addEventListener('click', function() { 
        document.location.href = "../html/contacts.html";
    }, true);
    document.getElementById("login").addEventListener('click', function() { 
        document.location.href = "../html/login.html";
    }, true);
    document.getElementById("stocks").addEventListener('click', function() { 
        document.location.href = "../html/stocks.html";
    }, true);

    document.getElementById("calc").addEventListener('click', function() { 
        let sum = Number(document.getElementById("summa").value)
        let period = Number(document.getElementById("period").value)
        let percent = Number(document.getElementById("percent").value)
        let result = (sum+sum*(percent/100))/(period)
        document.getElementById("result").innerHTML = Number(result)
    }, true);

    document.getElementById("rst").addEventListener('click', function() {
        document.getElementById("calc_form").reset();
        document.getElementById("result").innerHTML = "0";
    }, true);
}

function calculate () {
    
}
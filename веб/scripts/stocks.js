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
}
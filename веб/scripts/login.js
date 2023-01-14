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

    document.getElementById("voyti").addEventListener('click', sign_in)

    function sign_in () { 
        let sotrEmail = "Astakhova_sotrudnik@tpu.ru"
        let sotrPassword = "1234567890"
        let clientEmail = "Astakhova_client@tpu.ru"
        let clientPassword = "0987654321"
        
        let email = String(document.getElementById("email").value)
        let password = String(document.getElementById("password").value)
        let out 
        

        if ((email === sotrEmail) && (password === sotrPassword)) {
            document.location.href = "../html/account_sotr.html"
        }
        if ((email != clientEmail) || (password != clientPassword)) {
            out = "Email или пароль введены неверно!"
        }
        if ((email != sotrEmail) && (password != sotrPassword)) {
            out = "Такой пользователь не зарегистрирован"
        }

        if ((email === clientEmail) && (password === clientPassword)) {
            document.location.href = "../html/account_client.html"
        }
        if ((email != clientEmail) || (password != clientPassword)) {
            out = "Email или пароль введены неверно!"
        }
        if ((email != clientEmail) && (password != clientPassword)) {
            out = "Такой пользователь не зарегистрирован"
        }
        document.getElementById("out").innerHTML = out
    }
}

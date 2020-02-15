function zmenitFormular (){
    let typFormulare = document.getElementById("typFormulare").innerText;
    if(typFormulare == "Nemáš účet ?"){
        //předělání formuláře na registraci
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><input type='Password' placeholder='Heslo znovu...'><br><input id='email' type='text' placeholder='Email...'><br><button onclick='registrace()' id='tlacitko'>Registrovat se</button><br><br><span onclick='zmenitFormular()' id='typFormulare'>Již mám účet</span></form>";
        document.getElementById("nadpisFormulare").innerHTML = "Registrace";
    }
    else{
        //předělání formuláře na přihlášení
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><button onclick='prihlaseni()' id='tlacitko'>Přihlásit se</button><br><br><span onclick='zmenitFormular()' id='typFormulare'>Nemáš účet ?</span></form>";
        document.getElementById("nadpisFormulare").innerHTML = "Přihlášení";
    }
}

function registrace (jmeno, heslo, email, kod){
    alert("Registrace, nediv se že se to vrátí na přihlášení => refreshne se stránka");
}

function prihlaseni (jmeno, heslo, povoleno){
    alert("Přihlášení");
}

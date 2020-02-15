function zmenitFormular (){
    let typFormulare = document.getElementById("typFormulare").innerText;
    if(typFormulare == "Nemáš účet ?"){
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><input type='newPassword' placeholder='Nové heslo...'><br><input id='tlacitko' type='submit' value='Registrovat se'><br><span onclick='zmenitFormular()' id='typFormulare'>Již mám účet</span></form>";
        document.getElementById("nadpisFormulare").innerHTML = "Registrace";
    }
    else{
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><input id='tlacitko' type='submit' value='Přihlásit se'><br><span onclick='zmenitFormular()' id='typFormulare'>Nemáš účet ?</span></form>";
        document.getElementById("nadpisFormulare").innerHTML = "Přihlášení";
    }
}


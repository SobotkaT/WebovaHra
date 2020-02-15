function zmenitFormular (){
    let typFormulare = document.getElementById("typFormulare").innerText;
    if(typFormulare == "Zaregistrovat se"){
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><input type='newPassword' placeholder='Nové heslo...'><br><input id='tlacitko' type='submit' value='Přihlásit se'></form><span onclick='zmenitFormular()' id='typFormulare'>Přihlásit se</span>";

    }
    else{
        document.getElementById("prihlasovaciOblast").innerHTML = "<form method='POST' action=''><input id='jmeno' type='text' placeholder='Jméno...'><br><input type='password' placeholder='Heslo...'><br><input id='tlacitko' type='submit' value='Přihlásit se'></form><span onclick='zmenitFormular()' id='typFormulare'>Zaregistrovat se</span>";
    }
}


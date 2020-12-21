"use strict"
let donner = [];
let donnee = {pseudo : 'xavier', age : '18', sex : 'M'};
let age;
let prix = 10;
function montrerPass() {
    let pass = document.getElementById("mdp");
    if(document.getElementById("check").checked) {
        pass.setAttribute("type","text");
    }
    else {
        pass.setAttribute("type","password");
    }
}

document.getElementById("mdp").addEventListener("input", function (e) {
    let mdp = e.target.value;
    let longueurMdp = "faible";
    let couleurMsg = "red";
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green";
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange";
    }
    let aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp;
    aideMdpElt.style.color = couleurMsg;
});
function main() {
    pseudo();
    motDePass();
    nati();
    setElem();
    getEmail();
    donne();
    tri();
    calc();
}
function pseudo() {
    let pseudo = document.getElementById("pseudo").value;
    console.log("Votre pseudo est: " + pseudo);
    donner.push(pseudo);
}
function motDePass() {
    let mdp = document.getElementById("mdp").value;
    console.log("Le mot de passe est: " + mdp);
    donner.push(mdp);
}
function getEmail() {
    let getmail = document.getElementById("mail").value;
    console.log("Votre mail est: " + getmail);
    donner.push(getmail);
}
function nati() {
    let natio = document.getElementById("nationalite").value;
    switch(natio) {
        case "FR" :
            console.log("fr");
            donner.push(natio);
            break;
        case "BE" :
            console.log("be");
            donner.push(natio);
            break;
        case "SUI" :
            console.log("sui");
            donner.push(natio);
            break;
        default :
            console.log("autre");
            donner.push(natio);
            break;
    }
}
function donne() {
    age = document.getElementById("age").value;
    console.log("Votre age est " + age);
    let pseudo = document.getElementById("pseudo").value;
    let sex = document.getElementById('sexe').value;
    console.log("Votre sexe est " + sex);
    donnee.sex = sex;
    donnee.pseudo = pseudo;
    donnee.age = age;
}

function setElem() {
    let pseudo = document.getElementById("pseudo").value;
    document.getElementById("ecri").innerText = "Bonjour " + pseudo + " votre formulaire a bien été pris en compte";
}
function choixLan () {
    document.getElementById("nationalite").innerHTML =
        "<option value='FR' selected>Français</option>"+
        "<option value='BE'>Belge</option>"+
        "<option value='SUI'>Suisse</option>"+
        "<option value='XX'>Autre</option>";
}
function refresh() {
    let r = confirm("Voulez vous vraiment refresh ?");
    if (r === true) {
        alert("refresh");
        window.location.reload();
    }
    else {
        alert("pas de refresh");
    }
}
function tri() {
    donner.sort()
}
function calc() {
    if (age >=18 && age <=25) {
        let promo = prix*age/10;
        document.getElementById("ecri1").innerText = "vous avez droit a notre offre spéciale étudiant. L'offre est de " + promo.toFixed(2) + "€.";
    }
    else if (age > 25 && age <=60) {
        document.getElementById("ecri1").innerText = "vous n'avez pas d'offre.";
    }
    else if (age > 60 && age <=130) {
        let promo = prix*age/33;
        document.getElementById("ecri1").innerText = "vous avez une offre senior. L'offre est de " + promo.toFixed(2) + "€.";
    }
    else if (age > 130) {
        document.getElementById("ecri1").innerText = "à notre connaissance personne n'est aussi vieux que sa.";
    }
    else if (age >= 0 &&  age < 18) {
        document.getElementById("ecri1").innerText = "mais nous vous prévenons que votre demande peut être annulé car vous n'avez pas le droit de vous inscrire.";
    }
    else {
        document.getElementById("ecri1").innerText = "Erreur lors de l'encodage de votre age.";
    }

}

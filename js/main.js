
"use strict"
let donner = [];
function montrerPass() {
    let pass = document.getElementById("mdp");
    if(document.getElementById("check").checked) {
        pass.setAttribute("type","text");
    }
    else {
        pass.setAttribute("type","password");
    }
}
//
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
function nati() {
    let natio = document.getElementById("nationalite").value;
    if (natio == "FR") {
        console.log("Vous êtes français")
        let fr = "français";
        donner.push(fr);
    }
    else if (natio == "BE") {
        console.log("Vous êtes Belge")
        let be = "belge";
        donner.push(be);
    }
    else if (natio == "SUI") {
        console.log("Vous êtes Suisse")
        let sui = "suisse";
        donner.push(sui);
    }
    else {
        console.log("vous avez une autre nationalité")
        let autre = "autre"
        donner.push(autre);
    }
}
function setElem() {
    document.getElementById("ecri").innerText = "Bonjour " + donner[0] + " votre formulaire a bien été pris en compte";
}

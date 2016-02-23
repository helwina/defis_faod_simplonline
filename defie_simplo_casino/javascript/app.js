var select, choix, valeur, nselect, nchoix, bouton, nvaleur, roulette, somme,argent, total, argentBank, totalbank;

//notre somme d argent de depart
total = 100;

//argent de depart de la bank
totalbank = 100000;

argent = document.getElementById("argent");
argentBank = document.getElementById("argentBank");
bouton = document.getElementById("bouton");

//retien notre selection paire ou impaire
function selitem(){
    select = document.getElementById("PairImpair");
    choix = select.selectedIndex;
    valeur = select.options[choix].value;
}

//retiens notre selection du chiffre sur lequel miser
function selnumber(){
    nselect = document.getElementById("SelctedNumber");
    nchoix = nselect.selectedIndex;
    nvaleur = nselect.options[nchoix].value;
}

//selection aleatoire d un nombre entre 0 et 36
function nombreroulette(){
    roulette = Math.floor(Math.random() * (36 - 0 +1)) + 0;
    alert(roulette);
}

//recupere la somme a miser dans le input
function amiser(){
    somme = document.getElementById("somme").value;
}

//actualisation de l argent en cas de perte
function loose(){
    total = total - somme;
    totalbank = totalbank + (somme *1);
    enbank();
    danslabank();
}

//actualisation de l argent quand la roulette tombe susr le nombre qu on a choisis
function win(){
    total = total + (somme * 36);
    totalbank = totalbank - (somme * 36);
    enbank();
    danslabank();
}

//actualisation de l argent quand on a bien choisis paire ou impaire
function littlewin(){
    total = total + (somme * 2);
    totalbank = totalbank - (somme * 2 );
    enbank();
    danslabank();
}

//message gagner perdu en cas de bankroute
function gameover(){
    enbank();
    danslabank();
    if(total <= 0){
        alert("vous avez perdu f5 pour rejouer");
    }else if (totalbank <= 0){
        alert("vous avez gagner bravo f5 pour rejouer ");
    }
}

//affiche notre total d argent sur la page html
function enbank(){
    argent.innerHTML = "vous avez " + total + " beta brouzouf";
}

//affiche l argent de la bank sur la page html
function danslabank(){
    argentBank.innerHTML = "la bank a " + totalbank + " beta brouzouf";
}

//pour savoir si on gagne ou on pert
function resultat(){
    nombreroulette();
    amiser();
    if((((roulette != nvaleur)) && ((roulette % 2) != valeur)) || (roulette === 0)){
        alert("Vous avez perdu");
        return loose(), gameover();
    }else if(((roulette == nvaleur))){
        alert("Vous avez gagner");
        return win(),gameover();
    }else{
        alert("Vous avez gagner");
        return littlewin(),gameover();
    }
}

bouton.onclick = resultat;//lance la function resultat au clic sur le bouton
enbank();
amiser();
danslabank();
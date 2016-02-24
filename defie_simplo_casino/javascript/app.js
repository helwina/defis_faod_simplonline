/*-------------------------------------------------------*\
                    variables
\*-------------------------------------------------------*/
$argent = document.getElementById("argent");
$argentBank = document.getElementById("argentBank");
$bouton = document.getElementById("bouton");
$displayresult = document.getElementById("displayresult");
$displayroulette = document.getElementById("displayroulette");
$nselect = document.getElementById("SelctedNumber");
$select = document.getElementById("PairImpair");

total = 100;
totalbank = 100000;

//selection paire impaire
function selitem(){
    $choix = $select.selectedIndex;
    $valeur = $select.options[$choix].value;
}

//selection du chiffre sur lequel miser
function selnumber(){
    $nchoix = $nselect.selectedIndex;
    $nvaleur = $nselect.options[$nchoix].value;
}

//selection d un nombre entre 0 et 36
function nombreroulette(){
    roulette = Math.floor(Math.random() * 37);
    $displayroulette.innerHTML = roulette
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
    gameover();
}

//actualisation de l argent quand la roulette tombe susr le nombre qu on a choisis
function win(){
    total = total + (somme * 36);
    totalbank = totalbank - (somme * 36);
    enbank();
    gameover();
}

//actualisation de l argent quand on a bien choisis paire ou impaire
function littlewin(){
    total = total + (somme * 2);
    totalbank = totalbank - (somme * 2 );
    enbank();
    gameover();
}

//message gagner perdu en cas de bankroute
function gameover(){
    enbank();
    if(total <= 0){
        $displayresult.innerHTML = "vous avez perdu f5 pour rejouer"
    }else if (totalbank <= 0){
        $displayresult.innerHTML = "bravo vous avez gagner f5 pour rejouer"
    }
}

//affiche notre total d argent sur la page html
function enbank(){
    $argent.innerHTML = "vous avez " + total + " beta brouzouf";
    $argentBank.innerHTML = "la bank a " + totalbank + " beta brouzouf";
}

//pour savoir si on gagne ou on pert
function resultat(){
    nombreroulette();
    amiser();
    if((roulette != $nvaleur) && ((roulette % 2) != $valeur) || (roulette === 0)){
        $displayresult.innerHTML = "vous avez perdu";
        loose();
    }else if(roulette == $nvaleur){
        $displayresult.innerHTML = "vous avez gagner 36 fois votre mise";
        win();
    }else{
        $displayresult.innerHTML = "vous avez gagner 2 fois votre mise";
        littlewin();
    }
}

$bouton.onclick = resultat;
amiser();
enbank();
let list =Array.from(document.getElementsByClassName('list'));
let mylist=Array.from(document.getElementsByClassName('lists'));
let mylist2= Array.from(document.getElementsByClassName('mylist'));
var prix =Array.from(document.getElementsByClassName('prix'));
let counter=Array.from(document.getElementsByClassName('counter'));
let prixTotal=document.getElementById('prixTotal');

//** LES FONCTIONS **
//calcule de la somme
let total=Array.from(document.getElementsByClassName('total'));
function calculeSom(){
    let som=0;
    for(let i=0 ; i<mylist.length ; i++){
        total[i].value = Number(prix[i].innerText)* Number(counter[i].innerText)
        som += Number(prix[i].innerText)* Number(counter[i].innerText);
        prixTotal.value = som ;
    }
}
//Changer Couleur
function changerCouleur(clr){
    if( clr.target.style.color !=='red')
        {clr.target.style.color = 'red'
        }
    else{
        clr.target.style.color ='black'
    }
}

//coloration favoris
let heart = Array.from(document.getElementsByClassName('heart'));
heart[i].addEventListener('click', changerCouleur)

//fonction addition
let plus = Array.from(document.getElementsByClassName('plus'));
for(let i=0; i<mylist.length; i++) {
    plus[i].addEventListener('click', function(){
        counter[i].innerText++
        calculeSom()
    })
}

//fonctions moins
let moins= Array.from(document.getElementsByClassName('moins'));
moins[1].addEventListener('click', function(){
    if(counter[i].innerHTML>0) {
        counter[i].innerText--
        calculeSom()
    }
})

//fonction suppression
let btnremove = remove[i]
btnremove.addEventListener('click', function(remove){
    let buttonclick= event.target 
    buttonclick.parentElement.remove()
    prix[i].innerHTML=0;
    calculeSom()
})







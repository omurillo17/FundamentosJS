let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count === 10){
        alert("¡Tu publicacion de Instagram gano 10 seguidores!¡Felicidades!");
    }else if(count === 20){
        alert("¡Tu publicacion de Instagram gano 20 seguidores!Sigue asi!");
    }
}
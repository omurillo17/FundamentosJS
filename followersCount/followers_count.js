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

function restartCount(){
    count = 0;
    if(count === 0){
        alert("El contador de followers ahora es 0");
    }else{
        restartCount();
    }
}
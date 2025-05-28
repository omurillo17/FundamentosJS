let length;
let width;
let monto1, monto2, monto3;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

function groceryTracker(){
    monto1 = parseFloat(document.getElementById('grocery1').value);
    monto2 = parseFloat(document.getElementById('grocery2').value);
    monto3 = parseFloat(document.getElementById('grocery3').value);

    let totalMount = monto1 + monto2 + monto3;
    document.getElementById('result').innerText = `El monto total es: ${totalMount}`;
}
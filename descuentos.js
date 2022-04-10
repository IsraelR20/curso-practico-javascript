
function calcularPrecioConDescuento(precio,descuento){
    return precio-descuento;
}

function precioConDescuento(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;

    const inputDiscount=document.getElementById("inputDiscount");
    const priceDiscount=inputDiscount.value;
    
    const preciofinal=calcularPrecioConDescuento(priceValue,priceDiscount);

    const resultadoEnPantalla=document.getElementById("resultFinal");
    resultadoEnPantalla.innerText="El precio final con el desuento es:$"+preciofinal;
}

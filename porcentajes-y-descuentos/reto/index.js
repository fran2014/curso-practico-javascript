function calcularPrecioConDescuentoYCupones (precio, descuento, cupones) {
    const porcentajePrecioConDescuento = 100 - descuento - cupones;
    const precioFinal = (precio * porcentajePrecioConDescuento) / 100;

    return precioFinal;
}


const cuponesList = [
    "Ninguno",
    "Bronce",
    "Plata",
    "Oro",
];


function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupons = document.getElementById("inputCoupons");
    const couponsValue = inputCoupons.value;


    let descuentoC;


    switch (couponsValue) {
        case cuponesList[0]:
            descuentoC = 0;
        break;

        case cuponesList[1]:
            descuentoC = 10;
        break;

        case cuponesList[2]:
            descuentoC= 25;
        break;

        case cuponesList[3]:
            descuentoC= 50;
        break;

    }

    const precioFinal = calcularPrecioConDescuentoYCupones(priceValue, discountValue, descuentoC);

    const total = document.getElementById("ResultP");
    total.innerText = "La cantidad a cancelar es de $ " + precioFinal;
}


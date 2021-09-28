
function CalcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  console.log({
    precio,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
  });
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;


  const inputDiscount = document.getElementById("InputDiscount")
  const discountValue = inputDiscount.value;

  const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

}
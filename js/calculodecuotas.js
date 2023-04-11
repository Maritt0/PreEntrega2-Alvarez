const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  calcularPrecio();
});
function calcularPrecio() {
    const precioObjeto = parseInt(document.getElementById('precio').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const tasaInteres = 0.1; // 10% de interés anual
  
    // Calcula el precio total del objeto
    const precioTotal = precioObjeto * (1 + tasaInteres) ** cuotas;
  
    // Muestra el precio total en la página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <h2>Simulación de precio</h2>
      <p>Precio: $${precioObjeto}</p>
      <p>Cuotas: ${cuotas} de $${(precioTotal / cuotas).toFixed(2)} cada una</p>
      <p>Total a pagar: $${precioTotal.toFixed(2)}</p>
    `;
  }

  const logoutbttn = document.querySelector("#logoutbttn");
logoutbttn.addEventListener("click", () => {localStorage.removeItem("logged"); window.location.href = "/index.html";});
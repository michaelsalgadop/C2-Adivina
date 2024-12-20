const botonAdivinar = document.querySelector(".adivinar");
const numero = document.querySelector(".grupo-controles .numero");
const mensaje = document.querySelector(".mensaje");
/**
 * Máximo es 10, mínimo es 1, entonces se pilla el Math.random() * (máximo - mínimo + 1) + mínimo.
 * Sirve para cualquier rango(5 - 10, 20 - 30,...)
 */
const numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
botonAdivinar.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    resetearValores();
    if (numero.value.length === 0 || numero.value === "") return;
    const numeroIntroducido = +numero.value;
    let mensajeAMostrar = "";
    if (numeroIntroducido !== numeroAleatorio) {
      mensajeAMostrar = `El número es ${
        numeroIntroducido > numeroAleatorio ? "mayor" : "menor"
      } que el que hay que acertar.`;
      mensaje.classList.add("error");
    } else {
      mensajeAMostrar = "¡¡HAS ACERTADO!!";
      mensaje.classList.add("acierto");
      numero.setAttribute("disabled", "true");
      botonAdivinar.setAttribute("disabled", "true");
    }
    mensaje.textContent = mensajeAMostrar;
  } catch (error) {
    console.log(error.message);
  }
});
const resetearValores = () => {
  mensaje.textContent = "";
  if (mensaje.classList.contains("error")) mensaje.classList.remove("error");
  if (mensaje.classList.contains("acierto"))
    mensaje.classList.remove("acierto");
};

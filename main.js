const main = () => {
  const cuadrado = document.querySelector("div.cuadrado");
  let acc = 0;

  document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 39) {
      acc += 1;
    } else if (event.which === 37) {
      acc -= 1;
    }
    cuadrado.style.marginLeft = acc + "rem";
  });
};

main();

const nombres = ["Anna", "Bianca", "Carolina", "Dante", "Elsa"];
let i = 0;
const id = setInterval(() => {
  console.log(nombres[i]);
  i ++;
  if (i == nombres.length) {
      clearInterval(id)
  }
}, 500);

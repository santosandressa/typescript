const input = document.querySelector("input");
const total = localStorage.getItem("total");
input.value = total;
calcGanho(input.value)

function calcGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
    localStorage.setItem("total", value);
    calcGanho(value)
}

input?.addEventListener("keyup", totalMudou);

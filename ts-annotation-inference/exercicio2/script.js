"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcGanho(Number(input.value));
}
function calcGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}

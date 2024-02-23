const visitDisplay = document.querySelector(".visits");

let visitNum = Number(window.localStorage.getItem("visitNum-ls")) || 0;

if (visitNum !== 0) {
    visitDisplay.textContent = visitNum;
} else {
    visitDisplay.textContent = `You haven't visited before! Welcome!! :) `
}

visitNum++;

localStorage.setItem("visitNum-ls", visitNum);
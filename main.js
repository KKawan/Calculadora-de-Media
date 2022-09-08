const result = document.getElementById("res");
const imgResult = document.getElementById("img-res");

const calcularMedia = () => {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const nota4 = Number(document.getElementById("nota4").value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media.toFixed(1) >= 7) {
        result.innerText = `Você foi aprovado! Sua média foi: ${media.toFixed(1)}`;
        result.style.color = "#90e890";
        imgResult.src = "./assets/kitty.gif";
    } else {
        result.innerText = `Infelizmente você foi reprovado... Sua média foi: ${media.toFixed(1)} :(`
        result.style.color = "#f07f7f";
        imgResult.src = "./assets/peepo_cry.gif";
    }
}

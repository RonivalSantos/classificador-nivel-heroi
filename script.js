const resposta = document.querySelector('.resposta');
const botao = document.querySelector('button');
let nivel = '';
function handleClick() {
  let nome = document.getElementById('nome').value;
  let xp = Number(document.getElementById('xp').value);

  if (xp >= 0 && xp < 1001) {
    nivel = 'Ferro';
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = 'bronze';
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = 'Prata';
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = 'Prata';
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = 'Platina';
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = 'Ascendente';
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = 'Imortal';
  } else if (xp >= 10001) {
    nivel = 'Radiante';
  }

  if (nome === '' || xp === 0) {
    window.alert('Preencha todos os campos');
  } else {
    resposta.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  }
}

botao.addEventListener('click', handleClick);

/*Para ficar um pouco mais fácil de entender e também com um visual mais bonito, eu decidi colocar o input para o usuário digitar o nome e xp, após isso, clicar no botão onde vai acionar o evento e fazer com que a função funcione. na função vai acontecer toda a verificação de if/else e a partir daí gerar a resposta. */

/* A reposta também está condicionada, somente vai gerar a resposta se os dois campos estiverem preenchidos, caso contrário, vai gerar um alerta no navegador pedindo para o usuário preencher os campos. */

/* Além da resposta ser mostrada no H1 do index.html, também é mostrada no console do navegador */

/*  Fiz o projeto manipulando o DOM, pois achei que daria um UP com uma melhor experiência, lembrando dos conceitos que ja tenho como aprendizado de outros cursos e de curiosidade minha. */

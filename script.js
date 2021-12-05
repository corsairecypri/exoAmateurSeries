//Les document.querySelector

const body = document.querySelector("body");

const form = document.querySelector("form");

const question1 = document.querySelector(".dureeEpisode");

const question2 = document.querySelector(".nombreEpisodes");

//La section créée par l'é vènement submit
const section = document.createElement("section");

//L'évènement submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dureeEpisode = Number(e.target.elements.dureeEpisode.value);
  const nombreEpisodes = Number(e.target.elements.nombreEpisodes.value);

  //Calculs

  const dureeTotaleMin = dureeEpisode * nombreEpisodes;
  const dureeTotaleHeu = dureeTotaleMin / 60;
  const dureeTotaleJou = dureeTotaleHeu / 24;

  const moisDeVisionnage = nombreEpisodes / 30;

  const rythme3parJour = nombreEpisodes / 3;
  const rythme5parJour = nombreEpisodes / 5;
  const rythme10parJour = nombreEpisodes / 10;

  //Création de la section

  section.innerHTML = "";

  section.innerHTML = `
  <p>La durée totale de visionnage de cette série est de ${dureeTotaleMin} minutes, soit ${dureeTotaleHeu.toFixed(2)} heures ou
  ${dureeTotaleJou.toFixed(2)} jours...</p>

  <p>Au rythme de 1 épisode par jour, il vous faudra ${nombreEpisodes} jours pour terminer cette série, soit 
  ${moisDeVisionnage.toFixed(2)} mois...</p>

  <p>Au rythme de 3 épisodes par jour, il vous faudra ${rythme3parJour.toFixed(2)} jours...</p>

  <p>Au rythme de 5 épisodes par jour, il vous faudra ${rythme5parJour.toFixed(2)} jours...</p>

  <p>Et au rythme de 10 épisodes par jour (<span>ATTENTION DANGER pour votre vie sociale</span>), 
  il vous faudra ${rythme10parJour.toFixed(2)} jours...</p>
  `;

  body.appendChild(section);
});


const startButton = document.querySelector('.start-button');
const horseDetailsForm = document.querySelector('.horse-details-form');
const exitButton = document.querySelector('.exit-button');
const horseDetailsPage = document.getElementById('horse-details-page');
const racetrackPage = document.getElementById('racetrack-page');

startButton.addEventListener('click', function() {
  document.getElementById('opening-page').style.display = 'none';
  horseDetailsPage.style.display = 'block';
});

horseDetailsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  horseDetailsPage.style.display = 'none';
  racetrackPage.style.display = 'flex';
});

exitButton.addEventListener('click', function() {
  racetrackPage.style.display = 'none';
  document.getElementById('opening-page').style.display = 'flex';
});
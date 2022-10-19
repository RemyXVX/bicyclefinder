import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Bike from './bike.js';
// Business Logic
function bikes(location) {
  Bike.bikes(location)
    .then(function(response) {
      if(response.main) {
        printElements(response, location);
      } else {
        printError(response, location);
      }
  });
}
//UI Logic
function printElements(response, location) {
  document.querySelector('#pushStuffHere').innerHTML = `Your bike got jacked in ${location}. Look for it there.`;
}

function printError(error, location) {
  document.querySelector('#pushStuffHere').innerHTML = `There was an error getting the ${location}. Sorry ese.`;
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const location = document.querySelector('#city').value;
  document.querySelector('#city').value = null;
  bikes(location);
}

window.addEventListener("load", function() {
  document.querySelector('form#bikes').addEventListener("submit", handleFormSubmission);
});
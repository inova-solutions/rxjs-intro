require('../00_Source/common');
const { of } = require("rxjs");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function fruitsAPI() {
    return of(...shuffleArray(['Apple', 'Banana', 'Pear', 'Orange', 'Mango', 'Pinapple']));
}

function weekdaysAPI() {
    return of('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}


// for every weekday associate the first fruit from the API
// build a short phrase for every weekday in this form:
// Menu for Monday: Apple
// Menu for Tuesday: Mango
// ...

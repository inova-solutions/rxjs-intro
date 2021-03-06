require('../00_Source/common');
const { of, BehaviorSubject } = require('rxjs');
const { delay, concatMap } = require('rxjs/operators');

const availableDrink = new BehaviorSubject('Water');
setTimeout(() => availableDrink.next('Sprite'), 1200);
setTimeout(() => availableDrink.next('Fanta'), 2200);

function getPerson() {
    return of(
        'Max Muster',
        'Peter Silie',
        'Hans Heinzelmann',
        'Kurt Kontrabass',
        'Arnold Anders'
    ).pipe(concatMap(person => of(person).pipe(delay(500))));
}

// For every person get the currently available drink
// and form a sentence like:
// Max Muster drinks a cup of Water
// Hans Heinzelmann drinks a cup of Sprite
// ...
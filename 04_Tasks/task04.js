require('../00_Source/common');
const { of } = require("rxjs");

function currentIdAPI() {
    return of(3);
}

function jediAPI(id) {
    const data = [
        {id: 1, title: "Mace Windu", council: true},
        {id: 2, title: "Obi-Wan Kenobi", council: true},
        {id: 3, title: "Anakin Skywalker", council: false}
    ];

    return of(data.find(d => d.id === id));
}


// find out if the jedi with the id provided by the "currentIdAPI" is on the jedi council
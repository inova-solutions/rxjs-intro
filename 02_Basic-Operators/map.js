require('../00_Source/common');
const { of } = require("rxjs");
const { map, tap } = require("rxjs/operators");

of(13).pipe(
    tap(n => console.log(n)),
    map(n => n + 12), // 13 + 12 = 25
    tap(n => console.log(n)),
    map(n => n * 4) // 25 * 4 = 100
).subscribe(n => console.log(n));
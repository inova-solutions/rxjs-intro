require('../00_Source/common');
const { of, Subject } = require("rxjs");
const { mergeMap, delay, tap } = require("rxjs/operators");

// source to get data from, returns an observable
function getData() {
    const sub = new Subject();
    setTimeout(() => sub.next(1), 100);
    setTimeout(() => sub.next(2), 200);
    setTimeout(() => sub.next(3), 300);
    return sub.asObservable();
}

// upload mechanic, returns an observable which lets you track the upload
function uploadData(data) {
    return of(data).pipe(
        tap((d) => console.log(`data ${d} starts uploading...`)),
        delay(Math.random() * 1000),
        tap((d) => console.log(`data ${d} finished uploading...`))
    );
}

// get data then upload each data part on arrival and wait for the upload
getData()
    .pipe(mergeMap(data => uploadData(data)))
    .subscribe(x => console.log('Data ready:', x));


   
// bad practice anti pattern
// getData().subscribe(data => {
//     uploadData(data).subscribe(uploadedData => {
//         console.log('Data ready:', uploadedData);
//     });
// });
# Rx/JS

This repository explains basic Rx/JS concepts by providing some documented examples. Additionally there are some [tasks](./04_Tasks) to apply those concepts and further your knowledge.

## 01 Observable Structure

- `basic-observable.js`: a basic observable using an observer to push content or an error. Basic subscriptions plus a shorthand.
- `of.js`: a simple and quick way to create an observable and push a value
- `subject.js`: create a Subject to provide a way to push to an observable form anywhere
- `behavior-subject.js`: create a BehaviorSubject to do the same as a Subject but provide a initial value
- `from-event.js`: create an observable from an event which gets content pushed as event triggers

## 02 Basic Operators

Operators can be used in `.pipe()` method of the observable. They can be chained and executed consecutively.

- [x] [map](./02_Basic-Operators/map.js)
- [x] [tap](./02_Basic-Operators/tap.js)
- [x] [filter](./02_Basic-Operators/filter.js)
- [x] [take](./02_Basic-Operators/take.js)
- [x] [takeUntil](./02_Basic-Operators/takeUntil.js)
- [ ] [first](https://www.learnrxjs.io/learn-rxjs/operators/filtering/first)
- [x] [finalize](./02_Basic-Operators/finalize.js)
- [ ] [catchError](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch)
- [ ] [delay](https://www.learnrxjs.io/learn-rxjs/operators/utility/delay)
- [x] [debounce](./02_Basic-Operators/debounce.js)
- [x] [mergeMap / flatMap](./02_Basic-Operators/mergeMap.js)

## 03 Combinator Operators

- [x] [forkJoin](./03_Combinator-Operators/forkJoin.js)
- [x] [combineLatest](./03_Combinator-Operators/combineLatest.js)
- [ ] [zip](https://www.learnrxjs.io/learn-rxjs/operators/combination/zip)
- [ ] [withLatestFrom](https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom)

## 04 Tasks

Solve some tasks to try out some Operators.

## 99 Resources

- [Learn RxJS](https://www.learnrxjs.io/)
- [RxJS Docs](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Marbles RxJS Visualisation](https://rxmarbles.com/)
- [Differences forkJoin, zip, combineLatest, withLatestFrom](https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom)

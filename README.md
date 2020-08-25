# Rx/JS

This repository explains basic Rx/JS concepts by providing some documented examples. Additionally there are some [tasks](./04_Tasks) to apply those concepts and further your knowledge.

## 01 Observable Aufbau

- `basic-observable.js`: a basic observable using an observer to push content or an error. Basic subscriptions plus a shorthand.
- `of.js`: a simple and quick way to create an observable and push a value
- `subject.js`: create a Subject to provide a way to push to an observable form anywhere
- `behavior-subject.js`: create a BehaviorSubject to do the same as a Subject but provide a initial value
- `from-event.js`: create an observable from an event which gets content pushed as event triggers

## 02 Basic Operators

Operators can be used in `.pipe()` method of the observable. They can be chained and executed consecutively.

- [x] map
- [x] tap
- [x] filter
- [x] take
- [x] takeUntil
- [ ] [first](https://www.learnrxjs.io/learn-rxjs/operators/filtering/first)
- [ ] [finalize](https://www.learnrxjs.io/learn-rxjs/operators/utility/finalize)
- [ ] [catchError](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch)
- [ ] [delay](https://www.learnrxjs.io/learn-rxjs/operators/utility/delay)
- [x] debounce
- [x] mergeMap / flatMap

## 03 Combinator Operators

- [x] forkJoin
- [x] combineLatest
- [ ] [zip](https://www.learnrxjs.io/learn-rxjs/operators/combination/zip)
- [ ] [withLatestFrom](https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom)

## 04 Tasks

Solve some tasks to try out some Operators.

## 99 Resources

- [Learn RxJS](https://www.learnrxjs.io/)
- [RxJS Docs](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Marbles RxJS Visualisation](https://rxmarbles.com/)
- [Differences forkJoin, zip, combineLatest, withLatestFrom](https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom)

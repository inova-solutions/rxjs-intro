# Rx/JS

## 01 Observable Aufbau

- `basic-observable.js`: a basic observable using an observer to push content or an error. Basic subscriptions plus a shorthand.
- `of.js`: a simple and quick way to create an observable and push a value
- `subject.js`: create a Subject to provide a way to push to an observable form anywhere
- `behavior-subject.js`: create a BehaviorSubject to do the same as a Subject but provide a initial value
- `from-event.js`: create an observable from an event which gets content pushed as event triggers

## 02 Basic Operators

- [x] map
- [x] tap
- [x] filter
- [x] take
- [x] takeUntil
- [ ] first
- [ ] finalize
- [ ] catchError
- [ ] delay
- [x] debounce
- [x] mergeMap / flatMap

## 03 Combinator Operators

- [x] forkJoin
- [x] combineLatest
- [ ] zip
- [ ] withLatestFrom

## 04 Tasks

Solve some tasks to try out some Operators.

## 99 Resources

- [Learn RxJS](https://www.learnrxjs.io/)
- [RxJS Docs](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Marbles RxJS Visualisation](https://rxmarbles.com/)
- [Differences forkJoin, zip, combineLatest, withLatestFrom](https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom)

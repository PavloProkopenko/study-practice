console.log("Start");

let promise = new Promise(function (resolve, rejected) {
  (resolve) => console.log("All is good!");
  (rejected) => console.error(new Error());
});

promise.then();

queueMicrotask(() => {
  console.log("Queued microtask");
});

setTimeout(() => {
  console.log("In timeout");
}, 0);

console.log("End");

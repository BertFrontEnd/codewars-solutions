/* Create a resolved javascript Promise that will return 'Hello World!'. */

function promiseHelloWorld() {
  return Promise.resolve('Hello World!');
}

/* console.log(promiseHelloWorld(), '<=> Hello World!'); */
console.log(promiseHelloWorld());

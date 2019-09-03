// function fn(resolve) {
//   setTimeout(function() {
//     resolve(234)
//   },2000)
// }

// let p0 = new Promise(fn)

// let p1 = Promise.resolve(p0)
// p1.then(resolve => {
//   console.log(resolve)
// })

// let p3 = Promise.resolve(888)
// console.log(p1)
// console.log(p3)
// p3.then(res => {
//   return p0
// }).then(da => {
//   console.log(da)
// })

// console.log(p0 === p1)

{
  // promise.all
  const p1 = new Promise(resolve => {resolve(1)})
  const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      reject(2)
    }, 2000);
  })
  const p3 = Promise.resolve(3)

  Promise.all([p1,p2,p3]).then((res) => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })

}
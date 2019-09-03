const dst = {}
function fib(n) {
  if(n === 1 || n === 2) {
    return 1
  } 
  const pre = dst[n-2] ? dst[n-2] : fib(n-2)
  const cur = dst[n-1] ? dst[n-1] : fib(n-1) // 没啥用
  const result = pre + cur
  if(!dst.hasOwnProperty(n)) {
    dst[n] = result
  }
  return result
}

function fib2(n) {
  if(n === 1 || n === 2) {
    return 1
  }
  return fib2(n-1) + fib2(n-2)
}

function fibonacci(n) {
  let n1 = 1,
      n2 = 1,
      sum = 1
  for(let i = 3; i <= n; i += 1) {
      sum = n1 + n2
      n1 = n2
      n2 = sum
  }
  return sum
}

// console.log(fib(200))
// console.log(fib2(42))
console.log(fibonacci(200))


// class Symbol {
//   constructor(name) {
//     this.dst = {}
//     this.name = name
//     const id = this.renderId()
//     this.dst[id] = null
//   }
//   set(value) {
//     console.log('value',value)
//     this.dst[id] = value
//   }
//   renderId() {
//     return Math.random()
//   }
// }

const t = Symbol('andy')
t = 1
console.log(t)
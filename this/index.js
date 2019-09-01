// const a = 2
// function abc(fn) {
//   // this.a = 1
//   console.log(this)
//   this.a = 1
//   // return function() {
//   //   console.log(this.a)
//   // }
//   return () => {
//     console.log(this.a)
//   }
// }

// (abc(function(){console.log('3434')}))()
// // abc(function(){console.log(2)})
// // abc(function(){console.log(2)})
// // abc(function(){console.log(2)})
// // abc(function(){console.log(2)})

var a = 'global'
obj = {
  a:1,
  b() {
    console.log(this.a)
  }
}

const btn = document.querySelector('.btn')
console.log(btn)
// btn.addEventListener('click',obj.b.bind(obj))
btn.addEventListener('click',() => {
  obj.b()
})


obj.b() // 1

const t = obj.b
t() // un


const arr = [2,4,3,1]
console.log(arr.map(item => item * 2).sort((a,b) => a > b).filter(item => item > 6))
btn.innerHTML = `<span>123</span>`
console.log(typeof btn.innerHTML)
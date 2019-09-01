// 手写bind

var a = 'global'

const obj = {
  a:99,
  fn() {
    console.log(this.a)
  }
}

function fn(a,b,c) {
  this.a = 3
  console.log(this.a)
  function fn2() {
    console.log(this.a)
    this.a='fn2'
    function fn3() {
      console.log(this.a)
    }
    fn3()
  }
  fn2()
}

const t = obj.fn
t.apply(obj)

Function.prototype.myBind = function(ctx) {
  const self = this
  return function() {
    self.call(ctx,...arguments)
  }
}

const fnMine = fn.myBind(obj)
fnMine(9,8,7)

// fn()


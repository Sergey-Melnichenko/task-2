var a = 1
var b = 0
var sum = 0
var switcher = true

while (b < 4000000) {
  if (switcher) {
    b = a + b
    if (b % 2 === 0) {
      sum += b
    }
  } else {
    a = a + b
    if (a % 2 === 0) {
      sum += a
    }
  }
  switcher = !switcher
}

console.log(sum)

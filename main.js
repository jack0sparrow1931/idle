var points = 0
var add = [1,5,10,20,50]
var mult = [1,0,0,0,0]
var speed = [1,0,0,0,0]

setInterval(function() {
  let num1 = add[0] * mult[0]
  let num2 = add[1] * mult[1]
  let num3 = add[2] * mult[2]
  let num4 = add[3] * mult[3]
  let num5 = add[4] * mult[4]

  points += num1 + num2 + num3 + num4 + num5

  console.log(points + "|" + num1 + "|" + num2 + "|" + num3 + "|" + num4 + "|" + num5)
}, speed[0] * 1000)

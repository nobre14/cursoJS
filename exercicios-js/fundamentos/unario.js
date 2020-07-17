let num1 = 1
let num2 = 2

num1++ // pos fixada - acressenta uma unidade( não faz diferença antes ou depois)
console.log(num1)

--num1 // pode ser num1--
console.log(num1)

console.log(++num1 === num2--) // incrementou antes da comparação ( prefixado )
console.log(num1 === num2)
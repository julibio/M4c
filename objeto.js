const pessoa = {
    altura: 172,
    peso: 65,
    olhos: "verdes",
    aposentado: false,
    calculoIMC(){
         return this.peso / (this.altura * this.altura)
    }
}

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.calculoIMC())

const pessoa2 = Object.create(pessoa)
pessoa2.altura = 180

console.log(pessoa2.altura)
console.log(pessoa2.peso)
console.log(pessoa2.calculoIMC())

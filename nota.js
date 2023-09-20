let pesoAtividade1 = document.getElementById('p1')
let pesoAtividade2 = document.getElementById('p2')
let pesoAtividade3 = document.getElementById('p3')

let notaAtividade1 = document.getElementById('n1')
let notaAtividade2 = document.getElementById('n2')
let notaAtividade3 = document.getElementById('n3')


let media

function nota(){
    let p1 = Number(pesoAtividade1.value)
    let p2 = Number(pesoAtividade2.value)
    let p3 = Number(pesoAtividade3.value)
    let n1 = Number(notaAtividade1.value)
    let n2 = Number(notaAtividade2.value)
    let n3 = Number(notaAtividade3.value)
    media = ((p1*n1) + (p2*n2) + (p3*n3)) / (p1+p2+p3)
    alert(`A media ponderada é ${media}`)

}

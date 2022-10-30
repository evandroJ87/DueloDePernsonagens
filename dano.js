const personagem = prompt("Insira o nome do seu personagem: ")
const forçaP1= prompt("Insira a força do personagem "+personagem)

const defensor= prompt ("Digite o nome do defensor: ")
let life= prompt("Digite a vida do defensor "+defensor)
const defesa=prompt("Digite o valor da defesa: ")
const shield=prompt("O defensor possui escudo?(Digite Sim ou Não): ")

let damage=0

if (forçaP1>defesa && shield=="Não"){
    damage=forçaP1-defesa
} else if (forçaP1>defesa && shield=="Sim"){
    damage=(forçaP1-defesa)/2
}

life -= damage

alert (personagem+ " causou "+ damage + " pontos de dano em "+defensor)

alert (personagem+"\n Poder de ataque: "+forçaP1+"\n\n"+
       defensor+"\n Pontos de defesa: "+defesa+
       "\n Possui escudo? "+ shield
)
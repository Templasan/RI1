const personagem1 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark LXXXV",
    armaSecundaria: "Tecnologia de repulsores",
    velocidade: 75,
    forca: 70,
    resistencia: 65,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem2 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de vibranium",
    armaSecundaria: "Mjolnir",
    velocidade: 70,
    forca: 80,
    resistencia: 90,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem3 = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Stormbreaker",
    armaSecundaria: "Mjolnir",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem4 = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Armas de choque elétrico",
    armaSecundaria: "Pistolas duplas",
    velocidade: 85,
    forca: 50,
    resistencia: 60,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem5 = {
    nome: "Bruce Banner",
    codinome: "Hulk (Professor Hulk)",
    armaPrincipal: "Força bruta",
    armaSecundaria: "Intelecto científico",
    velocidade: 60,
    forca: 100,
    resistencia: 100,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem6 = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro (Ronin)",
    armaPrincipal: "Arco e flechas",
    armaSecundaria: "Espadas japonesas",
    velocidade: 75,
    forca: 60,
    resistencia: 70,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem7 = {
    nome: "Carol Danvers",
    codinome: "Capitã Marvel",
    armaPrincipal: "Poder cósmico",
    armaSecundaria: "Voar em alta velocidade",
    velocidade: 100,
    forca: 100,
    resistencia: 100,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}

const personagem8 = {
    nome: "Thanos",
    codinome: "O Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Força Bruta",
    velocidade: 40,
    forca: 100,
    resistencia: 100,
    descricao: function() {
        return `
    - Nome: ${this.nome}
    - Codinome: ${this.codinome}
    - Arma Principal: ${this.armaPrincipal}
    - Arma Secundária: ${this.armaSecundaria}
    - Força: ${this.forca}
    - Velocidade: ${this.velocidade}
    - Resistência: ${this.resistencia}
        `;
    }
}


let lista = [
    personagem1,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7,
    personagem8
];

function determinarVencedor(personagens) {
    let vencedor = null;
    let maiorPontuacao = -Infinity;

    console.log("--- COMEÇANDO O TORNEIO! ---\n");

    for (let i = 0; i < personagens.length; i++) {
        for (let j = 0; j < personagens.length; j++) {
            const p1 = personagens[i];
            const p2 = personagens[j];

            if (p1 === p2) {
                console.log(`\n**Batalha de exibição: ${p1.codinome} vs ele mesmo.**`);
                console.log("O resultado é um empate, sem surpresas.");
            } else {
                const score1 = p1.forca + p1.velocidade + p1.resistencia;
                const score2 = p2.forca + p2.velocidade + p2.resistencia;

                let ganhador = "ninguém";
                if (score1 > score2) {
                    ganhador = p1.codinome;
                } else if (score2 > score1) {
                    ganhador = p2.codinome;
                }
                
                console.log(`\n--- Batalha: ${p1.codinome} vs ${p2.codinome} ---`);
                console.log("O ringue está pronto!");
                console.log(`\n**Detalhes de ${p1.codinome}:**`);
                console.log(p1.descricao());
                console.log(`\n**Detalhes de ${p2.codinome}:**`);
                console.log(p2.descricao());

                if (ganhador === "ninguém") {
                    console.log(`**Resultado da Luta:** Que luta acirrada! Foi um empate. Incrível!`);
                } else {
                    console.log(`**Resultado da Luta:** E o vencedor é... **${ganhador}**!`);
                }
            }
        }
    }
    
    for (let i = 0; i < personagens.length; i++) {
        const total = personagens[i].forca + personagens[i].velocidade + personagens[i].resistencia;
        if (total > maiorPontuacao) {
            maiorPontuacao = total;
            vencedor = personagens[i];
        }
    }

    console.log("\n--- FIM DO TORNEIO ---");
    console.log(`\nApós todas as batalhas, o grande campeão geral é... **${vencedor.codinome}**!`);
    console.log(`Com um poder total de ${maiorPontuacao}, ele dominou a competição.`);
    console.log("\n**Ficha completa do Campeão:**");
    console.log(vencedor.descricao());
}

determinarVencedor(lista);

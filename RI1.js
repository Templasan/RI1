const personagem1 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark LXXXV",
    armaSecundaria: "Tecnologia de repulsores",
    velocidade: 75,
    forca: 70,
    resistencia: 65,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundária: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nível de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia + "\n";
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

    console.log("Lutas entre os personagens:\n");

    for (let i = 0; i < personagens.length; i++) {
        for (let j = 0; j < personagens.length; j++) {
            const p1 = personagens[i];
            const p2 = personagens[j];

            if (p1 === p2) {
                console.log(`${p1.codinome} vs ${p2.codinome} ➜ Vencedor: O mesmo personagem`);
            } else {
                const score1 = p1.forca + p1.velocidade + p1.resistencia;
                const score2 = p2.forca + p2.velocidade + p2.resistencia;

                let ganhador;
                if (score1 > score2) {
                    ganhador = p1.codinome;
                } else if (score2 > score1) {
                    ganhador = p2.codinome;
                } else {
                    ganhador = "Empate";
                }

                console.log(`${p1.codinome} vs ${p2.codinome} ➜ Vencedor: ${ganhador}`);
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

    console.log("\nCampeão Geral:\n" + vencedor.descricao());
}

determinarVencedor(lista);
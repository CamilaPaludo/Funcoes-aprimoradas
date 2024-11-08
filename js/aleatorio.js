const nomes = ["Camila", "Amanda", "Carla", "Brenda", "Lucas","Tamiris", "José", "Leandro", "Simone"];



export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
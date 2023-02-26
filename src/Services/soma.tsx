export const soma = (num: number): number =>{
    return num + 1
}

export const mutiplica = (num: number, mult: number): number | string =>{
    if (mult === 2 || mult === 3){
        return num * mult
    }
    return "multiplicador error"
}
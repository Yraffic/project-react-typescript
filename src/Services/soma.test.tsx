import { mutiplica, soma } from "./soma"
describe('soma', () => {
    it('deve somar 1 ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve ser mutiplicado por 2', () => {
        const value = mutiplica(2, 2)
        expect(value).toBe(4)
    })

    it('deve ser mutiplicado por 3', () => {
        const value = mutiplica(2, 3)
        expect(value).toBe(6)
    })

    it('deve infromar um erro, com multiplicador diferente de 2 ou 3', () => {
        const value = mutiplica(2, 4)
        expect(value).toBe("multiplicador error")
    })
})

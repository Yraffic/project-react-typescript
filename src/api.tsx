const conta = {
    email: "yuri@gmail.com",
    password: "123456",
    name: "yuri",
    balance: 2000.00,
    id: "1"
}

export const api = new Promise((resover)=>{
    setTimeout(()=>{
        resover(conta)
    },3000)
})
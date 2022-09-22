const data = [
    {
        id: 1,
        title: "Camisa",
        price: 5000,
        stock: 10,
        img: "https://i.pinimg.com/564x/f1/e3/08/f1e30832af33551702ff18c02e5bdadd.jpg",
        category: "indumentaria"
    },
    {
        id: 2,
        title: "Jean",
        price: 10000,
        stock: 5,
        img: "https://i.pinimg.com/564x/25/a1/55/25a1552e68b62d84cc97e7f69557dec9.jpg",
        category: "indumentaria"
    },
    {
        id: 3,
        title: "Campera",
        price: 20000,
        stock: 4,
        img: "https://i.pinimg.com/564x/c8/19/75/c81975db318786998af10a3477cf896b.jpg",
        category: "indumentaria"
    },
    {
        id: 4,
        title: "Zapatos",
        price: 7000,
        stock: 6,
        img: "https://i.pinimg.com/564x/e7/57/26/e757268b76e346e2db190bd6af1274eb.jpg",
        category: "indumentaria"
    },



];

export default function getItems () {
    return new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            resolve (data)
        }, 1500)

        
    })

}
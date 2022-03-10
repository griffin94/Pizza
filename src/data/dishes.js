const dishes = {
    status: 200,
    response: {
        data: {
            pizza: [
                {
                    name: 'margherita',
                    ingrediens: 'sos pomidorowy, mozzarella',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328122_640.png',
                    price: {
                        small: 19.99,
                        medium: 24.99,
                        max: 29.99
                    },
                    isVege: true,
                    isBestseller: false,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'pepperoni',
                    ingrediens: 'sos pomidorowy, podwójna mozzarella, podwójna kiełbasa pepperoni',
                    image: 'https://cdn.pixabay.com/photo/2014/11/14/09/10/pizza-530376_640.png',
                    price: {
                        small: 24.99,
                        medium: 29.99,
                        max: 34.99
                    },
                    isVege: false,
                    isBestseller: true,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'capricciosa',
                    ingrediens: 'sos pomidorowy, mozzarella, szynka, pieczarki',
                    image: 'https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_640.png',
                    price: {
                        small: 24.99,
                        medium: 29.99,
                        max: 34.99
                    },
                    isVege: false,
                    isBestseller: false,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'hawajska',
                    ingrediens: 'sos pomidorowy, mozzarella, szynka, ananas',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328121_640.png',
                    price: {
                        small: 24.99,
                        medium: 29.99,
                        max: 34.99
                    },
                    isVege: false,
                    isBestseller: false,
                    isNew: false,
                    isSpicy: false
                },
                
                {
                    name: 'kebab',
                    ingrediens: 'sos pomidorowy, mozzarella, kebab z kurczaka, cebula',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328122_640.png',
                    price: {
                        small: 24.99,
                        medium: 29.99,
                        max: 34.99
                    },
                    isVege: false,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: false
                },
                {
                    name: 'quattro formaggi',
                    ingrediens: 'sos kremowy, mozzarella, cheddar, ementaler, ser Lazur',
                    image: 'https://cdn.pixabay.com/photo/2014/11/14/09/10/pizza-530376_640.png',
                    price: {
                        small: 29.99,
                        medium: 34.99,
                        max: 39.99
                    },
                    isVege: true,
                    isBestseller: true,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'hot & spicy',
                    ingrediens: 'sos pomidorowy, mozzarella, kiełbasa pepperoni, cebula, papryczki jalapeno',
                    image: 'https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_640.png',
                    price: {
                        small: 29.99,
                        medium: 34.99,
                        max: 39.99
                    },
                    isVege: false,
                    isBestseller: false,
                    isNew: false,
                    isSpicy: true
                },
                {
                    name: 'chłopska',
                    ingrediens: 'sos, ser, cebula,Staromiejska Kiełbasa Lubelska, boczek, ogórek kiszony, ser wędzony',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328121_640.png',
                    price: {
                        small: 29.99,
                        medium: 34.99,
                        max: 39.99
                    },
                    isVege: false,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: false
                },
                {
                    name: 'vegetariana',
                    ingrediens: 'sos pomidorowy, mozzarella, kukurydza, pomidorki koktajlowe, papryka, cebula, zioła prowansalskie',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328122_640.png',
                    price: {
                        small: 29.99,
                        medium: 34.99,
                        max: 39.99
                    },
                    isVege: true,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: false
                },
                {
                    name: 'vegetariana',
                    ingrediens: 'sos pomidorowy, mozzarella, kukurydza, pomidorki koktajlowe, papryka, cebula, zioła prowansalskie',
                    image: 'https://cdn.pixabay.com/photo/2018/04/17/17/15/italian-3328122_640.png',
                    price: {
                        small: 0,
                        medium: 34.99,
                        max: 39.99,
                    },
                    isVege: true,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: false
                },
            ],
            burgers: [
                {
                    name: 'cheeseburger',
                    ingrediens: 'wołowina, cheddar, cebula, ogórek kiszony, majonez, ketchup, musztarda',
                    image: 'https://cdn.pixabay.com/photo/2021/08/15/11/04/hamburger-6547521_640.png',
                    price: 28,
                    isVege: false,
                    isBestseller: true,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'chicken',
                    ingrediens: 'panierowany kurczak, sałata lodowa, cheddar, pomidor, sos majonezowo-śmietanowy',
                    image: 'https://cdn.pixabay.com/photo/2021/11/12/02/02/burger-6787716_960_720.png',
                    price: 30,
                    isVege: false,
                    isBestseller: true,
                    isNew: false,
                    isSpicy: false
                },
                {
                    name: 'stolarz',
                    ingrediens: 'wołowina, bekon, panierowany ser gouda, sałata lodowa, prażona cebulka, sriracha mayo',
                    image: 'https://cdn.pixabay.com/photo/2021/11/21/16/04/burger-6814594_960_720.png',
                    price: 36,
                    isVege: false,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: false
                },
                {
                    name: 'americana',
                    ingrediens: 'szarpana wołowina, pieczarka portobello, sałata rzymska, czerwona cebula, sos bbq, remulada, papryka jalapeno',
                    image: 'https://cdn.pixabay.com/photo/2021/11/21/16/03/burger-6814593_960_720.png',
                    price: 34,
                    isVege: false,
                    isBestseller: false,
                    isNew: true,
                    isSpicy: true
                },
            ]
        }
    }
}

export default new Promise((res, rej) => setTimeout(() => res(dishes), 1000));
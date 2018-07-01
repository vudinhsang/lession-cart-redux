var intialState = [
    {
        id : 1,
        name : 'Iphone 7 plus',
        image : 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/apple-iphone-7-gallery-img-3.jpg',
        description: 'apple 1',
        price: 500,
        inventory: 15,
        rating: 4
    },
    {
        id : 2,
        name : 'Samsung',
        image : 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/apple-iphone-7-gallery-img-3.jpg',
        description: 'apple',
        price: 550,
        inventory: 20,
        rating: 3
    },
    {
        id : 3,
        name : 'Galaxy',
        image : 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/apple-iphone-7-gallery-img-3.jpg',
        description: 'samsung',
        price: 600,
        inventory: 25,
        rating: 5
    }
]

const products = (state = intialState, action) => {
    switch (action.type) {
        default :
            return [...state];
    }
}

export default products;
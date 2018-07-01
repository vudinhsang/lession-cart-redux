import * as types from './../constants/ActionTypes'


var data = JSON.parse(localStorage.getItem('CART'));

var intialState = [
    {
        product : {
            id : 1,
            name : 'Iphone 7 plus',
            image : 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/apple-iphone-7-gallery-img-3.jpg',
            description: 'apple 1',
            price: 500,
            inventory: 15,
            rating: 4
        },
        quantity : 5
    }
]

const cart = (state = intialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return [...state];
        default :
            return [...state];
    }
}

export default cart;
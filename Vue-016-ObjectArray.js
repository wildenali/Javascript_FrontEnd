var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        vehicles: [
            { type: 'Car', brand: 'Toyota', color: 'Metalic Silver' },
            { type: 'Motorcyle', brand: 'Yamaha', color: 'Red' },
            { type: 'Bike', brand: 'BMX', color: 'Black' },
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 10
        }
    },
});
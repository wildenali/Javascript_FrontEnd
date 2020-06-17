var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        content: '',
        vehicles: ['bike', 'car', 'motorsycle'],
    },
    methods: {
        addVehicle: function() {
            this.vehicles.push(this.content);
            this.content = '';
        },
        removeVehicle: function(index) {
            this.vehicles.splice(index, 1);
        }
    },
});
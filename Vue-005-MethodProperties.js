var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        show1: true,
        pesan1: 'Method Properties',
        int1: 1,
        int2: 2,
        result1: null,
        result2: null
    },
    computed: {
        sum: function() {
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumProcess1: function() {
            return this.result1 = this.int1 + this.int2;
        },
        sumProcess2: function(int3) {
            return this.result2 = this.int1 + this.int2 + int3;
        }
    }
});
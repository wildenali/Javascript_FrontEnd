var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        show1: true, // coba ubah ke false, lihat hasilnya
        show2: false,
        show3: 'siap',
        pesan1: 'Hello World',
        pesan2: 'PESAN 2 NIH',
        int1: 1,
        int2: 2
    },
    computed: {
        sum: function() {
            return this.int1 + this.int2;
        }
    }
});
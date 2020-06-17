var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        pesan1: '',
    },
    methods: {
        escKey: function() {
            this.pesan1 = 'Mencet tombol ESC'
        },
        spaceKey: function() {
            this.pesan1 = 'Mencet tombol SPACE'
        },
        upKey: function() {
            this.pesan1 = 'Mencet tombol UP'
        },
        downKey: function() {
            this.pesan1 = 'Mencet tombol DOWN'
        },
        aKey: function() {
            this.pesan1 = 'Mencet tombol a'
        },
    },
});
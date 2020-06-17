var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        pesan: '',
    },
    methods: {
        showAlert: function() {
            alert('ini alert');
        }
    }
});
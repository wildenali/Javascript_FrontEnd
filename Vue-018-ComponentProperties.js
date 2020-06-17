Vue.component('greeting', {
    // template: '<b>Hellow, ini dari Component</b>'
    // atau
    template: `
        <div>
            <b>Hwlooow</b>
            <br>
            <i>Hwlooow</i>
            <br>
            <u>Hwlooow</u>
        </div>
    `
});

Vue.component('button-counter', {
    data: function() {
        return {
            count: 0,
        }
    },
    template: '<button v-on:click="count++">Udah di Klik {{ count }} kali</button>'
});

var app = new Vue({
    // key: value
    el: '#app', // el itu element
});
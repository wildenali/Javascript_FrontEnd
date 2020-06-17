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

var app = new Vue({
    // key: value
    el: '#app', // el itu element
});
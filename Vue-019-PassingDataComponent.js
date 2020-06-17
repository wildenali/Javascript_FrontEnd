Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});


var app = new Vue({
    // key: value
    el: '#app', // el itu element
    data: {
        posts: [
            { id: 1, title: "My journey", content: '<p>Ini isi kontent my journey <strong>Post 1</string></p>' },
            { id: 2, title: "My Life", content: '<p>Ini isi kontent my life <strong>Post 2</string></p>' },
            { id: 3, title: "My my", content: '<p>Ini isi kontent my my <strong>Post 3</string></p>' },
        ]
    }
});
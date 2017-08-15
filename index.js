var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Juan!',
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Cargaste esta página  ' + new Date(),
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue'
        }, {
            text: 'Build something awesome'
        }]
    }
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Esta es mi primera práctica con Vue.js.'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        title: 'Al estilo angular',
        message: ''
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
            id: 0,
            text: 'Verduras'
        }, {
            id: 1,
            text: 'Carne'
        }, {
            id: 2,
            text: 'Vino tinto'
        }]
    }
});

function toggle() {
    if (app3.seen) {
        app3.seen = false;
    } else {
        app3.seen = true;
    }
};
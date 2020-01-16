var app = new Vue({
    el: '#app',
    data: {
        pesan: 'Hello! my name is Alfara',
        link: 'https://www.udemy.com/home/my-courses/',
        finishedLink: '<a href="https://google.com">Google</a>'
    },
    methods: {
        sayHello: function () {
            this.pesan = 'Hallo Alfara!'
            return this.pesan
        }
    },
})

var app2 = new Vue({
    el: '#app2',
    data: {
        pesan: 'Kamu meng hover tulisan in pada' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        lihat: true //false
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        urutans: [{
                x: 'Beranda'
            },
            {
                x: 'Contact Us'
            },
            {
                x: 'Feature'
            },
            {
                x: 'FAQ'
            }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        pesan: 'klik button untuk membalik'
    },
    methods: {
        balik: function () {
            this.pesan = this.pesan.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        pesan: 'Hallo Alfara!'
    }
})

// Komponen dinamis
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        list: [{
                id: 0,
                text: 'Vegetables'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever else humans are supposed to eat'
            }
        ]
    }
})

var app8 = new Vue({
    el: '#app8',
    data: {
        hitung: 0,
        x: 0,
        y: 0
    },
    methods: {
        tambah: function (step,event) {
            this.hitung += step;
        },
        cekKordinat: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // reset : function(event){
        //     event.stopPropagation();
        // }
        alertMe:function(){
            alert('Alfaraaa!');
        }
    }
})
var app9 = new Vue({
    el:'#app9',
    data:{
        counter: 0,
        attachRed : false,
        color : 'green',
        width: 100
    },
    computed: {
        output: function(){
            return this.counter > 10 ? 'lebih dari sepuluh' : 'kurang dari 10';
        },
        divClasses:function(){
            return{
                red : this.attachRed,
                blue : !this.attachRed
            }
        },
        styleKu : function(){
            return{
                backgroundColor : this.color,
                width : this.width + 'px'
            }
        }
    },
    watch: {
        counter:function(value){
            var vm = this;
            return setTimeout(function(){
                vm.counter = 0
            },2000);
        }
    },
})

Vue.component('hello',{
    template:'<h2>aku alfara</h2>'
});

var app10 = new Vue({
    el : '#app10',
    data:{
        buahan : 'jeruk',
        show : true,
        buahs : ['mangga','jeruk','apel'],
        orangs :[
            {name:'Alfara',hobi:'makan',kelas:10},
            {name:'nafi',hobi:'jalan',kelas:10},
            {name:'dinara',hobi:'tidur',kelas:10}
        ]
    }
})

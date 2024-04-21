var app = new Vue({
    el:"#products",
    data:{
        products: [
            {
                id: 1,
                title: "Classic Kiwifruit",
                image: "/img/kiwi1.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Description 1"
            },
            {
                id: 2,
                title: "Kiwifruit Gold",
                image: "/img/kiwi2.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Description 2"
            },
            {
                id: 3,
                title: "Kiwifruit Red",
                image: "/img/kiwi3.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Description 3"
            },
            {
                id: 4,
                title: "Kiwifruit 'Red Passion'",
                image: "/img/kiwi4.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Description 4"
            },
            {
                id: 5,
                title: "Mini-Kiwifruit Veyki",
                image: "/img/kiwi5.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Description 5"
            }]
    },
    mounted: function(){
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem: function(id){
            window.localStorage.setItem('prod',id);
        }
    }
});
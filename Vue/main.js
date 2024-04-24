var app = new Vue({
    el:"#products",
    data:{
        products: [
            {
                id: 1,
                title: "Classic Kiwifruit",
                image: "/img/kiwi1.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Kiwifruit – Green are a good source of folate and vitamin C and a source of dietary fibre, omega-3 fatty acids, potassium, vitamins B6, E and K.You will find the full Nutrition Information Panel on the New Zealand Food Composition Data website. This website is owned jointly by Plant & Food Research and the Manatū Hauora Ministry of Health. This website holds the most comprehensive collection of high-quality nutrient data for New Zealand foods. The Database is managed and maintained by dedicated Plant & Food Research staff."
            },
            {
                id: 2,
                title: "Kiwifruit Gold",
                image: "/img/kiwi2.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "The gold kiwifruit or yellow kiwi (t/a Kiwi Gold) is a variety of kiwifruit developed by the company Zespri International Ltd. The yellow kiwi is a different species (Actinidia chinensis) but of the same genus as the green one (Actinidia deliciosa).In terms of organoleptic properties, the yellow kiwi has a less hard texture, and its skin is finer, smoother and less rough than the green kiwi fruit. The yellow kiwi has a yellowish color and is sweeter. In terms of size and weight, it does not show significant differences (between 5 and 8 cm long)."
            },
            {
                id: 3,
                title: "Kiwifruit Red",
                image: "/img/kiwi3.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Zespri RubyRed™ kiwifruit is smaller in size than commercial green and gold varieties, averaging 5.7 to 6.2 centimeters in length and 4.2 to 4.9 centimeters in diameter, and has an oval to ovate shape with sloping blunt, curved ends. The fruits generally weigh 62.3 to 87 grams and occasionally showcase a distinct dent on the bottom of the fruit. Zespri RubyRed™ kiwifruit has delicate, thin, smooth, and taut skin, radiating variegated shades of brown and olive green with numerous lenticels. The skin is also covered in short, red-brown, fine, downy hairs concentrated on the stylar end of the fruit, giving the surface a velvety feel. These hairs are weakly adhered to the skin and can be easily removed. Underneath the skin, the flesh is solid, tender, and aqueous, with a succulent, soft consistency. Zespri RubyRed™ kiwifruit is known for its distinctly pigmented flesh. The flesh will vary in coloration, but overall, the variety bears saturated pink and red hues with a dark red, crimson ring surrounding a yellow oval center. The dark red ring is also speckled with tiny, edible black seeds. Select Zespri RubyRed™ kiwifruits that are unblemished with taut skin and are semi-firm to the touch. The fruits have high sugar content, ranging from 18 to 24 Brix, and moderate acidity, creating a sweet, berry-like flavor."
            },
            {
                id: 4,
                title: "Kiwifruit 'Red Passion'",
                image: "/img/kiwi4.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "The Red Passion kiwi is а fruiting vine currently grown in Italy. It is опе of the 40 different species which belong to Acfinidia genus and it is very closely related to Acfinidia delicioso the mosf соmmon commercial kiwifruit. Red Passion kiwi's have а bronze skin, and golden fIesh with bright red centre."
            },
            {
                id: 5,
                title: "Mini-Kiwifruit Veyki",
                image: "/img/kiwi5.png",
                short_text:"Oval, about the size of a large hen's egg",
                description: "Actinidia Weiki is a variety created in Germany at the University of Munich. Mini kiwi Veiki is considered one of the best varieties of actinidia for industrial plantings. For successful fruiting it needs a pollinator, because This is a dioecious variety. The fruits are green, with a slight blush when ripe. The fruit size is about 3 cm. This variety has very decorative foliage: dark green, slightly glossy leaves on red roots. A fairly frost-resistant and disease-resistant variety. The fruits are eaten raw and used to make jams, jellies, and marmalade. They can also be frozen and dried."
            }
        ],
        product: {},
        btnVisible: 0,
        cart: [],
        contactFields: {
            name:'',
            company:'',
            position:'',
            city:'',
            country: '',
            phone:'',
            mail:'',
            job:'',
            details:'',
            interest:'',
            capcha:'',
        },
        cartVisible: 0,
        formSubmitted: false,
        formVisible: 1,
    },
    methods:{
        addItem: function(id){
            window.localStorage.setItem('prod',id);
        },
        getProduct: function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id){
                            this.product=this.products[i];
                        } 
                    }
                }
            }
        },
        addToCart: function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join(','));
                this.btnVisible=1;
                this.getCart();
            }
        },
        checkInCart: function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !== -1){
                this.btnVisible = 1;
            } else {
                this.btnVisible = 0;
            }
        },
        getCart: function(){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            this.cart = [];
            for(var i = 0; i < cart.length; i++){
                var productId = parseInt(cart[i]);
                var product = this.products.find(prod => prod.id === productId);
                if(product) {
                    this.cart.push(product);
                }
            }
            this.checkInCart();
        },
        removeFromCart: function(id){
            var index = this.cart.findIndex(item => item.id === id);
            if (index !== -1) {
                this.cart.splice(index, 1);
                window.localStorage.setItem('cart', this.cart.map(item => item.id).join(','));
                if (this.cart.length === 0) {
                    this.btnVisible = 0;
                }
                this.checkInCart();
            }
        },
        makeOrder: function(){
            this.formVisible=0;
            this.cartVisible=0;
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Вашу заявку відправлено. Натисніть ОК");
        }
    },
    mounted: function(){
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
        this.getCart();
    }
});
Vue.component("blog-post", {
  props: ["post"],
  template: `<div class="blog-post">
            <article slot="title">
            <h3>Selections</h3>
            </article>
             <h3>Selections</h3>
             <li>{{ post.image}}</li>
             <h4>{{post.text}}</h4>
             <p>{{post.caption}}</p>
             <button>
             Add to cart
             </button>
             `,
});

var  vm = new Vue ({
    el: "#vue",

    data: { 
        posts: [
            {id: 0, image: '', text: 'Pasta', caption:'Healthy Pasta' },
            {id: 1, image: '', text: 'Red Crab', caption:'Fresh from Alaska'},
            {id: 2, image: '', text: 'Sea Shells Mix', caption: ''},




        ]
    },
    methods: {

    }
    
});

/*template: `
    *<article slot="title">
    <h3>Selections</h3>
    <ul>
    <li class="Pasta"></li>
    <li class="Red Crab"></li>
    <li class="Breakfast Special"></li>
    <li class="Sea Shells Mix"></li>
    <li class="Ultimate Kebab"></li>
    <li class="Chicken Steak"></li>
    <li class="Filet Mignon"></li>
    <li class="Bistro Brunch"></li>
    <li class="California Crepe"></li>
    <li class="Top Burger"></li>
    <li class="Chicken Garlic Pizza"></li>
    <li class="Wok away healthy"></li>
    </ul>*/ 

   /* <article slot="title">
      <h3>Selections</h3>
    </article>; */ 
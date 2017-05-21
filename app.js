var app = new Vue({
  el: "#app",
  data: {
    active: 0,
    cats: 
    [
      'https://s-media-cache-ak0.pinimg.com/originals/76/42/79/7642799dd77844e463e55837af442310.png',
      'https://s-media-cache-ak0.pinimg.com/736x/d0/2a/4d/d02a4d6a6f49f9822b2c403981a9240c.jpg',
      'http://www.pawculture.com/uploads/cat-communication-card.jpg'
    ]
  },
  methods: {
    navigate: function(step) { 
      this.active = (this.active + step + this.cats.length) % this.cats.length;
    }
  }
})
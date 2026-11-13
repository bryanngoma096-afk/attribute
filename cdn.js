const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss'},
                { title: 'The Final Empire', author: 'Brandon Sanderson'},
                { title: 'Captain Underpants', author: 'Dav Pilkey'},
            ],

        }
    },
    methods: {
        toggleshowBooks() {
            this.showBooks = !this.showBooks
        },
        
    }
})

app.mount('#app')
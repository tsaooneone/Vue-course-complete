const app = Vue.createApp({
    data() {
        return {
            name: "oneone",
            age: 27,
            imgLink: "https://static.ctwant.com/images/cover/10/267110/md-f2e0762dcb65fe715a00dc02939d7dc2.jpg",
            imgname:"bear",
        };
    },
    methods: {
        favoriteNumber() {
            const randomNb = Math.random(); 
            return randomNb;
        }
    }
});
app.mount("#assignment");

const app = Vue.createApp({
    data() {
        return {
            UserOnKeyDown: "",
            UserEnter: "",
        };
    },
    methods: {
        showAlert() {
            alert("Show Alert!");
        },
        OnKeyDown(event) {
            this.UserOnKeyDown = event.target.value; 
        },
        useEnterKey() {
            this.UserEnter = this.UserOnKeyDown;
        },
    },
});
app.mount("#assignment");
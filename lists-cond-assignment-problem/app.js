const app = Vue.createApp({
    data() {
        return {
            enteredValue: "",
            lists: [],
            listIsVisible: true,
        };
    },
    computed: {
        buttonText () {
            return this.listIsVisible ? "Hide List" : "Show List";
        }
    },
    methods: {
        add() {
            this.lists.push(this.enteredValue);
        },
        hideOrShow() {
            this.listIsVisible = !this.listIsVisible;
        },
    },
});
app.mount("#assignment");

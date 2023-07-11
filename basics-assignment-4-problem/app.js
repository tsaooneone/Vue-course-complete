const app = Vue.createApp({
    data() {
        return {
            inputClass: "",
            paragraphIsVisble: true,
            inputBackfroundColor: '',
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === "user2",
                visble: this.paragraphIsVisble,
                hidden: !this.paragraphIsVisble,
            };
        },
    },
    methods: {
        toggleParagraphVisble() {
            this.paragraphIsVisble = !this.paragraphIsVisble;
        },
    },
});
app.mount("#assignment");

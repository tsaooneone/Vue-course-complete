const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            // console.dir(this.$refs.userText);
        },
    },
    beforeCreate() {
        console.log("beforeCreate()");
    },
    created() {
      console.log('created()');
    },
    beforeMount() {
      console.log("beforeMount()");
    },
    mounted() {
      console.log('mounted()');
    },
    beforeUpdate() {
      console.log("brforeUpdate()");
    },
    updated() {
      console.log("updated()");
    },
    beforeUnmount() {
      console.log("beforeUnmount()");
    },
    unmounted() {
      console.log("unmounted()");
    },
});

app.mount('#app');
setTimeout(function() {
  app.unmount();
},3000);

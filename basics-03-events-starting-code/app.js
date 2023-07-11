const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmeName: '',
        };
    },
    methods: {
      confirmInput() {
        this.confirmeName = this.name;
      },
        /*------ Vue ------*/
        // 在HTML 中 v-on:submit.prevent="submitForm"
        submitForm() {
            alert("submitted!");
        },
        /*------ js ------*/
        // 在HTML 中 v-on:submit="submitForm"
        // submitForm(event) {
        //   // 告訴瀏覽器不要提交表單，不需要瀏覽器的默認值
        //   // event.preventDefault();
        //   alert("submitted!");
        // },
        setName(event, lastName) {
            this.name = event.target.value + "" + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
    },
});

app.mount('#events');

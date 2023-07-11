// Vue.createApp({}).mount("#user-goal");
const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course ane learn Vue!",
            courseGoalB: "Mastre Vue and build amazing apps!",
            vueLink: "http://vuejs.org/",
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount("#user-goal");
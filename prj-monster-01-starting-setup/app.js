function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            player: 100,
            monster: 100,
            gameRound: 0,
            winner: null, //null 在 js 中被視為 false
            logMessages: [],
        };
    },
    watch: {
        player(value) {
            if (value <= 0 && this.monster <= 0) {
                // A draw
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "monster";
            }
        },
        monster(value) {
            if (value <= 0 && this.player <= 0) {
                // A draw
                this.winner = "draw";
            } else if (value <= 0) {
                // monster lost
                this.winner = "player";
            }
        },
    },
    computed: {
        monsterBarStyles() {
            if (this.monster < 0) {
                return { width: "0%" };
            }
            return {
                width: this.monster + "%",
            };
        },
        playerBarStyleas() {
            if (this.player < 0) {
                return { width: "0%" };
            }
            return {
                width: this.player + "%",
            };
        },
        mayUseSpecialAttack() {
            return this.gameRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.gameRound++;
            const attackValue = getRandomValue(5, 12);
            // this.monster = this.monster - attackValue;
            this.monster -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.player -= attackValue;
            this.addLogMessage("monster", "attack", attackValue);
        },
        specialAttackMonster() {
            this.gameRound++;
            const attackValue = getRandomValue(10, 25);
            this.monster -= attackValue;
            this.addLogMessage("monster", "attack", attackValue);    
            this.attackPlayer();
        },
        healPlayer() {
            this.gameRound++;
            const healValue = getRandomValue(8, 20);
            if (this.player + healValue > 100) {
                this.player = 100;
            } else {
                this.player += healValue;
            }
            this.addLogMessage("player", "heal", healValue);
            this.attackPlayer();
        },
        startGame() {
            this.player = 100;
            this.monster = 100;
            this.gameRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});
app.mount("#game");

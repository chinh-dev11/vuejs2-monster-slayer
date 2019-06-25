new Vue({
    el: "#app", // connect to DOM
    // KIM: all usages of data property and methods in templates get re-rendered/executed at every data property changes       
    data: { // store data to be used
        playerHealth: 100,
        monsterHealth: 100,
        isGameStarted: false,
        damage: {
            player: {
                min: 5,
                max: 12
            },
            monster: {
                min: 3,
                max: 10
            },
        },
        logs: []
    },
    // KIM: computed (cached), if being used in templates, gets executed ONLY if dependent data property changes
    computed: {}, // dependent properties - synchronous tasks
    // KIM: watch gets executed at every data property (counter1) changes - use as scarcely as possible (performance perspective)
    watch: { // execute upon data changes - asynchronous tasks
        // watchers are to be used as scarcely as possible - performance perspective
        /* playerHealth: function (damage) {
            if (damage <= 0) {
                this.endGame('player');
            }
        },
        monsterHealth: function (damage) {
            if (damage <= 0) {
                this.endGame('monster');
            }
        } */
    },
    methods: { // methods of this Vue Instance
        startNewGame: function () {
            this.isGameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(this.damage.monster.min, this.damage.monster.max);
            if (this.isGameEnded(this.monsterHealth)) {
                this.endGame('monster');
                return;
            }

            this.playerHealth -= this.calculateDamage(this.damage.player.min, this.damage.player.max);
            if (this.isGameEnded(this.playerHealth)) {
                this.endGame('player');
            }
        },
        specialAttack: function () {
            console.log('specialAttack');
        },
        heal: function () {
            console.log('heal');
        },
        giveUp: function () {
            console.log('giveUp');
        },
        addLog: function () {
            console.log('addLog');
        },
        calculateDamage: function (min, max) {
            // Math.random(): 0...1 (1 exclusive)
            // Math.floor(): largest integer less or equal to given number
            // Math.max(): largest of 0 or more numbers
            return Math.max(Math.floor(Math.random() * max), min);
        },
        isGameEnded: function (damage) {
            if (damage <= 0) {
                return true;
            }

            return false;
        },
        endGame: function (type) {
            var msg = type === 'player' ? 'You lost!' : 'You won!';
            if (confirm(msg + ' New game?')) {
                this.startNewGame();
            } else {
                this.isGameStarted = false;
            }
        }
    }
});
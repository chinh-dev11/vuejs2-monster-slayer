new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameStarted: false,
        logs: []
    },
    // KIM: computed (cached), if being used in templates, auto-executes once and gets re-executed ONLY if dependent data property changes
    computed: {}, // dependent properties
    // KIM: watch gets executed at every data property changes
    watch: {}, // execute code upon data property changes
    // KIM: methods, if being used in templates, get executed at every data property changes
    methods: { // methods of this Vue Instance
        startNewGame: function () {
            this.isGameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            // console.log('attack');
            var damageMax = 10;
            var damageMin = 3;
            // Math.random(): 0...1 (1 exclusive)
            // Math.floor(): largest integer less or equal to given number
            // Math.max(): largest of 0 or more numbers
            var damage = Math.max(Math.floor(Math.random() * damageMax), damageMin);
            this.monsterHealth -= damage;
            if (this.monsterHealth <= 0) {
                this.isGameStarted = false;
                alert('You won!');
                return;
            }

            damageMax = 12;
            damageMin = 5;
            damage = Math.max(Math.floor(Math.random() * damageMax), damageMin);
            this.playerHealth -= damage;
            if (this.playerHealth <= 0) {
                this.isGameStarted = false;
                alert('You lost!');
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
        }
    }
});
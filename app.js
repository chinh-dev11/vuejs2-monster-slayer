new Vue({
    el: "#app",
    data: {
        health: 100,
        healthMonster: 100,
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
            console.log('startNewGame');
            this.isGameStarted = true;
        },
        attack: function () {
            console.log('attack');
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
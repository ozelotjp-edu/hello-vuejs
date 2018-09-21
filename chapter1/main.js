var app = new Vue({
    el: "#app",
    data: {
        message: "Vue.js"
    },
    computed: {
        computedMessage: function () {
            return this.message + "!";
        }
    },
    created: function () {
        //
    },
    methods: {
        myMethod: function () {
            //
        }
    }
});

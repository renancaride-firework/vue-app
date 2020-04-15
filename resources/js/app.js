import Vue from 'vue';

Vue.component('coupon', {

    props: ['code'],

    template: `

        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">

    `,

    methods: {

        updateCode(code) {

            if (code === 'ALLFREE') {

                alert('This coupon is no longer valid.');

                this.$refs.input.value = code = '';

            }

            this.$emit('input', code);

        }

    }

});

new Vue({

    el: '#app',

    data: {

        code: 'FREEBIE'

    }

});

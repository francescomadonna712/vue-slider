const { createApp } = Vue;

createApp({

    data() {

        return {

            images: [
                './img/01.webp',
                './img/02.webp',
                './img/03.webp',
                './img/04.webp',
                './img/05.webp'
            ],

            counter: 0,
            runAutoSlide: true
        }

    },
    methods: {
        nextPrev(isNext) {
            if (isNext) {
                this.counter++;
            } else {
                this.counter--;
            };

            if (this.counter === this.images.length) {
                this.counter = 0;
            } else if (this.counter < 0) {
                this.counter = this.images.length - 1;
            }
        }
    },
    mounted() {
        setInterval(() => {
            if (this.runAutoSlide) this.nextPrev(true);
        }, 2000)
    }


}).mount('#app');

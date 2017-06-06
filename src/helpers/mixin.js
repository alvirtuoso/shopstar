export default {
    methods:{
        guid: function() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
        },
        scrollToTop(scrollDuration) {
            var cosParameter = window.scrollY / 2,
                scrollCount = 0,
                oldTimestamp = performance.now();
            function step (newTimestamp) {
                scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                if (scrollCount >= Math.PI) window.scrollTo(0, 0);
                if (window.scrollY === 0) return;
                window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
                oldTimestamp = newTimestamp;
                window.requestAnimationFrame(step);
            }
            window.requestAnimationFrame(step);
        },
        s4: function() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        },
        // str ex. 4.5 of 5 stars
        extractNumber: function(str){
            var regex = /[+-]?\d+(\.\d+)?/g;
            var valmatch = str.match(regex);
            if(valmatch){
                var floats = valmatch.map(function(v) { 
                    if(v && isNaN(parseFloat(v))){
                        return [0]
                    }
                    if(v){
                        return parseFloat(v); 
                    }
                });
                return floats[0];
            }
        },
        // format to currency
        formatPrice: function(n, currency) {
            if(n && currency)
                return currency +  " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        },
        ellipsisText: function(text, value){
            return text.substring(0, value) + '...';

        }
    }
}
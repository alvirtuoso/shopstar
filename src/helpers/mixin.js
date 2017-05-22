export default {
    methods:{
        guid: function() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
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
            return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }
    }
}
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
        }

    }
}
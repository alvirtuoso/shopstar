<template>
<label>{{this.aveStars}}</label>
</template>
<script>
import AmazonSvc from '../services/AmazonSvc'
    export default{
        name: 'ave-review',
        props: ['urlReview'],
        mounted(){
            AmazonSvc.getItemAveReviews(this.urlReview)
                .then(resp => { 
                    this.aveStars = resp.data 
                    })
        },
        data: function() {
            return {
                aveStars: ''  // this will contain the content of the passsword input automatically
            };
        },
    }
</script>
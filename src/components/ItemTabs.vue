<template>
    <div class="container-flush">
        <b-card>
            <b-tabs small card ref="tabs">
            <b-tab title="Reviews">
                    <h6 v-if="!hasReview"> No Review Yet</h6>
                
                <div v-if="hasReview" class="embed-responsive embed-responsive-16by9">
                  
                <iframe class="embed-responsive-item" :src="srcUrl" allowfullscreen></iframe>

                </div>

            </b-tab>
            <b-tab title="Features">
                2nd tab content
<img src="../assets/logo.png">
            </b-tab>

            </b-tabs>

        </b-card>
    </div>
</template>

<script>

 export default{
     name:'item-tabs',
     props:['item'],
     computed:{
         itemSelected: function(){
             return this.$store.state.selectedItem
         },
         srcUrl: function(){
             if(this.itemSelected && this.itemSelected.urlReview){
                 return this.itemSelected.urlReview
             }
             else{
                 return ''
             }
         },
         hasReview: function(){
             if(this.itemSelected && this.itemSelected.urlReview){
                 return true
             }
             else{
                 return false
             }
         }

     }
 }   
</script>

<style scoped>
.pleft {
    padding-left: 40px;
}
</style>
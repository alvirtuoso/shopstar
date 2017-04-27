<template>
  
 <div class="col-md-2">
    <b-badge pill variant="success" v-for="word in searchList" :key="word.id">{{word.keyword}}</b-badge>
 </div>
</template>

<script>

    export default{
        name: 'left',
        data(){
            return {
                msg: 'Hellow World of testing',
                searchList: this.searchedWords
            }
        },  
        props:['searchedWords'],     
        methods: {
            clickMe: function(e){
                this.msg = "not here";
                e.preventDefault();

            }
        }
    }
</script>

<style scoped>

</style>
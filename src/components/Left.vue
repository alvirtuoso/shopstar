<template>
  
 <div class="col-md-2">
    <div class="list-group padding-1">
        <a href="#" class="list-group-item list-group-item-action truncate-ellipsis" v-for="word in searchList" :key="word.id">
            {{word.keyword}}
        </a>
    </div>
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
            re_search: function(){
                console.log('hx');
                this.$emit('re_search')

            }
        }
    }
</script>

<style scoped>
.padding-1{
    padding-left: 1px !important;
}
.col-overflow{
    overflow-y: scroll !important; 
}

.truncate-ellipsis {
    display: table;
    table-layout: fixed;
    white-space: wrap;
}
 
.truncate-ellipsis > * {
    display: table-cell;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
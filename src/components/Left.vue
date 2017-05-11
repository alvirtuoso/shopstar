<template>

    <div class="col-md-2">
        <div class="row justify-content-center">
            <h6 v-if="searchList.length == 0">Search History</h6>
        </div>
        <div class="list-group padding-1">
            <a href="#" v-for="word in searchList" :key="word.id" @click="search(word.keyword)" class="list-group-item list-group-item-action truncate-ellipsis" >
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
                searchList: this.$store.state.keywordList
            }
        },  
        mounted(){

        },
        // props:['searchedWords'],
        methods:{
            search(keyword){
                this.$store.dispatch('FetchData', {keyword: keyword , page: 1});
                this.$store.dispatch('UpdateKeyword', keyword);
                this.$store.dispatch('SetActivePage', 1)
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
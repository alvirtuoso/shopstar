<template>
  <div class="container"
    <div class="col-md-2 col-padding">
        <div class="row justify-content-center">
            <h6 v-if="searchList.length > 0">Search History</h6>
        </div>
        <div class="list-group list-group-resize">
            <a href="#" v-for="word in searchList" :key="word.id" @click="search(word.keyword)" class="list-group-item list-group-item-action resize truncate-ellipsis" >
                {{word.keyword}}
            </a>
        </div>
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
.list-group-resize{
    padding-left: 1px !important;
    font-size: .9rem;
}
.col-padding{
    padding-left: 50px;
    padding-right: 2px;
}
.col-overflow{
    overflow-y: scroll !important; 
}

.resize{
    height: 30px;
    padding: 5px 15px;
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
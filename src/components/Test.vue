<template>

      <div class="container-fluid">
        <b-button variant="danger" size="lg" href="">
          test
        </b-button>
     <b-popover triggers="hover" placement="bottom" content="Heya!">
        <b-btn variant="primary">buttonok</b-btn>
      </b-popover>        
      </div>

</template>
<script>

export default{
    name: 'test',
    template: '#test',
    mounted(){
       
    },
    data: function(){
        return{
            adata: 'Hello Tester',
            searchInput: null
        }
    },
    methods:{
        onSelectedWord: function(){
        //Log the selected word to the console
        this.searchInput.onSelectedWord(word => console.log(`searching for ${word}...`));
        // console.log('searchInput', this.searchInput)

        }
    }
}

</script>

<style scoped>

</style>
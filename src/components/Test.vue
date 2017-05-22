<template>

      <div class="container-fluid">
        <input type="text" id="search-input"/> 
      </div>

</template>
<script>

export default{
    name: 'test',
    template: '#test',
    mounted(){
        this.searchInput = new AmazonAutocomplete('#search-input'); 
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

img{
  height: 20%;
}
.orange-color{
  background-color:#FFCA28;
  color:#000;
}
.onhover:hover{
    border-width: 6px;
    border-color: #ffcc66;
    border-style: solid;
    cursor:pointer;
}
.curso{
  cursor:pointer;
  list-style-type:none;
}
.curso:hover{
    text-decoration:underline;
    color:#ff9f1a;
  }
.title-collapse {
  font-weight: 500;
  height: 40px;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  margin-bottom: 1em;
}
.title-collapse:after {
  // content: '...';
  position: absolute;
  bottom: 0;
  right: 5px;
  padding: 0 1.2em;
  background: inherit;
}
.title-collapse span:after {
  content: '\0000a0';
  position: absolute;
  z-index: 1;

}



.search {
  display: block;
  position: relative;
  padding: 40px;
  background: #fff;
  margin: 50px;
},

/* Words container */
.ac__inner{
    background: red;
}

/* Individual word element */
.ac__word{
    margin: 0;
    padding: 5px;
},

/* Word prefix style. It’s the span containing the search keyword within the word. */
.ac__prefix{
    font-weight: bold;
},

/* Style applied to each words while navigating through the list or on hover */
.ac__word--selected, .ac__word:hover{
    background-color: #e3e3e3;
}
</style>
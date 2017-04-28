    <template id="test">
      <div id="search">
        
        <input type="text" id="search-input"/> 
      </div>
    </template>
<script>

export default{
    name: 'test',
    template: '#test',
    created(){
        
    },
    data: function(){
        return{
            adata: 'Hello Tester'
        }
    }
}

</script>

<style scoped>
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
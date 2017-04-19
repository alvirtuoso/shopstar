<template>
  
 <div class="col-md-2">

        <ul>
		  <li><a href="#">Home</a></li>
		  <li><a href="#">Responsive</a></li>
		  <li><a href="#">Layout</a></li>
		  <li><a href="#">Example</a></li>
		</ul>

 </div>
</template>

<script>

    export default{
        name: 'left',
        data(){
            return {
                msg: 'Hellow World of testing'
            }
        },
        methods: {
            clickMe: function(e){
                this.msg = "not here"
                e.preventDefault()

            }
        }
    }
</script>

<style scoped>

</style>
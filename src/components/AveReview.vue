<template>
    <h1>{{greeting}}</h1>
</template>
<script>
    export default{
        name: 'ave-review',
        props:['url'],
        created(){
            
        },
        data: function() {
            return {
                greeting: this.url,  //this will contain the content of the username input automatically
                silence: "ssshhh"  // this will contain the content of the passsword input automatically
            };
        },
    }
</script>
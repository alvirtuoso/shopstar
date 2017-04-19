<template>
  <div id="app">

    <top></top>
    
    <div class="row">
      <left></left>
      <middle></middle>
      <right></right>
    </div>

    <bottom></bottom>

  </div> 
</template>

<script>

import Top from './components/Top'
import Left from './components/Left'
import Middle from './components/Middle'
import Right from './components/Right'
import Bottom from './components/Bottom'
export default {
  name: 'app',
  components: {
    Top, Left, Middle, Right, Bottom
  }
    

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

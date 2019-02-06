<template>
  <b-container id="app">
    <div class="page-well">
      <Calculator/>
    </div>
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3 {
  text-align: center;
}

.page-well {
  border: solid 1px #c6c6c6;
  border-radius: 2px;
  padding: 1.5em;
  background-color: rgba(249, 249, 249, 0.95);
  min-height: 100vh;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #FFFFFF;
  border: 1px solid #cccccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>

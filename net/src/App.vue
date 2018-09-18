<template>
  <div id="app">
    <firstChild></firstChild>
    <secondChild></secondChild>
  </div>
</template>

<script>
  import firstChild from './components/firstChild'
  import secondChild from './components/secondChild'

  export default {
    name: 'App',
    components: {
      firstChild,
      secondChild
    }
  }
</script>

<style>

</style>

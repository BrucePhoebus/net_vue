<template>
  <div id="app">
    <mockTest></mockTest>
    <firstChild></firstChild>
    <secondChild></secondChild>
  </div>
</template>

<script>
  import mockTest from './components/mockTest'
  import firstChild from './components/firstChild'
  import secondChild from './components/secondChild'

  export default {
    name: 'App',
    components: {
      firstChild,
      secondChild,
      mockTest,
    }
  }
</script>

<style>

</style>

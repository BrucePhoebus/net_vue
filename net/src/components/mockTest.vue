<template>
  <div>
    <button type="button" @click="getTest">mock一下</button>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    methods: {
      getTest() {
        axios.get("/getTest").then(function (res) {
          console.log(res.data);
        });
      }
    }
  };

</script>

<style scoped>

</style>

<template>
  <div id="firstChild">
    <h2>firstChild组件</h2>
    <button @click="sendMsg">向组件传值</button>
  </div>
</template>

<script>
  import bus from '../assets/eventBus'

  export default {
    methods: {
      //添加一个按钮并绑定一个点击事件
      sendMsg: function () {
        bus.$emit("userDefinedEvent", "This message is from firstChild.");
      }
    },
    components: {
      bus
    }
  }
</script>

<style scoped>
  #firstChild {
    border: 1px solid #1b1f23;
    width: 250px;
    height: 250px;
    text-align: center;
    margin: 50px auto 50px auto;
  }

</style>

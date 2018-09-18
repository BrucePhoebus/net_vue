<template>
  <div id="secondChild">
    <h2>secondChild组件</h2>
    <p>从firstChild接收的字符串 参数：{{msg}}</p>
  </div>
</template>

<script>
  import bus from '../assets/eventBus'

  export default {
    data() {
      return {
        msg: '默认值'
      }
    },
    mounted() {
      var _this = this;
      bus.$on("userDefinedEvent", function (msg) {
        _this.msg = msg;
      })

    }
  }
</script>

<style scoped>
  #secondChild {
    border: 1px solid #1b1f23;
    width: 250px;
    height: 250px;
    text-align: center;
    word-break: break-word;
    margin: 50px auto 50px auto;
  }
</style>

<template>
  <div>
    <input v-model="query">
    <svg class="icon">
      <use xlink:href="#icon-search"></use>
    </svg>
  </div>
</template>

<script>
  import '../assets/font/iconfont'

  export default {
    data(){
      return {
        query: '',
        timer: null
      }
    },
    watch: {
      query(newValue){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=> {
          this.$emit('listenQuery',newValue)
        },100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/scss/variable';

  input {
    padding-right: 1.5em;
  }
  .icon {
    color: $theme-color;
    margin-left: -1.5em;
  }
</style>

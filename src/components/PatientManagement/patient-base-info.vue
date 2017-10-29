<template>
  <div class="wrap">
    <h4>病人基本情况</h4>
    <span>{{currentPatient.name}}</span>
    <span>{{currentPatient.IDCard}}</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['currentPatient'])
    }
  }
</script>

<style lang="scss" scoped>

  .wrap {
    display: flex;
    padding: .5em 1em;
    border-top: 1em solid rgb(193,193,193);
    border-bottom: 1em solid rgb(193,193,193);
    background: #fff;
  }
</style>

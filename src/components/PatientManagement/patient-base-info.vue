<template>
  <div class="wrap">
    <div class="left">
      <h4>病人基本情况</h4>
      <span>{{currentPatient.name}}</span>
      <div class="id-card">
        <svg class="icon icon-id">
          <use xlink:href="#icon-id"></use>
        </svg>
        {{currentPatient.IDCard}}
      </div>
    </div>
    <div class="right">
      <search-box @listenQuery="listenQuery"></search-box>
      <svg class="icon icon-d-down">
        <use xlink:href="#icon-d-down"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SearchBox from '../../base/search-box.vue'
  import '../../assets/font/iconfont'

  export default {
    components: {SearchBox},
    computed: {
      ...mapGetters(['currentPatient'])
    },
    methods: {
      listenQuery(v){
//        console.log(v)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
    border-top: 1em solid rgb(193,193,193);
    border-bottom: 1em solid rgb(193,193,193);
    background: rgb(243,243,243);
    .left{
      display: flex;
      align-items: center;
      >h4 {
        margin-right: 1em;
      }
      span {
        font-size: 12px;
        margin-right: 1em;
      }
      .icon-id {
        font-size: 16px;
      }
      .id-card {
        color: rgb(124,124,124);
      }
    }
    .right {
      display: flex;
      align-items: center;
      .icon-d-down{
        margin-left: .5em;
      }
    }
  }
</style>

<template>
  <div class="wrap">
    <div class="left">
      {{key}}
      <svg class="icon">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
      {{currentTab}}
    </div>
    <div class="right">
      <div class="title">恶性肿瘤防控调查管理系统</div>
      <div class="icon-group">
        <svg class="icon">
          <use xlink:href="#icon-home"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-personinfo1e"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-question"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-logout"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/font/iconfont'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['key', 'currentTab'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/scss/index';

  .wrap {
    height: 100%;
    position: relative;
    padding: .5em 1em;
    font-weight: bold;
    .left {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      color: rgb(92, 92, 92);
    }
    .right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      color: $theme-color;
      .title {
        float: left;
        padding-right: 1em;
        border-right: 1px solid #ccc;
      }
      .icon-group {
        float: left;
        line-height: 1;
        font-size: 24px;
        cursor: pointer;
        .icon:first-child {
          margin-left: 12px;
        }
        .icon:last-child {
          margin-right: 12px;
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <aside>
      <div class="img-wrap">
        <img src="./assets/shield-icon.png" alt="">
      </div>
      <tab></tab>
    </aside>
    <div class="system">
      <header>
        <sys-header></sys-header>
      </header>
      <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <!--<div class="patient-base-info-table"></div>-->
        <!--<div class="unchecked-table"></div>-->
      </main>
      <footer class="wrap clearfix">
        <div class="tooltip">提示</div>
        <div class="text">Copyright© 2018 MITI Genomics Inc,All Rights Reserved</div>
      </footer>
    </div>
  </div>
</template>

<script>
  import Tab from './components/tab.vue'
  import SysHeader from './components/sys-header.vue'

  export default {
    name: 'app',
    components: {Tab,SysHeader}
  }
</script>

<style lang="scss">
  @import './common/scss/index';

  #app {
    height: 100%;
    aside {
      float: left;
      width: 176px;
      height: 100%;
      background: $theme-color;
      .img-wrap {
        position: relative;
        padding-bottom: 80%;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 40%;
        }
      }
    }
    .system {
      height: 100%;
      margin-left: 176px;
      header {
        height: 5%;
      }
      main {
        height: 90%;
        padding: 2em;
        background: rgb(219, 219, 219);
      }
      footer {
        height: 5%;
        position: relative;
        padding: 8px 16px;
        border-top: 1px solid #000;
        .tooltip {
          display: inline-block;
          vertical-align: middle;
          color: rgb(180, 180, 180);
        }
        .text {
          position: absolute;
          top: 50%;
          right: 32px;
          transform: translateY(-50%);
          font-size: 12px;
        }
      }
    }
  }
</style>

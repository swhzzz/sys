<template>
  <div class="wrap">
    <svg class="icon" @click="toPrevListTab">
      <use xlink:href="#icon-arrow-left"></use>
    </svg>
    <ul>
      <li v-for="(item,index) in listTabs" class="list-tab"
          :class="[item === currentListTab ? 'active': '']"
          @click="handleClick(index)"
      >{{item}}
      </li>
    </ul>
    <svg class="icon" @click="toNextListTab">
      <use xlink:href="#icon-arrow-right"></use>
    </svg>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  import '../../assets/font/iconfont'

  export default {
    computed: {
      ...mapState(['listTabs', 'currentListTabIndex']),
      ...mapGetters(['currentListTab'])
    },
    methods: {
      handleClick(index) {
        this.$store.commit('switchCurrentListTabIndex', index)
      },
      toPrevListTab() {
        let nextIndex = this.currentListTabIndex - 1
        if (nextIndex < 0) {
          return
        }
        this.$store.commit('switchCurrentListTabIndex', nextIndex)
      },
      toNextListTab() {
        let nextIndex = this.currentListTabIndex + 1
        if (nextIndex === this.listTabs.length) {
          return
        }
        this.$store.commit('switchCurrentListTabIndex', nextIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/variable';

  .wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    background: $theme-color;
    .icon {
      color: #ccc;
      flex-basis: 2em;
      cursor: pointer;
    }
    ul {
      display: flex;
      justify-content: space-around;
      > li {
        color: #fff;
        padding: .75em;
        border-bottom: 2px solid $theme-color;
        cursor: pointer;
        &.active {
          background: $bg-dark;
          border-bottom: 2px solid $border-color;
        }
      }
    }
  }

</style>

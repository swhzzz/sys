<template>
  <div class="wrap">
    <div class="list">
      <span>
        <svg class="icon icon-refresh">
         <use xlink:href="#icon-refresh"></use>
        </svg>
      </span>
      <ul>
        <li v-for="(item, index) in investigation" class="tab-item"
            @click="handleClick(item,index)"
            :class="[investigationTab === item ? 'active': '']"
        >
          <div>{{item}}</div>
        </li>
      </ul>
    </div>
    <div class="table">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import '../../assets/font/iconfont.js'
  import {COMPONENTS_MAP} from '../../common/js/config'

  export default {
    computed: {
      ...mapState(['investigation', 'currentTab']),
      ...mapGetters(['investigationTab'])
    },
    methods: {
      handleClick(item,index) {
        this.$store.commit('switchInvestigationIndex', index)
        this.$router.push({
          path: `/${COMPONENTS_MAP[this.currentTab]}/${COMPONENTS_MAP[item]}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/variable';

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    overflow: scroll;
    .list {
      display: flex;
      flex: 1;
      align-items: center;
      background: rgb(243, 243, 243);
      span {
        padding: 0 .5em;
        border-right: 1px solid #ccc;
        .icon-refresh {
          color: $theme-color;
          cursor: pointer;
        }
      }
      ul {
        display: flex;
        .tab-item {
          padding: .5em 0;
          color: rgb(84, 84, 84);
          cursor: pointer;
          div {
            padding: 0 .5em;
            font-weight: bold;
            border-right: 1px solid #ccc;
          }
          &.active {
            color: $theme-color;
            border-bottom: 1px solid $theme-color;
          }
        }
      }
    }
    .table {
      width: 100%;
      background: #fff;
    }
  }
</style>

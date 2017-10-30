<template>
  <div>
    <ul>
      <li v-for="(subTab,key) in tabs" class="tab-item">
        <h4>{{key}}
        <svg class="icon icon-down">
          <use xlink:href="#icon-down"></use>
        </svg>
        </h4>
        <ul>
          <li v-for="item in subTab" class="subTab-item"
              :class="[currentTab === item? 'active': '' ]"
              @click="handleClick(key,item)"
          >{{item}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {COMPONENTS_MAP} from '../common/js/config'

  export default {
    computed: {
      ...mapState(['tabs']),
      currentTab: {
        get () {
          return this.$store.state.currentTab
        },
        set (item) {
          this.$store.commit('switchCurrentTab',item)
        }
      }
    },
    methods: {
      animate(){

      },
      handleClick(key,item) {
        this.currentTab = item
        this.$store.commit('switchKey',key)
        this.$router.push({
          path: `/${COMPONENTS_MAP[item]}`
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import '../common/scss/variable';

  .tab-item {
    font-size: 14px;
    color: rgb(128, 161, 182);
    cursor: pointer;
    > h4 {
      position: relative;
      padding: 8px 0;
      text-align: center;
      color: rgb(177,198,210);
      background: rgb(7, 72, 111);
      .icon-down {
        position: absolute;
        right: .5em;
        vertical-align: middle;
        font-size: 20px;
        transition: all .5s;
      }
    }
    .subTab-item {
      padding: 8px 0;
      text-align: center;
      border-left: 2px solid rgb(13, 96, 149);
      border-top: 1px solid rgb(128, 161, 182);
      background: rgb(13, 96, 149);
    }
    .active {
      color: #fff;
      background: $bg-dark;
      border-left: 2px solid $border-color;
    }
  }
</style>

<template>
  <div class="wrap">
    <h4>最近录入待审核表单</h4>
    <ul >
      <li v-for="item in patients" class="patient">
        <div>
          <span>{{item.name}}</span>
          <small>{{item.tableID}}</small>
          <span>{{item.tableType}}</span>
        </div>
        <div>
          <small>{{item.IDCard}}</small>
          <small>{{item.time}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['patients'])
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    >h4 {
      padding: .5em 1em;
      background: rgb(243,243,243);
    }
    ul{
      >li {
        padding: .5em 1em;
        background: #fff;
        margin-top: .25em;
        span {
          font-size: 14px;
        }
        small {
          color: rgb(197,197,197);
        }
      }
    }
  }
</style>

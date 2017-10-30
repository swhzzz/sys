<template>
  <div class="wrap">
    <h4>最近录入待审核表单</h4>
    <ul>
      <li v-for="item in patients" class="patient">
        <div class="left">
          <div class="name-ct">
            <span>{{item.name}}</span>
            <svg class="icon">
              <use xlink:href="#icon-id"></use>
            </svg>
          </div>
          <div class="id-ct">
            <small>{{item.tableID}}</small>
            <small>{{item.IDCard}}</small>
          </div>
        </div>
        <div class="right">
          <span>{{item.tableType}}</span>
          <small>{{item.time}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import '../../assets/font/iconfont'

  export default {
    computed: {
      ...mapState(['patients'])
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    > h4 {
      padding: .5em 1em;
      background: rgb(243, 243, 243);
    }
    ul {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5em 1em;
        margin-top: .5em;
        background: #fff;
        span {
          font-size: 12px;
        }
        small {
          font-size: 8px;
          color: rgb(197, 197, 197);
        }
        .left {
          display: flex;
          align-items: center;
          .name-ct {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 64px;
            justify-content: flex-end;
            margin-right: .5em;
          }
        }
        .right {
          display: flex;
          flex-basis: 160px;
          flex-direction: column;
          span, small {
            text-align: right;
          }
        }
      }
    }
  }
</style>

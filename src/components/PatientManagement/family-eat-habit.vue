<template>
  <div class="wrap">
    <div class="B">
      <div class="question">
        <strong>B1</strong>
        <span>您独自一人生活吗？</span>
      </div>
      <div class="answer">
        <svg class="icon icon-i">
          <use xlink:href="#icon-i"></use>
        </svg>
        <label><input name="liveAlone" type="radio" value="true">是(跳过此部分，直接点击下一页)</label>
        <label><input name="liveAlone" type="radio" value="false" checked>否</label>
      </div>
    </div>
    <div class="B">
      <div class="question">
        <strong>B2</strong>
        <span>除您自己外，您家中有几位人与您共同居住？</span>
      </div>
      <div class="answer">
        <svg class="icon">
          <use xlink:href="#icon-gou-copy"></use>
        </svg>
        <span>成年人：
        <el-input-number v-model="adults"
                         controls-position="right"
                         size="small"
                         :min="0"
                         @change="handleChange"
        ></el-input-number> 位</span>
        <span>未成年人：
        <el-input-number v-model="childs"
                         controls-position="right"
                         size="small"
                         @change="handleChange"
                         :min="0"
        ></el-input-number> 位</span>
      </div>
    </div>
    <div class="B">
      <div class="question">
        <strong>B3</strong>
        <span>家中成员下列行为的次数如何？(健康食品：新鲜/天然的动植物回踩，未经腌制、烟熏等方式加工处理)</span>
      </div>
      <div class="answer">
        <svg class="icon icon-cha">
          <use xlink:href="#icon-cha"></use>
        </svg>
        <div class="table-ct">
          <BaseTable :kinds="kinds"></BaseTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/font/iconfont'
  import BaseTable from '../../base/base-table.vue'

  export default {
    data() {
      return {
        adults: 0,
        childs: 0,
        kinds: ['对你吃健康食品进行赞美', '对你吃不健康的食品进行批评', '鼓励你多吃蔬菜', '鼓励你多吃水果',
          '和你谈论食物及其营养', '带健康食品回家给你吃', '带水果回家给你吃', '带蔬菜回家给你吃']
      }
    },
    components: {BaseTable}
  }
</script>

<style lang="scss" scoped>
  .wrap {
    display: block;
    height: 448px;
    overflow: scroll;
    padding: 1em;
    color: rgb(83, 83, 83);
    .B {
      span {
        margin-left: .5em;
      }
      label {
        margin-left: .5em;
      }
      .question, .answer {
        margin-top: .5em;
        margin-bottom: .5em;
      }
      &:last-child .answer {
        display: flex;
        .icon-cha {
          margin-right: 1em;
        }
        .table-ct{
          /*flex: 1;*/
          width: 100%;
        }
      }
    }
  }
</style>

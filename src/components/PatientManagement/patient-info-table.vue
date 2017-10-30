<template>
  <div>
    <list-tab></list-tab>
    <patient-base-info></patient-base-info>
    <patient-table></patient-table>
    <div class="btn-group">
      <div class="left">
        <div class="btn prevBtn">
          <svg class="icon">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
          上一项
        </div>
        <div class="btn nextBtn">
          下一项
          <svg class="icon">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
      <div class="right">
        <div class="btn saveBtn">
          <svg class="icon">
            <use xlink:href="#icon-zancun"></use>
          </svg>
          暂存数据
        </div>
        <div class="btn submitBtn">
          <svg class="icon">
            <use xlink:href="#icon-save_blue"></use>
          </svg>
          保存递交
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListTab from './list-tab.vue'
  import PatientBaseInfo from './patient-base-info.vue'
  import PatientTable from './patient-table.vue'
  import '../../assets/font/iconfont'

  export default {
    components: {ListTab, PatientBaseInfo, PatientTable}
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/variable';

  .btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    .btn {
      color: #fff;
      cursor: pointer;
    }
    .left {
      display: flex;
      .prevBtn, .nextBtn {
        padding: .5em 1em;
        background: rgb(128, 128, 128);
      }
      .prevBtn {
        border-right: 1px solid rgb(145, 145, 145);
      }
    }
    .right {
      display: flex;
      .saveBtn, .submitBtn {
        padding: .5em 1.5em;
        background: $theme-color;
      }
      .saveBtn {
        margin-right: 1em;
      }
    }
  }
</style>

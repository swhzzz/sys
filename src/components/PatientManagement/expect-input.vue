<template>
  <div class="expect-input">
    <latest-table class="latest-table"></latest-table>
    <patient-info-table class="patient-info-table"></patient-info-table>
  </div>
</template>

<script>
  import PatientInfoTable from './patient-info-table.vue'
  import LatestTable from './latest-table.vue'

  export default {
    components: {PatientInfoTable, LatestTable}
  }
</script>

<style lang="scss" scoped>
  .expect-input {
    .patient-info-table {
      margin-right: 352px;
    }
    .latest-table {
      float: right;
      width: 320px;
    }
  }
</style>

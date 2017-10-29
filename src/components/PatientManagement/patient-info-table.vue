<template>
  <div>
    <list-tab></list-tab>
    <patient-base-info></patient-base-info>
  </div>
</template>

<script>
  import ListTab from './list-tab.vue'
  import PatientBaseInfo from './patient-base-info.vue'

  export default {
    components: {ListTab,PatientBaseInfo}
  }
</script>

<style lang="scss" scoped>

</style>

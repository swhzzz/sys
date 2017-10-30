<template>
  <div>
    <table>
      <tr>
        <th>频次</th>
        <th>经常</th>
        <th>有时</th>
        <th>很少</th>
        <th>从没</th>
      </tr>
      <tr v-for="(kind,index) in kinds">
        <td>{{kind}}</td>
        <td width="60"><input type="radio" :name="index"></td>
        <td width="60"><input type="radio" :name="index"></td>
        <td width="60"><input type="radio" :name="index"></td>
        <td width="60"><input type="radio" :name="index"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      kinds: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    font-size: 14px;
    text-align: center;
    th, td {
      color: rgb(83,83,83);
      border: 1px solid #ccc;
      padding: .5em 1em;
    }
    th{
      background: rgb(243,243,243);
    }
    td:first-of-type {
      width: 70%;
      text-align: left;
    }
  }
</style>

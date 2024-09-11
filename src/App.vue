<script setup>
import Grid from './components/grid.vue';
//import dealData from './data/deals_1.json';
//import dealData from './data/deals_2.json';
import dealData from './data/deals_3.json';
import taskPane from './components/taskPane.vue';
import searchForm from './components/searchForm.vue';
import { ref, computed } from 'vue';
import { EventBus } from './components//messageBus.js';

const gridColumns = Object.keys(dealData[0]);
const gridData = dealData;
const messageData = computed(() => EventBus.messageData || {});

</script>

<template>
  <div class="header">
    <h2>Reorg Frontend Assessment for Java Imhoff</h2>
  </div>
  <searchForm />
  <div class="gridContainer">
    <Grid
      :data="gridData"
      :columns="gridColumns"
      :filter-key="messageData.searchText"
    ></Grid>
    <taskPane />
  </div>
</template>

<style>
.header {
  background-color: rgba(51, 73, 104);
  color: white;
}

.gridContainer {
  max-width: 1200px;
  max-height: 600px;
  overflow: auto;
  text-align: left;
}
</style>

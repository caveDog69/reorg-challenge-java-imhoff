<script setup>
import Grid from './components/grid.vue';
import dealData from './data/deals_1.json';
import taskPane from './components/taskPane.vue';
import searchForm from './components/searchForm.vue';
import { ref, computed } from 'vue';
import { EventBus } from './components//messageBus.js';

const gridColumns = Object.keys(dealData[0]);
const gridData = dealData;
const messageData = computed(() => EventBus.messageData || {});
</script>

<template>
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
.gridContainer {
  max-width: 1200px;
  max-height: 600px;
  overflow: auto;
  text-align: left;
}
</style>

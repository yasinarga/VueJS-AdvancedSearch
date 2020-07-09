<template>
  <div class="search">
    <div class="d-flex justify-content-between">
      <h3>Guests</h3>
      <button class="btn btn-outline-info" @click="clickAdvancedSearchButton" >Advanced Search</button>
    </div>
    <div class="grid">
      <div v-for="(item, index) in arr.slice(0, arrLimit)" v-bind:key="index">
        <input-component v-if="item.type === 'text'" v-bind:input="item" v-bind:index="index" v-on:sendData="updateData"></input-component>
        <select-component v-if="item.type === 'select'" v-bind:select-data="item" v-bind:index="index" v-on:sendData="updateData"></select-component>
        <date-component v-if="item.type ==='date'" v-bind:date="item"></date-component>
      </div>
    </div>
    <div class="actionButtons">
      <button class="btn btn-outline-info" @click="clickClearButton">Clear</button>
      <button class="btn btn-outline-info" @click="clickSearchButton">Search</button>
    </div>
    <div v-if="showSearch">
      <ul>
        <li v-for="(item,index) in arr.slice(0 , arrLimit)" :key="index">
          {{item.name}} - {{item.value}}
        </li>
      </ul>
    </div>
  </div>

</template>


<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import SelectComponent from "@/views/select.vue";
import DateComponent from "@/views/date.vue";
import InputComponent from "@/views/input-comp.vue";
import data from '../assets/filters.json';


export default {
  name: 'Home',
  components: {
    DateComponent, SelectComponent, InputComponent
  },
  data() {
    return {
      arr : data,
      arrLimit : 5,
      showSearch : false,
      searchParams: []
    }
  },
  computed(){
    this.arr.forEach( (item, index) => {
      item.value = null;
    })
  },
  methods:{
    clickAdvancedSearchButton(){
      this.arrLimit = this.arrLimit === 5 ? this.arr.length : 5
    },
    clickSearchButton(){
      this.showSearch = true;
    },
    clickClearButton(){
      this.showSearch = false;
      this.arr.forEach( item => {
        item.value = null;
      })
    },
    updateData(index , event){
      this.arr[index].value = event;
    }
  }
}
</script>

<style scoped lang="scss">
  .search{
    padding: 2rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(5 ,1fr);
      grid-column-gap: 10px;
      div > label  {
        width: 100%;
        :first-child {
          margin-top: 10px;
        }
      }
    }
    .actionButtons{
      text-align: right;
      * {
        margin-left: 10px;
      }
    }
  }
</style>

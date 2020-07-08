<template>
  <div class="search">
    <div class="d-flex justify-content-between">
      <h3>Guests</h3>
      <button class="btn btn-outline-info" >Advanced Search</button>
    </div>
    <div class="grid">
      <div v-for="(item, index) in arr.slice(0, arrLimit)" v-bind:key="index">
        <input-component v-if="item.type === 'text'" :input="item"></input-component>
        <select-component v-if="item.type === 'select'" :select-data="item"></select-component>
        <date-component v-if="item.type ==='date'" :date="item"></date-component>
      </div>
    </div>
    <div class="actionButtons">
      <button class="btn btn-outline-info">Clear</button>
      <button class="btn btn-outline-info">Search</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SelectComponent from "@/views/select.vue";
import DateComponent from "@/views/date.vue";
import InputComponent from "@/views/input-comp.vue";
import data from '../assets/filters.json';
import axios from 'axios'


@Component({
  components: {DateComponent, SelectComponent, InputComponent },
  data() {
     return {
       arr : data,
       arrLimit : 5
     }
  },
  created(){
    data.forEach( (item, index) => {
      item.value = null;
    })
  },
  mounted(){

    axios.get('localhost:8080/filters.json',{baseURL: window.location.origin}).then(resp =>console.log(resp))

  },
  methods:{
    clickButton(value){
      console.log(value);
    }
  }

})
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

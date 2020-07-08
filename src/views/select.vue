<template>
    <label>
        {{selectData.title}}
        <select v-model="selectData.value" :name="selectData.name" class="form-control">
            <option v-for="(item,index) in selectData.options" :key="index" :value="item.value">{{item.text}}</option>
        </select>
    </label>
</template>

<script>
    export default {
        name: "select-component",
        props:{
            selectData: {}
        },
        methods: {
            deneme(){
                console.log(this.props)
            }
        }
    }
</script>

<style scoped>

</style>

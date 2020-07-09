<template>
    <label>
        {{selectData.title}}
        <select v-model="selectData.value" @change="sendData" :name="selectData.name" class="form-control">
            <option v-for="(item,index) in selectData.options" :key="index" :value="item.value">{{item.text}}</option>
        </select>
    </label>
</template>

<script>
    export default {
        name: "select-component",
        props:{
            selectData: {},
            index : {}
        },
        methods: {
            sendData :function () {
                this.$emit('sendData', this.index, this.selectData.value);
            },
        }
    }
</script>

<style scoped>

</style>

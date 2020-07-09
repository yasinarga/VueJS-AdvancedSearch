<template>
    <label>
        {{input.title}}
        <input type="text" :name="input.name" @keyup="sendData" class="form-control" :placeholder="input.name" v-model="input.value">
    </label>
</template>

<script>
    export default {
        name: 'input-component',
        props:{
            input :{},
            index : {}
        },
        data() {
            return {
                inputData : ''
            }
        },
        methods :{
            sendData :function () {
                this.$emit('sendData', this.index, this.input.value);
            },
        }


    }
</script>

<style scoped>

</style>

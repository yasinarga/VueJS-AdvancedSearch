<template>
    <label>
        {{input.title}}
        <input type="text" :name="input.name" v-on:change="sendData" class="form-control" :placeholder="input.name" v-model="input.value">
    </label>
</template>

<script>
    export default {
        name: 'input-component',
        props:{
            input :{}
        },
        data() {
            return {
                inputData : ''
            }
        },
        methods :{
            sendData (){
                this.$emit( )
            }
        }

    }
</script>

<style scoped>

</style>

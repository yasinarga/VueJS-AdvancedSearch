<template>
    <label>
        {{date.title}}
        <input type="date" :name="date.name" v-model="date.value" class="form-control">
    </label>


</template>

<script>
    export default {
        name: "date-component",
        props: {
            date :{}
        }
    }
</script>

<style scoped>

</style>

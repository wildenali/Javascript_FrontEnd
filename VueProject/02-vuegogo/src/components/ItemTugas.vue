<template>
    <div>
        <input class="form-check-input" onclick="" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label item" v-bind:class="{'item-completed':tugasApa.isDone}" for="defaultCheck1">
        {{ tugasApa.nama }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'ItemTugas',
    props: ["tugasApa"]
};
</script>

<style scoped>

</style>
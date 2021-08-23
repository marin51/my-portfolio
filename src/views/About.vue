<template>
    <b-card  bg-variant="secondary" class="rounded-0" text-variant="white">
        <b-card-text class="about-description">
            {{ getDescription() }}
        </b-card-text>
    </b-card>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    @Component
    export default class About extends Vue {
        getDescription(){
            return this.$store.getters.getDescription ? this.$store.getters.getDescription : '';
        }
    }
</script>

<style scoped>

</style>

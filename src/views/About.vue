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
        /** Get description from store and display it. */
        private getDescription(){
            return this.$store.getters.getDescription;
        }
    }
</script>

<style scoped>

</style>

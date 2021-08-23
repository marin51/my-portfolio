<template>
    <b-card :title="name" style="width: 100%;" class="mb-3">
        <b-card-text>
           {{ description }}
        </b-card-text>
        <b-button class="delete-button" variant="danger" @click="deleteClicked()">Delete Project</b-button>
    </b-card>
</template>

<script lang="ts">
    import {Component, Prop,  Vue} from 'vue-property-decorator';
    @Component({})
    /**
     * Represents a project card.
     * @prop {id} index - The number in projects array.
     * @prop {string} name - The name of a project.
     * @prop {string} description - The description of a project.
     */
    export default class ProjectCard extends Vue {
        @Prop({default: 0}) private index!: number;
        @Prop({default: ''}) private name!: string;
        @Prop({default: ''}) private description!: string;
        /** This method emits the index of item for deletion to the parent view which handle the delete operation. */
        public deleteClicked(){
            this.$emit('delete',this.index)
        }
    }
</script>

<style lang="scss" scoped>

</style>

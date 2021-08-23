<template>
    <div class="home">
        <!--    search bar-->
        <div class="options-bar">
            <b-form-input class="input" v-model="name" :state="isNameValid()" placeholder="Enter the project name"/>
            <b-form-input class="input" v-model="description" :state="isDescriptionValid()"
                          placeholder="Enter the project description"/>
            <b-button class="submit-button"
                      variant="primary"
                      :disabled="!isNameValid() || !isDescriptionValid()"
                      @click="addProject">Add project
            </b-button>
            <b-form-input class="input" v-model="searchCriteria" placeholder="Search here"/>
            <b-form-invalid-feedback v-show="name.length > 0 && name.length < 6">
                The project name needs to be at least 5 letters
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-show="description.length > 0 && description.length < 11">
                The project description needs to be at least 10 letters
            </b-form-invalid-feedback>
        </div>
        <div class="project-list">
            <project-card v-for="(project,index) in getProjects"
                          :name="project.name"
                          :description="project.description"
                          :key="index"
                          :index="index"
                          class="project-card"
                          @delete="deleteProject"/>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ProjectCard from "@/components/ProjectCard.vue";

    @Component({
        components: {
            ProjectCard
        },
    })
    export default class Home extends Vue {
        /**
         * component data.
         * @name is the name of the new project
         * @description is the description of the new project
         * @searchCriteria is the text on which the results are filtered
         */
        private name: string = '';
        private description: string = '';
        private searchCriteria: string = '';

        /** This is a store getter which watch the projects list. */
        get getProjects() {
            if (!this.searchCriteria.length) {
                return this.$store.getters.getProjects
            } else {
                return this.$store.getters.getProjects.filter(p => p.name.includes(this.searchCriteria) || p.description.includes(this.searchCriteria));
            }
        }

        /** This method dispatch action to the vue store for deletion an element from project list. */
        private deleteProject(index: number) {
            this.$store.dispatch('deleteProject', index);
        }

        /** This method validate new project name. */
        private isNameValid() {
            return this.name.length >= 5;
        }

        /** This method validate new project description. */
        private isDescriptionValid() {
            return this.description.length >= 10;
        }

        /** This method add new project to store at the beginning of the list and clear name and description. */
        private addProject() {
            this.$store.dispatch('addProject', {
                name: this.name,
                description: this.description
            });
            this.name = '';
            this.description = '';
        }

    }
</script>
<style lang="scss">

    .project-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    .options-bar {
        padding: 1rem 0;

        .input {
            display: inline-block;
            max-width: 30%;
            margin-right: 0.5rem;
        }

        .submit-button {
            margin-left: 0.5rem;
        }
    }

    //make inputs 100% for smaller screens
    @media screen and (max-width: 1100px) {
        .options-bar{
            .input {
                max-width: 100%;
            }
            .submit-button{
                margin: 0.5rem 0;
            }
        }

    }
</style>

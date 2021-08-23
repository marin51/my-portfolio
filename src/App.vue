<template>
    <div id="app">
        <div class="navigation">
            <div class="wrapper">
                <b-card bg-variant="secondary" class="rounded-0" text-variant="white">
                    <h4 class="app-title"> {{ getTitle }} </h4>
                    <b-card-text class="app-sub-title">
                        {{ getSubTitle }}
                    </b-card-text>
                </b-card>
                <b-nav>
                    <b-nav-item to="Home" active-class="active">Home</b-nav-item>
                    <b-nav-item to="About" active-class="active">About</b-nav-item>
                </b-nav>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {},
        computed:{
            getTitle(){
                return this.$store.getters.getAppTitle
            },
            getSubTitle(){
                return this.$store.getters.getAppSubTitle
            }
        },
        mounted() {
            this.$store.dispatch('fetchProjects');
            this.$store.dispatch('fetchAbout');
        }
    }
</script>
<style lang="scss">
    #app {
        padding: 0 10%;
    }

    .navigation {
        display: flex;
        justify-content: center;

        .wrapper {
            width: 100%;
            padding-top: 2rem;
        }
    }
</style>

<template>
    <div id="app">
        <div class="navigation">
            <div class="wrapper">
                <b-card title="My portfolio" bg-variant="secondary" class="rounded-0" text-variant="white">
                    <b-card-text>
                        Welcome to my site.
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
        mounted() {
            this.$store.dispatch('fetchProjects');
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

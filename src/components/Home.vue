<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop({default: 'My Portfolio'}) private msg!: string;
}
</script>

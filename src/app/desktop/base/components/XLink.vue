<template>
  <a v-if="isElink" :href="to" :target="target">
    <slot></slot>
  </a>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'x-link',
  props: ['to', 'target'],
  computed: {
    isElink () {
      return typeof this.to === 'string' && this.to.match(/^((http(s)?|ftp):\/\/)|javascript:/)
    }
  }
}
</script>


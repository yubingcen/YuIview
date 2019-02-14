<template>
  <Layout>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </Layout>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Layout from '@base/layout/Layout'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Layout
  }
}
</script>

<style>
</style>

<template>
    <div>
        <lg-head></lg-head>
        <div class="container">
            <router-view></router-view>
        </div>
        <lg-footer></lg-footer>
    </div>
</template>

<script>
import head from '@/components/head'
import footer from '@/components/footer'
export default {
  components: {
    'lg-head':head,
    'lg-footer':footer,
  },
}
</script>
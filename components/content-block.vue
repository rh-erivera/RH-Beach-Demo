<template>
  <div class="flex flex-wrap">
    <div class="flex flex-wrap pb-32">
      <div class="lg-img w-full md:w-1/2">
        <a :href="content.exploreLinkRight"><img :src="content.lgImgLeft" :alt="content.lgImgLeftAlt"></a>
      </div>
      <div class="flex flex-col justify-end py-8 md:pb-0 md:pl-16 w-full md:w-1/2">
        <a class="header pb-4 w-3/4" :href="content.exploreLinkRight"><img :src="content.rightHeader" :style="content.headerWidthRight" :alt="content.rightHeaderAlt"></a>
        <a class="copy w-3/4" :href="content.exploreLinkRight"><p v-html="content.copyRight" /></a>
        <a class="cta" :href="content.exploreLinkRight">EXPLORE &#8594;</a><br>
        <a class="w-3/5 sm-img" :href="content.exploreLinkRight"><img :src="content.smImgRight" :alt="content.smImgRightAlt"></a>
      </div>
    </div>
    <div class="flex flex-wrap pb-32">
      <div class="flex flex-col justify-end text-right py-8 md:pb-0 md:pr-16 w-full md:w-1/2">
        <a class="header pb-4 w-3/4 margin-left-25" :href="content.exploreLinkLeft"><img :src="content.leftHeader" :style="content.headerWidthLeft" :alt="content.leftHeaderAlt"></a>
        <a class="copy w-3/4 margin-left-25" :href="content.exploreLinkLeft"><p v-html="content.copyLeft" /></a>
        <a class="cta" :href="content.exploreLinkLeft">EXPLORE &#8594;</a><br>
        <a class="w-3/5 margin-left-40 sm-img" :href="content.exploreLinkLeft"><img :src="content.smImgLeft" :alt="content.smImgLeftAlt"></a>
      </div>
      <div class="lg-img w-full pb-8 md:pb-0 md:w-1/2">
        <a :href="content.exploreLinkLeft"><img :src="content.lgImgRight" :alt="content.lgImgRightAlt"></a>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      ScrollReveal({ reset: true, duration: 1500 })
      ScrollReveal().reveal('.lg-img')
      ScrollReveal().reveal('.header')
      ScrollReveal().reveal('.copy')
      ScrollReveal().reveal('.cta')
      ScrollReveal().reveal('.sm-img')
      ScrollReveal().reveal('.lrg-img-right')
      ScrollReveal().reveal('.lrg-img-left')
    })
  }
}
</script>

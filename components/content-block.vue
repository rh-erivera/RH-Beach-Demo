<template>
  <div class="content-block">
    <div class="med-img w-full md:w-1/2">
      <a :href="content.exploreLinkRight"><img :src="content.medImgLeft" :alt="content.medImgLeftAlt"></a>
    </div>
    <div class="content-copy-right py-8 md:pb-0 md:pl-12 w-full md:w-1/2">
      <a class="header pb-4 w-3/4" :href="content.exploreLinkRight"><img :src="content.rightHeader" :alt="content.rightHeaderAlt"></a>
      <a class="copy w-3/4" :href="content.exploreLinkRight"><p v-text="content.copyRight" /></a>
      <a class="cta" :href="content.exploreLinkRight">EXPLORE &#8594;</a><br>
      <a class="w-3/5 sm-img" :href="content.exploreLinkRight"><img :src="content.smImgRight" :alt="content.smImgRightAlt"></a>
    </div>
    <div class="md:w-4/5 md:mt-12 pb-20 lrg-img-right">
      <a :href="content.exploreLinkRight"><img :src="content.lgImgRight" :alt="content.lgImgRightAlt"></a>
    </div>
    <div class="content-copy-left text-right py-8 md:pb-0 md:pr-12 w-full md:w-1/2">
      <a class="header pb-4 w-3/4 margin-left-25" :href="content.exploreLinkLeft"><img :src="content.leftHeader" :alt="content.leftHeaderAlt"></a>
      <a class="copy w-3/4 margin-left-25" :href="content.exploreLinkLeft"><p v-text="content.copyLeft" /></a>
      <a class="cta" :href="content.exploreLinkLeft">EXPLORE &#8594;</a><br>
      <a class="w-3/5 margin-left-40 sm-img" :href="content.exploreLinkLeft"><img :src="content.smImgLeft" :alt="content.smImgLeftAlt"></a>
    </div>
    <div class="med-img w-full pb-8 md:pb-0 md:w-1/2">
      <a :href="content.exploreLinkLeft"><img :src="content.medImgRight" :alt="content.medImgRightAlt"></a>
    </div>
    <div class="md:w-4/5 md:mt-12 pb-20 lrg-img-left">
      <a :href="content.exploreLinkLeft"><img :src="content.lgImgLeft" :alt="content.lgImgLeftAlt"></a>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import imagesLoaded from 'imagesloaded'

export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Scroll Reveal Constructor
    imagesLoaded( document.querySelector('img'), function( instance ) {
      ScrollReveal({ reset: true, duration: 1500 })
      ScrollReveal().reveal('.med-img')
      ScrollReveal().reveal('.header')
      ScrollReveal().reveal('.copy')
      ScrollReveal().reveal('.cta')
      ScrollReveal().reveal('.sm-img')
      ScrollReveal().reveal('.lrg-img-right')
      ScrollReveal().reveal('.lrg-img-left')
    })
    // imgLoad.on( 'always', function( instance ) {
    //   ScrollReveal({ reset: true, duration: 1500 })
    //   ScrollReveal().reveal('.med-img')
    //   ScrollReveal().reveal('.header')
    //   ScrollReveal().reveal('.copy')
    //   ScrollReveal().reveal('.cta')
    //   ScrollReveal().reveal('.sm-img')
    //   ScrollReveal().reveal('.lrg-img-right')
    //   ScrollReveal().reveal('.lrg-img-left')
    // })
  }
}
</script>

<style>
.content-block {
  @apply flex flex-wrap
}
.content-copy-right, .content-copy-left {
  @apply flex flex-col justify-end
}
.cta {
  @apply py-2 no-underline
}
</style>

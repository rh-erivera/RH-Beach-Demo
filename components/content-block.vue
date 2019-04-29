<template>
  <div class="content-block">
    <div class="med-img w-full md:w-1/2">
      <img :src="content.medImgLeft" :alt="content.medImgLeftAlt">
    </div>
    <div class="content-copy-right py-8 md:pb-0 md:pl-12 w-full md:w-1/2">
      <img class="pb-4 w-3/4" :src="content.rightHeader" :alt="content.rightHeaderAlt">
      <p class="copy" v-text="content.copyRight" />
      <a class="cta" :href="content.exploreLinkRight">EXPLORE &#8594;</a><br>
      <img class="w-3/5" :src="content.smImgRight" :alt="content.smImgRightAlt">
    </div>
    <div class="md:w-4/5 md:mt-12 pb-20 lrg-img-right">
      <img :src="content.lgImgRight" :alt="content.lgImgRightAlt">
    </div>
    <div class="content-copy-left text-right py-8 md:pb-0 md:pr-12 w-full md:w-1/2">
      <img class="pb-4 w-3/4 margin-left-25" :src="content.leftHeader" :alt="content.leftHeaderAlt">
      <p class="copy" v-text="content.copyLeft" />
      <a class="cta" :href="content.exploreLinkLeft">EXPLORE &#8594;</a><br>
      <img class="w-3/5 margin-left-40" :src="content.smImgLeft" :alt="content.smImgLeftAlt">
    </div>
    <div class="med-img w-full pb-8 md:pb-0 md:w-1/2">
      <img :src="content.medImgRight" :alt="content.medImgRightAlt">
    </div>
    <div class="md:w-4/5 md:mt-12 pb-20 lrg-img-left">
      <img :src="content.lgImgLeft" :alt="content.lgImgLeftAlt">
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
    // Scroll Reveal Constructor
    ScrollReveal({ reset: true, duration: 1500 })
    ScrollReveal().reveal('.med-img')
    ScrollReveal().reveal('.content-copy-right')
    ScrollReveal().reveal('.content-copy-left')
    ScrollReveal().reveal('.lrg-img-right')
    ScrollReveal().reveal('.lrg-img-left')
    // Scroll Reveal Function calls
    // block1MedImgLeft()
    // block1ContentCopyRight()
    // block1LrgImgRight()
    // Scroll Reveal Funtions
    // function block1MedImgLeft() {
    //   ScrollReveal().reveal('#block1-medImgLeft', { origin: 'bottom',
    //     afterReveal: function () {
    //       ScrollReveal().reveal('#block1-medImgLeft', { origin: 'top',
    //         afterReveal: block1MedImgLeft
    //       })
    //     }
    //   })
    // }
    // function block1ContentCopyRight() {
    //   ScrollReveal().reveal('#block1-contentCopyRight', { origin: 'bottom',
    //     afterReveal: function () {
    //       ScrollReveal().reveal('#block1-contentCopyRight', { origin: 'top',
    //         afterReveal: block1ContentCopyRight
    //       })
    //     }
    //   })
    // }
    // function block1LrgImgRight() {
    //   ScrollReveal().reveal('#block1-lrgImgRight', { origin: 'bottom',
    //     afterReveal: function () {
    //       ScrollReveal().reveal('#block1-lrgImgRight', { origin: 'top',
    //         afterReveal: block1LrgImgRight
    //       })
    //     }
    //   })
    // }
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

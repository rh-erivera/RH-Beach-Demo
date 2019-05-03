<template>
  <div id="root">
    <div class="hero fadeIn relative">
      <video loop autoplay muted>
        <source src="https://media.restorationhardware.com/is/content/rhis/BH_Hero_Video_v2" type="video/mp4">
      </video>
      <div class="absolute logo">
        <img src="https://media.restorationhardware.com/is/content/rhis/beach_house/RH_Beach_Logo.svg" alt="RH Beach Logo">
      </div>
      <div class="text-center absolute hero-cta w-full">
        <a class="button p-6" href="https://intb-www.restorationhardware.com/content/category.jsp?context=BeachHouseShopAll">SHOP ALL BEACH &#8594;</a>
        <a class="button p-6" href="https://catalogs.restorationhardware.com/RH-Outdoor/1/">SHOP SOURCE BOOK &#8594;</a>
      </div>
      <div id="arrow" class="arrow">
        <img src="https://media.restorationhardware.com/is/content/rhis/beach_house/scrollDownArrowGrey.svg" alt="bouncing scroll down arrow">
      </div>
    </div>
    <div class="container">
      <div class="intro-copy text-center copy p-12 md:p-16 xl:p-20">
        <p>The crowds start to disperse the minute you clear customs in Cancun. The vast majority of the American’s head straight for the cabs that will whisk them a few minutes away to the mega resorts, all you can eat restaurants and swim up bars of Cancun. Another wave.</p>
      </div>
      <contentBlock v-for="(block, index) in content" :key="index" :content="block" />
      <div class="text-center py-12">
        <a class="button-black py-6 px-8" href="https://intb-www.restorationhardware.com/content/category.jsp?context=BeachHouseShopAll">SHOP ALL BEACH &#8594;</a>
      </div>
    </div>
  </div>
</template>

<script>
import contentBlock from '~/components/content-block'
import content from '~/assets/content/content'

export default {
  components: {
    contentBlock
  },
  data() {
    return {
      content: content
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const currentScrollPos = window.scrollY
      if (currentScrollPos >= 100) {
        document.getElementById('arrow').style.opacity = '0'
      }
      if (currentScrollPos < 100) {
        document.getElementById('arrow').style.opacity = '1'
      }
    }
  }
}
</script>

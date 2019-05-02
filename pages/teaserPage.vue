<template>
  <div id="root">
    <div class="hero fadeIn relative">
      <video loop autoplay muted>
        <source src="https://media.restorationhardware.com/is/content/rhis/Waves_v1" type="video/mp4">
      </video>
      <div class="absolute logo">
        <img src="https://media.restorationhardware.com/is/content/rhis/beach_house/RH-logo-white.svg" alt="RH Beach Logo">
      </div>
      <div class="absolute date">
        <img src="https://media.restorationhardware.com/is/content/rhis/beach_house/Summer_2019.svg" alt="Summer 2019">
      </div>
      <div id="arrow" class="arrow">
        <img src="https://media.restorationhardware.com/is/content/rhis/beach_house/scrollDownArrow.svg" alt="bouncing scroll down arrow">
      </div>
    </div>
    <div>
        <img src="https://media.restorationhardware.com/is/image/rhis/RHBH_comingsoon_email_v2?wid=2000&fmt=jpeg" alt="">
    </div>
  </div>
</template>

<script>

export default {
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

<template>
  <div class="relative block lg:hidden">
    <button
      class="text-sm block lg:hidden navicon"
      title="Take the JammeryHQ 2020 Survey"
      @click.prevent="toggle"
      @keyup.prevent="toggle">
      <strong class="text-2xl">Explore&nbsp;&nbsp;<i
        id="toggleIcon"
        class="toggleIcon">{{ toggleIcon }}</i></strong>
    </button>
    <nav
      v-show="showSection"
      ref="primaryNav"
      class="nav-mobile absolute top-0 right-0 w-32 bg-white"
      role="navigation">
      <g-link
        v-for="({ text, title, url }, i) in navigation.primary"
        :key="i"
        exact
        :to="url"
        :tooltip="text"
        :aria-label="title">
        <span class="text">{{ text }}</span>
      </g-link>
    </nav>
  </div>
</template>

<script>
import navigation from '@/data/nav-links.yaml';
export default {
  data () {
    return {
      navigation,
      showSection: false,
      toggleIcon: '≡'
    };
  },
  methods: {
    toggle () {
      this.showSection = !this.showSection
    },
    startArrowKeys () {
      this.$refs.primaryNav.children[ 0 ].focus()
    },
    focusPrevious (isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext (isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    }
  }
}
</script>

<style>
.nav-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 50px;
    border-radius: 10px;
    padding: 7px 0px;
    z-index: 9999;
}
.nav-mobile > a:link {
    color: #000!important;
    padding: 5px 0 5px 10px;
    height: auto;
    line-height: 1;
    text-align: left;
}
.nav-mobile > a:link span {
    padding: 0;
    color: #000;
}
</style>

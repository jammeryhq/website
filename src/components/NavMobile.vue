<template>
    <div class="relative block lg:hidden">
        <button
            v-on:click.prevent="toggle"
            class="block lg:hidden navicon"
            title="Take the JammeryHQ 2020 Survey">
            <strong>Explore&nbsp;&nbsp;<i class="toggleIcon" id="toggleIcon">{{toggleIcon}}</i></strong>
        </button>
        <nav class="nav-mobile absolute top-0 right-0 w-32 bg-white" ref="primaryNav" role="navigation" v-show="showSection">
            <g-link exact v-for="({ text, title, url }, i) in navigation.primary" :key="i" :to="url" :tooltip="text" :aria-label="title">
            <span class="text">{{ text }}</span>
            </g-link>
        </nav>
    </div>
</template>

<script>
import navigation from "@/data/nav-links.yaml";
export default {
  data() {
    return {
      navigation,
      showSection: false,
      toggleIcon: '≡'
    };
  },
  methods: {
    toggle() {
     this.showSection = !this.showSection
    },
    startArrowKeys() {
		this.$refs.primaryNav.children[0].focus()
    },
    focusPrevious(isArrowKey) {
        this.focusedIndex = this.focusedIndex - 1
        if (isArrowKey) {
            this.focusItem()
        }
    },
    focusNext(isArrowKey) {
        this.focusedIndex = this.focusedIndex + 1
        if (isArrowKey) {
            this.focusItem()
        }
    },
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
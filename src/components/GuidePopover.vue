<template>
    <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl">
        <h2
            v-if="title != ''"
            class="title">
            {{ title }}
        </h2>
        <p
            v-if="summary != ''"
            class="summary">
            {{ summary }}
        </p>
        <div class="relative group appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <button @click="isOpen = !isOpen" class="w-full flex items-center justify-between cursor-pointer text-sm px-4 py-4">
                Select a {{ type }} guide
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </button>
            <div v-if="isOpen" class="shadow-2xl border text-sm items-center absolute bottom-0 rounded-lg p-1 bg-white p-2 w-full">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <g-link
                        v-if="type === 'plugins'"
                        v-for="edge in $page.plugins.edges"
                        :key="edge.node.id"
                        :to="'guides/plugins/'+edge.node.slug"
                        class="text-black">
                        {{ edge.node.title }}
                    </g-link>
                    <g-link
                        v-if="type === 'starters'"
                        v-for="edge in $page.starters.edges"
                        :key="edge.node.id"
                        :to="'guides/starters/'+edge.node.slug"
                        class="text-black">
                        {{ edge.node.title }}
                    </g-link>
                    <button v-if="isOpen === true" @click="isOpen = !isOpen" class="absolute right-0 top-0 bg-black rounded-full h-6 w-6 text-white font-bold text-xs mr-3 mt-3">&times;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        summary: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
        isOpen: false
        }
    },
    mounted () {
        const handleEscape = e => {
        if (e.key === 'Esc' || e.key === 'Escape') {
            this.isOpen = false
        }
        }
        document.addEventListener('keydown', handleEscape)
        this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('keydown', handleEscape)
        })
    },
}
</script>

<style>

</style>
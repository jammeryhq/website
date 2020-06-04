<template>
    <div class="p-6 lg:p-0 md:w-full lg:w-3/4 xl:w-1/2 mx-auto relative z-10">
        <h1 class="title" v-if="title != ''">
            {{ title }}
        </h1>
        <p class="excerpt" v-if="summary != ''">
            {{ summary }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            default: ''
        },
        summary: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>
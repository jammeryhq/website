<template>
    <div class="prose lg:prose-2xl mx-auto">
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
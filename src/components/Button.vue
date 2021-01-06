<template>
<button class="button" :class="type">
    <span :class="customClasses" :style="'background: #' + bgColor">
        <strong>{{ text }}</strong>
        <template name="icon">

        </template>
        <i class="gap gap-top" :style="'background: #' + bgColor"></i>
        <i class="gap gap-bottom" :style="'background: #' + bgColor"></i>
    </span>
</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        customClasses: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: '3b414e'
        }
    },
}
</script>

<style lang="scss">
.ghost {
    background: rgb(163, 249, 237);
    background: -moz-linear-gradient(152deg, rgba(163, 249, 237, 1) 0%, rgba(182, 127, 253, 1) 100%);
    background: -webkit-linear-gradient(152deg, rgba(163, 249, 237, 1) 0%, rgba(182, 127, 253, 1) 100%);
    background: linear-gradient(152deg, rgba(163, 249, 237, 1) 0%, rgba(182, 127, 253, 1) 100%);

    padding: 5px 5px;
    display: inline-block;
    position: relative;

    &>span {
        @apply px-6 py-3 inline-block;
    }

    & .gap {
        @apply block absolute;
        width: 8px;
        height: 7px;
    }

    & .gap-top {
        top: 5px;
        left: 0;
    }

    & .gap-bottom {
        bottom: 5px;
        right: 0;
    }

    strong {
        @apply text-sm px-2;
    }
}
</style>

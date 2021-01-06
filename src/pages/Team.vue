<template>
<Layout>
    <div>
        <PageHeader title="Team Jammery" summary="JammeryHQ is an open collaboration between three freelancers, each from vastly different backgrounds, each bringing something unique to the table." />

        <ul class="mx-auto max-w-5xl my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <li v-for="edge in $page.plugins.edges" :key="edge.node.id" class="col-span-1 flex flex-col text-center bg-gray-100 rounded-lg shadow-none hover:shadow-2xl">
                <div class="items-center justify-center flex flex-col p-8">
                    <g-link :to="'team/' + edge.node.slug" class="p-2 block image-link rounded-full overflow-hidden">
                        <g-image :src="edge.node.thumb" class="w-32 h-32 flex-shrink-0 mx-auto bg-white rounded-full border-8 border-white shadow-md" fit="cover" position="center" />
                    </g-link>
                    <h3 class="mt-2 text-gray-900 text-xl leading-5 font-medium">
                        <g-link :to="'team/' + edge.node.slug">
                            {{ edge.node.title }}
                        </g-link>
                    </h3>
                    <dl class="mt-1 flex-grow flex flex-col justify-between">
                        <dt class="sr-only">Title</dt>
                        <dd class="text-gray-700 text-base leading-5">{{edge.node.role}}</dd>
                        <dt class="sr-only">Links</dt>
                        <dd class="mt-3 flex items-center justify-center">
                            <a v-for="(link, $index) in edge.node.links" :key="$index" :href="link.url" :title="link.network" class="opacity-25 hover:opacity-75">
                                <span v-if="link.network == 'Twitter'" class="w-6 h-6 block">
                                    <g-image src="/twitter.svg" />
                                </span>
                                <span v-if="link.network == 'Instagram'" class="w-6 h-6 block">
                                    <g-image src="/instagram.svg" />
                                </span>
                                <span v-if="link.network == 'Github'" class="w-6 h-6 block">
                                    <g-image src="/github.svg" />
                                </span>
                                <span v-if="link.network == 'Linkedin'" class="w-6 h-6 block">
                                    <g-image src="/linkedin.svg" />
                                </span>
                                <span v-if="link.network == 'Youtube'" class="w-6 h-6 block">
                                    <g-image src="/youtube.svg" />
                                </span>
                                <span v-if="link.network == 'Website'" class="w-6 h-6 block">
                                    <g-image src="/website.svg" />
                                </span>
                            </a>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
        <div class="flex items-center justify-center">
            <Button type="ghost" text="More about Jammery" bgColor="3b414e" customClasses="text-white" />
            <div class="w-10"></div>
            <Button type="ghost" text="More about Jammery" bgColor="fff" customClasses="text-black" />
        </div>

    </div>
</Layout>
</template>

<page-query>
query {
  plugins: allTeam(sortBy: "date", order: ASC)  {
    edges {
      node {
        id
        title
        slug
        role
        excerpt
        path
        thumb
        nickname
        links {
          url
          network
        }
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '@/components/PageHeader'
import Button from '@/components/Button'

export default {
    components: {
        PageHeader,
        Button
    },
    metaInfo: {
        title: 'Team Jammery',
        description: '',
        bodyAttrs: {
            class: ''
        }
    }
}
</script>

<style>
.page footer a {
    @apply text-black
}

.image-link {
    @apply rounded-full;
}

article {
    ul {
        @apply mt-4 mb-0 ml-4 text-xl
    }

    li:before {
        content: "\2713";
        @apply text-accent font-bold text-2xl mr-2
    }
}
</style>

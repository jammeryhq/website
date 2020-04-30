<template>
    <div class="comments-wrap pb-40">
        <div class="comments">
            <h2 class="text-6xl font-bold mb-10">Comments</h2>
            <div class="text-2xl text-center p-20 hidden">
                No comments yet. Be the first.
            </div>
            <div class="comment">
                <figure>
                    <g-image src="/evan.jpg" class="object-cover" />
                </figure>
                <div>
                    <div class="comment-title">
                        <h3>Evan You</h3>
                        <span>30 April, 2020</span>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem quaerat, doloribus cupiditate quisquam unde esse consectetur et reprehenderit</p>
                    <p>Expedita tempora, minus earum nobis. Nemo adipisci nulla animi fugiat commodi.</p>
                    <p class="reply"><button v-on:click="commentBody = '@EvanYou '">Reply to Evan</button></p>
                </div>
            </div>
            <div class="comment">
                <figure>
                <g-image src="/joe.jpg" class="object-cover" />
                </figure>
                <div>
                    <div class="comment-title">
                        <h3>Joe McDonald</h3>
                        <span>30 April, 2020</span>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem quaerat, doloribus cupiditate quisquam unde esse consectetur et reprehenderit, expedita tempora, minus earum nobis. Nemo adipisci nulla animi fugiat commodi.</p>
                    <p class="reply"><button v-on:click="commentBody = '@JoeMcDonald '">Reply to Joe</button></p>
                </div>
            </div>
            <div class="comment">
                <figure>
                    <g-image src="/chris.jpg" class="object-cover" />
                </figure>
                <div>
                    <div class="comment-title">
                        <h3>Chris Rault</h3>
                        <span>30 April, 2020</span>
                    </div>
                    <p><a href="#">@Joe</a> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem quaerat, doloribus cupiditate quisquam unde esse consectetur et reprehenderit, expedita tempora, minus earum nobis. Nemo adipisci nulla animi fugiat commodi.</p>
                    <p class="reply"><button v-on:click="commentBody = '@ChrisRault '">Reply to Chris</button></p>
                </div>
            </div>
        </div>
        <div class="comment-form bg-gray-100 rounded-md p-10 mt-10 -mx-20"> 
            <h2 class="text-4xl font-bold mb-4">Join the Conversation</h2>
            <form action="" class="flex items-start flex-wrap">
                <div class="w-full">
                    <label
                        for="message"
                        class="block">
                        <span
                            class="text-gray-700">What's on your mind?</span>
                        <div class="relative">
                            <ClientOnly>
                                <vue-expand
                                    id="message"
                                    v-model="commentBody"
                                    :handler="handler"
                                    placeholder="Write your comment here"
                                    :v-bind="commentBody"
                                    min-row="10" />
                            </ClientOnly>
                            <span class="md absolute top-0 right-0 w-6 h-auto mt-3 mr-4 inline-block" title="&#10004; Markdown Supported">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs/><path d="M950 192H74c-41 0-74 33-74 74v492c0 41 33 74 74 74h876c41 0 74-33 74-74V266c0-41-33-74-74-74zM576 704H448V512l-96 123-96-123v192H128V320h128l96 128 96-128h128v384zm191 32L608 512h96V320h128v192h96L767 736z"/></svg>
                            </span>
                        </div>
                    </label>
                </div>
                <div class="md:w-1/3">
                    <label
                        for="first_name"
                        class="block mt-4">
                        <span class="text-gray-700">First name</span>
                        <input
                            id="first_name"
                            v-model="form.first_name"
                            name="first_name"
                            class="block w-full mt-1 form-input"
                            placeholder="Evan"
                            required>
                    </label>
                </div>
                <div class="md:w-1/3">
                    <label
                        for="last_name"
                        class="block mt-4 md:mx-4">
                        <span class="text-gray-700">Last name</span>
                        <input
                            id="last_name"
                            v-model="form.last_name"
                            name="last_name"
                            class="block w-full mt-1 form-input"
                            placeholder="You"
                            required>
                    </label>
                </div>
                <div class="md:w-1/3">
                    <label
                            for="email"
                            class="block mt-4">
                        <span class="text-gray-700">Email</span>
                        <input
                            id="email"
                            v-model="form.email"
                            name="email"
                            class="block w-full mt-1 form-input"
                            placeholder="evan@vuejs.org"
                            required>
                    </label>
                </div>
                <div class="w-full flex mt-5">
                <vue-hcaptcha
                    class="block"
                    :sitekey="hcaptchaKey"
                    @verify="form.hcaptchaResponse = $event" />
                <div class="ml-5 mt-1 mr-4">
                    <label class="block whitespace-pre text-gray-700">
                    <input type="checkbox" title="Should we save your name and email in your browser?"> Save details for next time</label>
                    <label class="block whitespace-pre text-gray-700">
                    <input type="checkbox" title="Should we notify you of replies to your comment?"> Get notified of replies</label>
                    <label class="block whitespace-pre text-gray-700" title="Would you like to subscribe to our newsletter?">
                    <input type="checkbox"> Subscribe to the newsletter</label>
                </div>
                <button
                    type="submit"
                    :disabled="!form.hcaptchaResponse || submitting"
                    :class="!form.hcaptchaResponse || submitting ? 'font-bold bg-gray-400 text-white' : 'font-bold bg-gray-800 text-accent'"
                    class="block w-full px-4 py-6 text-xl font-bold rounded-md ml-4">
                    <span v-if="!form.hcaptchaResponse">Complete Captcha</span>
                    <span v-else-if="submitting">Submitting Your Comment...</span>
                    <span v-else>Submit Your Comment</span>
                </button>
                <p
                    v-if="error"
                    class="text-sm text-red-400 text-center mt-5">
                    {{ context.error }}
                </p>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
// Components
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'

// Packages
import ky from 'ky'
import Vue from 'vue'

// Environment variables
const hcaptchaKey = process.env.GRIDSOME_HCAPTCHA_SITE_KEY

// Mixins
import formMachineMixin from '@/mixins/formMachine'

export default {
    mixins: [formMachineMixin],
    components: {
        VueExpand: () => import('vue-expand'),
        VueHcaptcha
    },
    data: () => ({
        commentBody: '',
        hcaptchaKey,
        handler: new Vue(),
        form: { hcaptchaResponse: '' }
    }),
    mounted () {
        this.handler.$emit('focus')
    },
    formMachine: {
        resetTimeout: 5000
    },
    async submitHandler (payload) {
        const { status, message } = await ky.post('/api/contactSubmission', { json: payload }).json()
        if (status === 'error') throw new Error(message)
    },
    methods: {
        async submit () {
        this.formService.send({ type: 'SUBMIT', value: this.form })
        }
    }
}
</script>

<style>
  .comment {
    @apply flex items-start justify-start
  }
  .comment h3 {
    @apply text-2xl font-bold 
  }
  .comment-title { 
    @apply flex justify-start items-center
  }
  .comment span {
    @apply text-sm ml-2 text-gray-700
  }
  .comment p {
    @apply text-lg leading-relaxed
  }
  .comment-form .form-input,
  .comment-form .vue-expand {
    @apply bg-white
  }
  .comment figure {
    @apply block rounded-full overflow-hidden mr-4;
    max-width: 50px;
    max-height: 50px;
    min-height: 50px;
    min-width: 50px;
  }
  .comment > div > .reply {
      @apply -mt-5
  }
  .comment > div > .reply button {
      @apply text-sm text-white
  }
  .comment > div:hover > .reply button {
      @apply text-sm text-black
  }
</style>
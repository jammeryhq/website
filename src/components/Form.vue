<template>
    <div class="form" refs>
        <div class="success" v-if="status === 'success'">
            <div class="flex items-center justify-start w-full">
				<div class="w-full p-10 mt-10 bg-gray-100 border-l-8 bg-accent border-accent">
					<h2>Message sent!</h2>
					<p class="m-0">Expect a response within the next 24 hours (though usually less).</p>
				</div>
			</div>
        </div>
        <div class="error" v-if="status === 'error'">
            Oops, something went wrong. Please try again.
        </div>
        <form v-if="!status" @submit="sendForm">
            <label class="block">
                <span class="text-gray-700" for="message">Message</span>
                    <ClientOnly>
                        <vue-expand
                        v-model="message" 
                        :handler="handler" 
                        placeholder="Write your message here"
                        min-row="5"
                        class="border overflow-visible"
                        v-focus />
                    </ClientOnly>
            </label>
            <div>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 md:mr-5">
                        <label class="block mt-4">
                            <span class="text-gray-700">Your name</span>
                            <input name="name" id="name" v-model="name" class="block w-full mt-1 form-input" placeholder="Evan You" required>
                        </label>
                    </div>
                    <div class="md:w-1/2">            
                        <label class="block mt-4">
                            <span class="text-gray-700">Your email</span>
                            <input name="email" id="email" v-model="email" class="block w-full mt-1 form-input" placeholder="evan@vuejs.org" required>
                        </label>
                    </div>
                </div>
                <input type="hidden" name="_gotcha">
                <button type="submit" class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8">
                    <span v-if="radioValue === 'quote'">Let's do this!</span>
                    <span v-if="radioValue === 'message'">Send it, Sparky!</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Form',
        components: {
            VueExpand: () => import("vue-expand") 
        },
        data: function() {
            return {
                handler: new Vue(),
                status: null,
                name: null,
                email: null,
                budget: '',
                website: '',
                message: null,
                radioValue: "message",
                message_type: null,
                message_type: this.radioValue
            }
        },
        mounted(){
            this.handler.$emit('focus')
        },
        methods: {
            sendForm: function(event) {
                event.preventDefault()

                fetch('https://formcarry.com/s/iqNMdsHQ9Zt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ 
                    name: this.name, 
                    email: this.email, 
                    message: this.message,
                    budget: this.budget, 
                    website: this.website
                 })
                })
                .then(response => response.json())
                .then(response => {
                    if (response.code === 200) {
                        this.status = 'success'
                    } else {
                        // Formcarry error
                        this.status = 'error'
                    }
                })
                // network error
                .catch(() => (this.status = 'error'))
            }
        }
    }
</script>

<style>
.contact .vue-expand {
    @apply block w-full mt-1 border-solid border border-gray-300 rounded-sm p-3 bg-white;
}
.contact .vue-expand[min-row="3"] {
    min-height: 200px;
}
.contact .vue-expand[min-row="5"] {
    min-height: 300px;
}
</style>
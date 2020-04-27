// Packages
import { Machine, interpret, assign } from 'xstate'

const formMachineMixin = {
  data: () => ({
    formService: null,
    current: {},
    context: {}
  }),
  computed: {
    idle () { return this.current.matches('idle') },
    submitting () { return this.current.matches('submitting') },
    sent () { return this.current.matches('sent') },
    error () { return this.current.matches('error') }
  },
  created () {
    const { submitHandler, formMachine = {} } = this.$options
    if (!submitHandler) throw new Error('No handler or the form Machine.')

    const { resetTimeout = 2000 } = formMachine

    const machine = Machine({
      id: 'form',
      initial: 'idle',
      context: { error: null },
      states: {
        idle: {
          on: {
            SUBMIT: 'submitting'
          }
        },
        submitting: {
          invoke: {
            id: 'sending',
            src: (_ctx, e) => submitHandler(e.value),
            onDone: 'sent',
            onError: {
              target: 'error',
              actions: assign({ error: (_ctx, e) => e.data })
            }
          }
        },
        sent: {
          after: {
            [ resetTimeout ]: 'idle'
          }
        },
        error: {
          on: {
            SUBMIT: 'submitting'
          }
        }
      }
    })

    this.formService = interpret(machine)
    this.current = machine.initialState
    this.context = machine.context

    this.formService.onTransition(state => {
      this.current = state
      this.context = state.context
    }).start()
  }
}

export default formMachineMixin

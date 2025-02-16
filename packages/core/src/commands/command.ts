import { Command, RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    command: {
      /**
       * Define a command inline.
       */
      command: (fn: (props: Parameters<Command>[0]) => boolean) => ReturnType,
    }
  }
}

export const command: RawCommands['command'] = fn => props => {
  return fn(props)
}

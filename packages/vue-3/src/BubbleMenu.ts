import {
  h,
  ref,
  PropType,
  onMounted,
  onBeforeUnmount,
  defineComponent,
} from 'vue'
import {
  BubbleMenuPlugin,
  BubbleMenuPluginKey,
  BubbleMenuPluginProps,
} from '@tiptap-es5/extension-bubble-menu'

export const BubbleMenu = defineComponent({
  name: 'BubbleMenu',

  props: {
    editor: {
      type: Object as PropType<BubbleMenuPluginProps['editor']>,
      required: true,
    },

    tippyOptions: {
      type: Object as PropType<BubbleMenuPluginProps['tippyOptions']>,
      default: () => ({}),
    },
  },

  setup(props, { slots }) {
    const root = ref<HTMLElement | null>(null)

    onMounted(() => {
      const { editor, tippyOptions } = props

      editor.registerPlugin(BubbleMenuPlugin({
        editor,
        element: root.value as HTMLElement,
        tippyOptions,
      }))
    })

    onBeforeUnmount(() => {
      const { editor } = props

      editor.unregisterPlugin(BubbleMenuPluginKey)
    })

    return () => h('div', { ref: root }, slots.default?.())
  },
})

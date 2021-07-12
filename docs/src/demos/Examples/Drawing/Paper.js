import { Node, mergeAttributes } from "@tiptap-es5/core";
import { VueNodeViewRenderer } from "@tiptap-es5/vue-2";
import Component from "./Component.vue";

export default Node.create({
  name: "paper",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      lines: {
        default: []
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="paper"]'
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-type": "paper" })];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

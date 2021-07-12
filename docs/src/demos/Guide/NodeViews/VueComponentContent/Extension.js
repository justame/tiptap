import { Node, mergeAttributes } from "@tiptap-es5/core";
import { VueNodeViewRenderer } from "@tiptap-es5/vue-2";
import Component from "./Component.vue";

export default Node.create({
  name: "vueComponent",

  group: "block",

  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "vue-component"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["vue-component", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

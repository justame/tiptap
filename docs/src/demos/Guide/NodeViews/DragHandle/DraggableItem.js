import { Node, mergeAttributes } from "@tiptap-es5/core";
import { VueNodeViewRenderer } from "@tiptap-es5/vue-2";
import Component from "./Component.vue";

export default Node.create({
  name: "draggableItem",

  group: "block",

  content: "block+",

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="draggable-item"]'
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-type": "draggable-item" }), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

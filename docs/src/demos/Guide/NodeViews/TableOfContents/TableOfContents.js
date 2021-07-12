import { Node, mergeAttributes } from "@tiptap-es5/core";
import { VueNodeViewRenderer } from "@tiptap-es5/vue-2";
import Component from "./Component.vue";

export default Node.create({
  name: "tableOfContents",

  group: "block",

  atom: true,

  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["toc", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  },

  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});

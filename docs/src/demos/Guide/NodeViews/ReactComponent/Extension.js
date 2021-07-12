import { Node, mergeAttributes } from "@tiptap-es5/core";
import { ReactNodeViewRenderer } from "@tiptap-es5/react";
import Component from "./Component.jsx";

export default Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "react-component"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  }
});

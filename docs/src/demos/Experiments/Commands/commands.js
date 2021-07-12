import { Extension } from "@tiptap-es5/core";
import Suggestion from "@tiptap-es5/suggestion";

export default Extension.create({
  name: "mention",

  defaultOptions: {
    suggestion: {
      char: "/",
      startOfLine: false,
      command: ({ editor, range, props }) => {
        props.command({ editor, range });
      }
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});

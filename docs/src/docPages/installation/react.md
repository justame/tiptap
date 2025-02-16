---
title: React WYSIWYG
---

# React

## toc

## Introduction

The following guide describes how to integrate tiptap with your [React](https://reactjs.org/) project.

## Requirements

- [Node](https://nodejs.org/en/download/) installed on your machine
- Experience with [React](https://reactjs.org/docs/getting-started.html)

## 1. Create a project (optional)

If you already have an existing React project, that’s fine too. Just skip this step and proceed with the next step.

For the sake of this guide, let’s start with a fresh React project called `tiptap-example`. [_Create React App_](https://reactjs.org/docs/getting-started.html) sets up everything we need.

```bash
# create a project
npx create-react-app tiptap-example

# change directory
cd tiptap-example
```

## 2. Install the dependencies

Okay, enough of the boring boilerplate work. Let’s finally install tiptap! For the following example you’ll need the `@tiptap-es5/react` package, with a few components, and `@tiptap-es5/starter-kit` which has the most common extensions to get started quickly.

```bash
# install with npm
npm install @tiptap-es5/react @tiptap-es5/starter-kit

# install with Yarn
yarn add @tiptap-es5/react @tiptap-es5/starter-kit
```

If you followed step 1 and 2, you can now start your project with `npm run start` or `yarn start`, and open [http://localhost:3000](http://localhost:3000) in your favorite browser. This might be different, if you’re working with an existing project.

## 3. Create a new component

To actually start using tiptap, you’ll need to add a new component to your app. Let’s call it `Tiptap` and put the following example code in `src/Tiptap.jsx`.

This is the fastest way to get tiptap up and running with React. It will give you a very basic version of tiptap, without any buttons. No worries, you will be able to add more functionality soon.

```jsx
import { useEditor, EditorContent } from "@tiptap-es5/react";
import StarterKit from "@tiptap-es5/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>"
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
```

## 4. Add it to your app

Now, let’s replace the content of `src/App.js` with the following example code to use our new `Tiptap` component in our app.

```jsx
import Tiptap from "./Tiptap.jsx";

const App = () => {
  return (
    <div className="App">
      <Tiptap />
    </div>
  );
};

export default App;
```

You should now see tiptap in your browser. Time to give yourself a pat on the back! :)

## 5. The complete setup (optional)

Ready to add more? Below is a demo that shows how you could set up what we call the default editor. Feel free to take this and start customizing it then:

<demo name="Examples/Default/React" />

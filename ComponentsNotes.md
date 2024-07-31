# Components


### What is React?

React is a JavaScript library used for building user interfaces, especially for single-page applications. It helps developers create large web applications that can update and render efficiently in response to data changes.

### What are Components?

Think of a React component like a small piece of a webpage. Each component is responsible for a part of the user interface (UI). For example, a button, a header, or a form could each be a component.

Side Note: 

- A React component is essentially a JavaScript function that returns JSX (JavaScript XML).
- Name of Components should start with Capital letters
    - `function App(){return ....}` 
    A of App is in caps
- Components us to take one element but not any more:
- In React, components typically return a single root element, but there are a few important points to consider:
    1. Single root element: Traditionally, React components returned a single root element. This was a requirement in earlier versions of React.
    2. React Fragments: With the introduction of React Fragments, you can return multiple elements without wrapping them in a single parent div. This looks like:
    
    ```jsx
    return (
      <>
        <ChildA />
        <ChildB />
        <ChildC />
      </>
    );
    
    ```
    
    1. Arrays: You can also return an array of elements, though this is less common:
        
        ```jsx
        return [
          <ChildA key="a" />,
          <ChildB key="b" />,
          <ChildC key="c" />
        ];
        
        ```
        

### Types of Components

1. **Functional Components**: These are just simple JavaScript functions that return HTML-like code (JSX). They are easier to write and understand, especially for beginners.
2. **Class Components**: These are more complex and are created using JavaScript classes. They have more features but are harder to understand for beginners.

### Creating a Functional Component

Let's start by creating a simple functional component.

1. **Setup Your Project**: First, we need to set up a React project. You've already done this, so we'll focus on the components now.
2. **Create a Component**: We'll create a simple component that displays a message.

### Step-by-Step Example

1. **Open your `src` folder**: This is where your React app's code lives.
2. **Create a `components` folder inside `src`**: This helps to keep your components organized.
3. **Create a new file called `Hello.js` inside the `components` folder**.
4. **Write the following code in `Hello.js`**:

```jsx
// src/components/Hello.js
import React from 'react';

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default Hello;

```

1. **Use Your Component in the App**: Now, we need to use this component in our main `App.js` file.
2. **Open `src/App.js` and modify it to look like this**:

```jsx
// src/App.js
import React from 'react';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;

```

1. **Run Your App**: If you have `npm start` running, you should see "Hello, World!" on your webpage.

### Breaking Down the Code

1. **`import React from 'react';`**: This line imports the React library so we can use it.
2. **`function Hello() { ... }`**: This defines a functional component called `Hello`.
3. **`return (...)`**: Inside the component, we return some HTML-like code (JSX). This is what will be displayed on the screen.
4. **`export default Hello;`**: This line allows us to use the `Hello` component in other files.
5. **`import Hello from './components/Hello';`**: In `App.js`, we import the `Hello` component so we can use it.
6. **`<Hello />`**: This is how we use the `Hello` component in our `App` component. It will display whatever the `Hello` component returns.

### Summary

- **React**: A library for building user interfaces.
- **Components**: Reusable pieces of a webpage (like building blocks).
- **Functional Components**: Simple functions that return what should be displayed.
- **JSX**: HTML-like syntax used in React.

By following these steps, you should be able to create and use simple components in a React application. As you become more comfortable, you can explore more complex features and components.

## Let's break it down further and take it step-by-step to clarify why we do each part of creating and using a functional component in React. I'll explain each step in more detail.

### 1. Setting Up Your Project

**What is this?**
You already have a React project set up if you've followed the `create-react-app` setup. This project has a specific folder structure and some default files.

**Why do we do this?**
The setup process gives you a working environment to build your React application, including necessary configurations and files.

### 2. Creating a Component

**What is this?**
A component is a building block of a React application. Each component is a piece of the user interface (UI) that can be reused and managed independently.

**Why do we do this?**
Creating components allows you to break down your UI into manageable pieces, making your code more organized and easier to understand.

### Step-by-Step Example

### a. Open Your `src` Folder

**What is this?**
The `src` folder is where your React application's source code lives. This includes your components and other JavaScript files.

**Why do we do this?**
We need to work within the `src` folder because that's where React looks for the code that defines the user interface.

### b. Create a `components` Folder Inside `src`

**What is this?**
A `components` folder is a common convention to keep your React components organized.

**Why do we do this?**
Organizing components into their own folder helps manage and find your code easily, especially as your project grows.

### c. Create a New File Called `Hello.js` Inside `components`

**What is this?**
This file will contain our new component.

**Why do we do this?**
Each component typically has its own file. This helps keep code organized and makes it easier to locate and edit specific components.

### d. Write the Code in `Hello.js`

Here's the code you would put into `Hello.js`:

```jsx
// src/components/Hello.js
import React from 'react';

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default Hello;

```

**What is this code doing?**

- `import React from 'react';`: This imports the React library so you can use its features.
- `function Hello() { ... }`: This defines a new component called `Hello`. Components are defined as functions or classes in React.
- `return (...)`: This is where you specify what the component should render. In this case, it renders a simple `<h1>` tag.
- `export default Hello;`: This makes the `Hello` component available for use in other files.

**Why do we do this?**
We define components to create pieces of the user interface. Each component can be used multiple times and in different parts of your application.

### 3. Using Your Component in the App

**What is this?**
Now we want to include the `Hello` component in the main `App` component, which is the entry point of your application.

**Why do we do this?**
Including your components in the main application file allows them to be displayed when you run your app.

Here's how you modify `App.js`:

```jsx
// src/App.js
import React from 'react';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;

```

**What is this code doing?**

- `import Hello from './components/Hello';`: This imports the `Hello` component so you can use it in `App.js`.
- `<Hello />`: This is where you use the `Hello` component inside the `App` component. It will render whatever the `Hello` component returns.

**Why do we do this?**
We include the `Hello` component in `App.js` so that it appears on the web page when you run your React application.

### 4. Running Your App

**What is this?**
You run `npm start` in your terminal to start your React application.

**Why do we do this?**
Starting the app allows you to view your React components in a web browser and see the result of your code.

### Summary

- **React**: A tool for building web user interfaces.
- **Components**: Small, reusable pieces of a webpage.
- **Functional Components**: Simple components written as functions.
- **JSX**: A syntax that lets you write HTML-like code in JavaScript.

By following these steps and understanding why each part is done, you should be able to create and use basic components in React. As you continue, you'll learn more about how to make components interactive and manage complex UIs.

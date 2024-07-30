# C-R-A FOLDER STRUCTURE


### Default `create-react-app` Folder Structure

When you run `npx create-react-app my-react-app`, the following folder structure is created:

```
my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock or package-lock.json

```

### Explanation of Each File/Folder

### `node_modules/`

- **Description**: This directory contains all the project dependencies installed via npm or yarn. You typically don't interact directly with this folder.
- **Purpose**: Manages the project's dependencies.

### `public/`

The `public/` directory contains static assets that are served directly by the web server. These files are not processed by Webpack (the build tool used by React) and are accessible in the root URL of the app

- **favicon.ico**: The icon displayed in the browser tab.
- **index.html**: The single HTML file in the app. All the React components are rendered inside the `div` with `id="root"` in this file. Only one HTML file is used because React is a single-page application (SPA) framework.
- **logo192.png**: A smaller logo used for the web app manifest.
- **logo512.png**: A larger logo used for the web app manifest.
- **manifest.json**: Provides metadata for the web app, such as name, icons, and theme colors.
- **robots.txt**: Instructs web crawlers which pages to crawl and index.

### `src/`

- **App.css**: The CSS file for styling the `App` component.
- **App.js**: The main React component file, typically the root component of the app.
- **App.test.js**: The test file for the `App` component, used with Jest.
- **index.css**: The CSS file for global styles.
- **index.js**: The JavaScript entry point of the app. This file renders the `App` component into the DOM.
- **logo.svg**: An SVG file of the React logo, used in the `App` component.
- **reportWebVitals.js**: Measures the performance of the app. It's optional and can be removed if not used.
- **setupTests.js**: Configuration file for setting up tests with Jest.

### Root Files

- **.gitignore**: Specifies which files and directories should be ignored by Git. This typically includes `node_modules/`, build files, and other transient files.
- **package.json**: Contains metadata about the project, including its dependencies, scripts, and other configurations.
- [**README.md**](http://readme.md/): A markdown file with information about the project. It's a good place to provide instructions and documentation for your project.
- **yarn.lock** or **package-lock.json**: Lock files that ensure the exact same versions of dependencies are installed across different environments.

### Common Tasks and Scripts in `package.json`

The `package.json` file includes various scripts that can be run using `npm run <script>`:

- **start**: Starts the development server.
    
    ```
    npm start
    
    ```
    
- **build**: Bundles the app into static files for production.
    
    ```
    npm run build
    
    ```
    
- **test**: Runs the test suite.
    
    ```
    npm test
    
    ```
    
- **eject**: Removes the single build dependency from the project. This is a one-way operation.
    
    ```
    npm run eject
    
    ```
    

### Customizing Your Project

As you develop your React application, you will add, remove, and modify files within the `src` directory:

- **Components**: It's common to create a `components` directory inside `src` to organize your React components.
    
    ```
    src/
    ├── components/
    │   ├── Header.js
    │   ├── Footer.js
    │   └── ... other components
    
    ```
    
- **Styles**: You may also create a `styles` directory to manage CSS or SCSS files.
    
    ```
    src/
    ├── styles/
    │   ├── App.css
    │   ├── Header.css
    │   └── ... other styles
    
    ```
    
- **Assets**: For images, fonts, and other static files, you might create an `assets` directory.
    
    ```
    src/
    ├── assets/
    │   ├── images/
    │   │   ├── logo.png
    │   │   └── ... other images
    │   └── fonts/
    │       ├── custom-font.woff
    │       └── ... other fonts
    
    ```
    

### Example: Adding a New Component

1. **Create a new file for the component**:
    
    ```
    src/components/Header.js
    
    ```
    
2. **Define the component**:
    
    ```jsx
    // src/components/Header.js
    import React from 'react';
    import './Header.css';
    
    function Header() {
      return (
        <header>
          <h1>Welcome to My App</h1>
        </header>
      );
    }
    
    export default Header;
    
    ```
    
3. **Create a corresponding CSS file** (optional):
    
    ```
    src/styles/Header.css
    
    ```
    
    ```css
    /* src/styles/Header.css */
    header {
      background-color: #282c34;
      padding: 20px;
      color: white;
    }
    
    ```
    
4. **Import and use the new component in `App.js`**:
    
    ```jsx
    // src/App.js
    import React from 'react';
    import Header from './components/Header';
    import './App.css';
    
    function App() {
      return (
        <div className="App">
          <Header />
          {/* Other components and content */}
        </div>
      );
    }
    
    export default App;
    
    ```
    

This structure and workflow should give you a solid foundation for developing React applications. Feel free to customize and expand the structure as your project grows.

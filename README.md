# Alura Space

## About CSS module 

React supports CSS Modules by default wihtout any additional installation. using 
the standard file naming convention [name].mudule.css. Css module allow for scoped
CSS by automatically creating a unique class name in the format 
[filename]_[classname]__[hash]


Let's say you have a Button component, and your CSS file is 
named Button.module.css with the following CSS code:

```css
.error {
    background-color: red;
}
```

And in another styles file, like styles.css, you also have a class with the 
same name byt hat changes the text color. 


```css
.erro {
    color: blue;
}
```

It is still possible to use both classes in the same file, for example:

```jsx
import React from 'react';
import styles from './Button.module.css';
import './style.css'; 

export default function Botao () {
 return (
   <button className={styles.erro}>Erro</button>;
 )
}
```

# About SASS css 

Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that extends the capabilities of CSS. It provides additional features and functionality to make CSS more powerful and easier to work with. Sass files have a .scss or .sass extension.

Sass introduces several features that are not available in plain CSS, including variables, nesting, mixins, inheritance, and more. These features help in organizing and maintaining CSS code, making it more modular and reusable.

Here's an example of using Sass to define styles:

```scss
// styles.scss

$primary-color: #007bff;
$border-radius: 4px;

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border-radius: $border-radius;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

```


### __Sumary #3__

- Add the files GlobalStyle.scss and _variables.scss;
- How to use normalize.css;
- How to organize and use variable css;
- How to configure font files in the project;
- How to import these fonts using @fontface.
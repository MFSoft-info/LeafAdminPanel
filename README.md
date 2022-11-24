# LeafAdminPanel
Leaf Panel is an admin panel which is in vue.js.

# leals

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
yarn lint:fix
```

## Practices
#### General guidelines

- Clone the project from gitLab & install the node_modules with cmd 
```bash
yarn install
```
after that run this cmd to start project 

```bash
yarn dev
```
##Packages

### Custom Packages

- bootstrap-vue
- bootstrap (5)
- fortawesome
- configuration of custom packages are in main.js

```bash
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

```

### Vue Packages

- vue x
- router vue

### Git 
project have only one branch name is "main"

### Project Layout 
- Project are depends on Two layouts 
- Login 
- BaseLayout

- The Layout change dynamically according to component name if the name is Login , the layout will be set to be Login

```bash
  watch: {
    '$route': {
      immediate: true,
      handler(newValue) {
        newValue.name === 'Login' ? this.isLog = true : this.isLog = false;
      }
    }
  }

```

### Files

The main file is App.js & all components of sidebar in the components folder .

### Routes

-When the user hit "/" path route redirect to home route & all routes set in router folder 

```bash
  {
    path: '/',
    name: 'Home',
    component: () => import('...home')
  },
```

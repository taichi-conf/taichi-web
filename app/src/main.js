import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

// main.js or in a separate directives file
app.directive('no-right-click', {
  inserted: function(el) {
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      return false
    })
  }
})

app.mount('#app')
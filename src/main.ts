import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createSentry } from '@/plugins/Sentry.ts'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)


app.use(createPinia())
app.use(router)

createSentry(app, router)

app.mount('#app')

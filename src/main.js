import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueFullPage from 'vue-fullpage.js'
const app = createApp(App);

// Primevue components
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import InputText from 'primevue/inputtext';
import TextArea from 'primevue/textarea';
import Toast from 'primevue/toast';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';
import Chip from 'primevue/chip';

import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';

app.directive('tooltip', Tooltip);

app.use(ToastService);
app.use(DialogService);

app.component('Button', Button);
app.component('Timeline', Timeline);
app.component('InputText', InputText);
app.component('TextArea', TextArea);
app.component('Toast', Toast);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('Dialog', Dialog);
app.component('Chip', Chip);

// Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'vue-fullpage.js/dist/style.css'
import 'devicon/devicon.min.css';

app.use(PrimeVue, { ripple: true });
app.use(VueFullPage)
app.mount('#app');


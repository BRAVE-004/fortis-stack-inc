import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => import('./components/Home.vue'))
const ContactUs = defineAsyncComponent(() => import('./components/ContactUs.vue'))
const Service = defineAsyncComponent(() => import('./components/Service.vue'))
const SkillPage = defineAsyncComponent(() => import('./components/SkillPage.vue'))
const OurProjects = defineAsyncComponent(() => import('./components/OurProjects.vue'))
const PrivacyPolicy = defineAsyncComponent(() => import('./components/PrivacyPolicy.vue'))
const TermsOfService = defineAsyncComponent(() => import('./components/TermsOfService.vue'))
const AboutUs = defineAsyncComponent(() => import('./components/AboutUs.vue'))

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' }
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
    meta: { transition: 'zoom-rotate' }
  },
  {
    path: '/services',
    name: 'Service',
    component: Service,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/skills',
    name: 'SkillPage',
    component: SkillPage,
    meta: { transition: 'slide-up' }
  },
  {
    path: '/projects',
    name: 'OurProjects',
    component: OurProjects,
    meta: { transition: 'flip' }
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: { transition: 'fade' }
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: TermsOfService,
    meta: { transition: 'fade' }
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
    meta: { transition: 'fade' }
  }
] 
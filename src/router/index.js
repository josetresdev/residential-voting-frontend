import { createRouter, createWebHistory } from 'vue-router';

// Vistas de administrador
import AdminDashboard from '@/views/admin/AdminDashboard.vue';
import OptionsView from '@/views/admin/OptionsView.vue';
import QuestionsView from '@/views/admin/QuestionsView.vue';
import ResultsView from '@/views/admin/ResultsView.vue';
import SessionsView from '@/views/admin/SessionsView.vue';
import UsersView from '@/views/admin/UsersView.vue';

// Vistas de autenticación
import LoginView from '@/views/auth/LoginView.vue';

// Vistas de cliente
import VoteQuestionView from '@/views/client/VoteQuestionView.vue';
import VotingSessionsView from '@/views/client/VotingSessionsView.vue';
import ClientDashboard from '@/views/client/ClientDashboard.vue';
import ClientResultsView from '@/views/client/ResultsView.vue';

// Vistas generales
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  // Rutas públicas
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },

  // Rutas de administrador
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard,
  },
  {
    path: '/admin/options',
    name: 'admin-options',
    component: OptionsView,
  },
  {
    path: '/admin/questions',
    name: 'admin-questions',
    component: QuestionsView,
  },
  {
    path: '/admin/results',
    name: 'admin-results',
    component: ResultsView,
  },
  {
    path: '/admin/sessions',
    name: 'admin-sessions',
    component: SessionsView,
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: UsersView,
  },

  // Rutas de cliente
  {
    path: '/client/dashboard',
    name: 'client-dashboard',
    component: ClientDashboard,
  },
  {
    path: '/client/vote/:sessionId',
    name: 'client-vote-question',
    component: VoteQuestionView,
    props: true,
  },
  {
    path: '/client/sessions',
    name: 'client-voting-sessions',
    component: VotingSessionsView,
  },
  {
    path: '/client/results',
    name: 'client-results',
    component: ClientResultsView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

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
    path: '/iniciar-sesion',
    name: 'login',
    component: LoginView,
  },

  // Rutas de administrador
  {
    path: '/administrador/panel',
    name: 'admin-dashboard',
    component: AdminDashboard,
  },
  {
    path: '/administrador/opciones',
    name: 'admin-options',
    component: OptionsView,
  },
  {
    path: '/administrador/preguntas',
    name: 'admin-questions',
    component: QuestionsView,
  },
  {
    path: '/administrador/resultados',
    name: 'admin-results',
    component: ResultsView,
  },
  {
    path: '/administrador/sesiones-votacion',
    name: 'admin-sessions',
    component: SessionsView,
  },
  {
    path: '/administrador/usuarios',
    name: 'admin-users',
    component: UsersView,
  },

  // Rutas de cliente
  {
    path: '/cliente/panel',
    name: 'client-dashboard',
    component: ClientDashboard,
  },
  {
    path: '/cliente/votar/:sessionId',
    name: 'client-vote-question',
    component: VoteQuestionView,
    props: true,
  },
  {
    path: '/cliente/sesiones-votacion',
    name: 'client-voting-sessions',
    component: VotingSessionsView,
  },
  {
    path: '/cliente/resultados',
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

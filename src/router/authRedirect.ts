import { router } from 'expo-router';

export function redirectToLogin() {
  router.replace('/login');
}

export function redirectToHome() {
  router.replace('/home');
}

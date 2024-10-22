import { ref, onMounted } from 'vue';

const isUserAuthenticated = ref(false);

export function useAuth() {
  onMounted(() => {
    const token = localStorage.getItem('token');
    isUserAuthenticated.value = !!token;
  });

  function login(token) {
    localStorage.setItem('token', token);
    isUserAuthenticated.value = true;
  }

  function logout() {
    localStorage.removeItem('token');
    isUserAuthenticated.value = false;
  }

  return {
    isUserAuthenticated,
    login,
    logout,
  };
}

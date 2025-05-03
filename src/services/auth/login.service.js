export default {
  async loginUser(email, password) {
    if (
      email === 'josetrespalaciosbedoya@gmail.com' &&
      password === '123456789'
    ) {
      return {
        success: true,
        message: 'Bienvenido al sistema',
        user: { email, role: 'admin' },
      };
    }

    return { success: false, message: 'Credenciales incorrectas' };
  },
};

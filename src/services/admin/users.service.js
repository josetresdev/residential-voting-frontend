const mockUsers = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'Administrador',
  },
  {
    id: 2,
    name: 'Ana Gómez',
    email: 'ana@example.com',
    role: 'Usuario',
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    email: 'carlos@example.com',
    role: 'Moderador',
  },
  {
    id: 4,
    name: 'Marta López',
    email: 'marta@example.com',
    role: 'Usuario',
  },
  {
    id: 5,
    name: 'David García',
    email: 'david@example.com',
    role: 'Administrador',
  },
  {
    id: 6,
    name: 'Pedro Sánchez',
    email: 'pedro@example.com',
    role: 'Moderador',
  },
  {
    id: 7,
    name: 'Lucía Fernández',
    email: 'lucia@example.com',
    role: 'Usuario',
  },
  {
    id: 8,
    name: 'Javier Rodríguez',
    email: 'javier@example.com',
    role: 'Administrador',
  },
  {
    id: 9,
    name: 'Beatriz Martínez',
    email: 'beatriz@example.com',
    role: 'Moderador',
  },
  {
    id: 10,
    name: 'Luis Gómez',
    email: 'luis@example.com',
    role: 'Usuario',
  },
];

export default {
  getUsers() {
    return Promise.resolve([...mockUsers]);
  },

  getRoleClass(role) {
    switch (role) {
      case 'Administrador':
        return 'badge-admin';
      case 'Moderador':
        return 'badge-moderator';
      case 'Usuario':
      default:
        return 'badge-user';
    }
  },

  sortUsers(users, field) {
    return [...users].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  },

  paginateUsers(users, currentPage, usersPerPage) {
    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;
    return users.slice(start, end);
  },

  updateUser(users, updatedUser) {
    const index = users.findIndex((u) => u.id === updatedUser.id);
    if (index !== -1) {
      const newUsers = [...users];
      newUsers.splice(index, 1, { ...updatedUser });
      return newUsers;
    }
    return users;
  },

  deleteUser(users, userId) {
    return users.filter((u) => u.id !== userId);
  },
};

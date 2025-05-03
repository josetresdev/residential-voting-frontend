const mockUsers = [
  {
    id: 11,
    uuid: '18274146-3f87-41c6-98ea-7aa1b900ba06',
    name: 'Alberto Linares',
    email: 'albertolinares@gmail.com',
    apartment_number: null,
    role: 'voter',
  },
  {
    id: 10,
    uuid: 'd55dce4c-3221-4726-b298-d84e2c558f58',
    name: 'Wilson Trespalacios',
    email: 'wilsontrespalacios@gmail.com',
    apartment_number: null,
    role: 'voter',
  },
  {
    id: 9,
    uuid: '6e5c9d3f-0e35-4237-95c3-634c10b04bb9',
    name: 'Molly Trespalacios',
    email: 'molly@gmail.com',
    apartment_number: 'G410',
    role: 'voter',
  },
  {
    id: 8,
    uuid: '0bbe8f34-3306-4464-a248-b328db9e7457',
    name: 'Angely Tabares',
    email: 'angelytabares@gmail.com',
    apartment_number: 'G407',
    role: 'voter',
  },
  {
    id: 4,
    uuid: 'd426b86b-7f59-4b4a-b6ba-df423c8be097',
    name: 'Ana Torres',
    email: 'ana.torres@correo.com',
    apartment_number: 'D404',
    role: 'moderator',
  },
  {
    id: 5,
    uuid: '8bcf16d3-bcb4-46ea-bb5e-98e0c56f9ab6',
    name: 'Javier Sánchez',
    email: 'javier.sanchez@correo.com',
    apartment_number: 'E505',
    role: 'user',
  },
  {
    id: 6,
    uuid: 'c1f616fb-8efb-441f-b960-6e91773d4f74',
    name: 'María López',
    email: 'maria.lopez@correo.com',
    apartment_number: 'F606',
    role: 'voter',
  },
  {
    id: 7,
    uuid: 'e5b8a923-52f1-4d7f-b2cf-774b0db551f7',
    name: 'Jose Trespalacios',
    email: 'josetrespalacios@gmail.com',
    apartment_number: 'G707',
    role: 'admin',
  },
  {
    id: 1,
    uuid: 'a61f3b62-9d25-4b8f-bb84-63284e9b56f2',
    name: 'John Doe Updated',
    email: 'john.doe.updated@example.com',
    apartment_number: 'A101',
    role: 'voter',
  },
  {
    id: 3,
    uuid: 'b31e7c8f-82d3-4d36-bfa7-21f3fdcba2ab',
    name: 'Carlos Méndez',
    email: 'carlos.mendez@gmail.com',
    apartment_number: 'C303',
    role: 'voter',
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

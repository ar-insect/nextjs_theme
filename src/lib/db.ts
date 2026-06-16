type User = {
  id: string;
  name: string;
  email: string;
};

const users: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com"
  }
];

export async function listUsers() {
  return users;
}

export async function getUserById(id: string) {
  return users.find((user) => user.id === id) ?? null;
}

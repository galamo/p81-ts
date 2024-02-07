function getUsersByKeyGen<T, Property extends keyof T>(
  users: Array<T>,
  key: Property,
  search: string
): T[] {
  return users.filter((user) => user[key].toString().includes(search));
}

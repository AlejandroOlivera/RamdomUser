export const getUsers = async (userCount: number = 10) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${userCount}`,
  );
  return await response.json();
};

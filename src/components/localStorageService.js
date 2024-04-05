export const saveUserScore = (userName, score) => {
  if (!userName) return; // use username for the storage

  const users = JSON.parse(localStorage.getItem('users')) || {};
  const user = users[userName] || { score: 0, level: 1 };
  user.score += score; // Update der Punktzahl
  user.level = Math.floor(user.score / 100) + 1;
  users[userName] = user;
  localStorage.setItem('users', JSON.stringify(users));
};

export const getLeaderboard = () => { 
  const users = JSON.parse(localStorage.getItem('users')) || {};
  return Object.entries(users)
    .map(([userName, { score, level }]) => ({ userName, score, level }))
    .sort((a, b) => b.score - a.score); 
};


export const saveData = (key, data) => {
  const dataString = JSON.stringify(data); // Josin file for the items
  localStorage.setItem(key, dataString);
};

export const loadData = (key) => {
  const dataString = localStorage.getItem(key);
  return dataString ? JSON.parse(dataString) : null;
};

export const clearData = (key) => {
  localStorage.removeItem(key);
};

const sessionIdToUserMap = new Map();

exports.setUser = (sessionId, user) => {
  sessionIdToUserMap.set(sessionId, user);
};

exports.getUser = (sessionId) => {
  return sessionIdToUserMap.get(sessionId);
};

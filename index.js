const userInfo = {
  username : "user1",
  password : "Password123"
};

function createLoginTracker(userInfo){
  let attemptCount = 0;

 const login = (passwordAttempt) => {
  if (attemptCount >=3){
    return "Account locked due to too many failed login attempts";
  }

  if (passwordAttempt === userInfo.password) {
    return "Login Successful!";
  }

  attemptCount++;
  return "Attempt"+ attemptCount + "Login failes"
};
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


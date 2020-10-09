function login(username: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "tester123" && password === "tester123")
        resolve("Login Success");
      else reject("Login Fail");
    }, 2000);
  });
}

export { login };

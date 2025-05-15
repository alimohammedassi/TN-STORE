class AuthSystem {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  }

  signUp(name, email, password) {
    if (this.users.some((user) => user.email === email)) {
      return { success: false, message: "Email already exists" };
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return { success: true, user: newUser };
  }

  login(email, password) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
      return { success: true, user };
    }

    return { success: false, message: "Invalid email or password" };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}

const auth = new AuthSystem();

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const result = auth.login(email, password);

    if (result.success) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert(result.message);
    }
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById(
      "signupConfirmPassword"
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const result = auth.signUp(name, email, password);

    if (result.success) {
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert(result.message);
    }
  });
}

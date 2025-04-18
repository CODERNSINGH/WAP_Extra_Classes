export const Signup = async ({email, password}) => {
    try {
      const response = await fetch("/api/auth/signup", {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
        method: "POST",
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      
      return data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }
  
  export const Login = async ({email, password}) => {
    try {
      const response = await fetch("/api/auth/login", {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
        method: "POST",
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.err || "Login failed");
      }
      
      // Store token in localStorage upon successful login
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
  
  export const Logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return { message: "No active session" };
      }
      
      const response = await fetch("/api/auth/logout", {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token }),
        method: "POST",
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.err || "Logout failed");
      }
      
      // Remove token from localStorage upon successful logout
      localStorage.removeItem("token");
      
      return data;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }
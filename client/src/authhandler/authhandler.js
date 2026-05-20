import API from "../api/login-signup";

export const login = async (email, password) => {
  try {
    const res = await API.post("/login", {email, password});

    alert ("login successful");

    localStorage.setItem("token", res.data.token);

    return res.data;
    
  }catch(err){
    alert(err.response?.data?.message || err.message);
  }
};

export const registerr = async (username, email, password) =>{
  try {
    const res = await API.post ("/signup", {username, email, password});

    alert("registration successful");

    localStorage.setItem("token", res.data.token);

    return res.data;

  }catch(err){
    alert(err.response?.data?.message || err.message);
  }
};
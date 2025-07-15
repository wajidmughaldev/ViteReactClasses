import React from "react";

const StateAdvance = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
    checkbox: false,
  });
  // const [username,setUsername] = React.useState('admin')
  // const [password,setPassword] = React.useState('admin123')
  // const [checkbox,setCheckbox] = React.useState(true)
    const valueHandler = (event) => {
       const{name,value,type}=event.target;
       setFormData((stateCopy)=>({
        ...stateCopy,
        [name]: type === "checkbox" ? event.target.checked : value
       }))
    };
  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="username"
        onChange={valueHandler}
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={valueHandler}
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="password"
        onChange={valueHandler}
      />
      <br />

      <label>Accept Privacy Policy</label>
      <input
        type="checkbox"
        name="checkbox"
        checked={formData.checkbox}
        onChange={valueHandler}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default StateAdvance;

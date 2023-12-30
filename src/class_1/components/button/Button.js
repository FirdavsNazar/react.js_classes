
import Header from "../header/Header";

const Button = () => {

    const user = true
    const login = <div style={{ textAlign: "center" }}><button>Login first!</button></div>;
    return user ? <Header/> : login
  }

  export default Button
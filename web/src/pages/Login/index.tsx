import { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import Titulo from "../../components/Titulo";
import usePost from "../../usePost";
import authStore from "../../stores/auth.store";
import { useNavigate } from "react-router-dom";

interface ILogin {
  email: string,
  password: string
}

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { sendData, error, success, response } = usePost()
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user: ILogin = {
      email: email,
      password: password
    }

    try {
      sendData({ url: "auth/login", data: user })
      authStore.login({email: email, token: response})
      response && navigate("/dashboard")
    } catch (error) {
      error && alert("Error while logging in.")
    }
  }

  return (
    <>
      <Titulo>Login</Titulo>
      <CampoDigitacao
        type="text"
        value={email}
        placeholder="example@mail.com"
        onChange={setEmail}
        label="E-mail"
      />
    </>
  )
}
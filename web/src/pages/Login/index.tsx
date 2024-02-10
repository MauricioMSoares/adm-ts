import { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";

export default function Login() {
  const [email, setEmail] = useState("")

  return (
    <>
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
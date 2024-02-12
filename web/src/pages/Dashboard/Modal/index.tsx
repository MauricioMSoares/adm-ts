import { Box, Modal } from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import { useState } from "react";
import IProfissional from "../../../types/IProfissional";
import usePost from "../../../usePost";
import authStore from "../../../stores/auth.store";
import CampoDigitacao from "../../../components/CampoDigitacao";
import Container from "../../../components/Container";

const CustomBox = styled(Box)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 30vw;
max-height: 90vh;
overflow-y: auto;
background-color: white;
border: none;
border-radius: 16px;
padding: 1em 5em;
`

export default function ModalRegister({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasHealthPlan, setHasHealthPlan] = useState(false)
  const [image, setImage] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [crm, setCrm] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')

  const {sendData} = usePost()
  const {user} = authStore

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const professional: IProfissional = {
      name: name,
      email: email,
      password: password,
      hasHealthPlan: hasHealthPlan,
      healthPlan: ["Standard"],
      isActive: true,
      image: image,
      specialty: specialty,
      crm: crm,
      phone: phone,
      address: {
        cep: cep,
        rua: street,
        numero: number,
        complemento: complement,
        estado: state
      }
    }

    await sendData({ url: 'especialista', data: professional, token: user.token })
  }
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="User registration form"
      aria-describedby="This modal contains the specialist's data"
    >
      <CustomBox>
        <Titulo>Register the specialist typing the data below:</Titulo>
        <form onSubmit={handleSubmit}>
          <Container>
            <CampoDigitacao type="text" label="Name" value={name} onChange={setName} placeholder="Name" />
            <CampoDigitacao type="text" label="Email" value={email} onChange={setEmail} placeholder="Email" />
            <CampoDigitacao type="password" label="Password" value={password} onChange={setPassword} placeholder="Password" />
            <CampoDigitacao type="text" label="Specialty" value={specialty} onChange={setSpecialty} placeholder="Specialty" />
            <CampoDigitacao type="text" label="CRM" value={crm} onChange={setCrm} placeholder="CRM" />
            <CampoDigitacao type="text" label="CEP" value={cep} onChange={setCep} placeholder="CEP" />
            <CampoDigitacao type="text" label="Street" value={street} onChange={setStreet} placeholder="Street" />
            <CampoDigitacao type="text" label="Number" value={number} onChange={setNumber} placeholder="Number" />
            <CampoDigitacao type="text" label="Complement" value={complement} onChange={setComplement} placeholder="Complement" />
            <CampoDigitacao type="text" label="State" value={state} onChange={setState} placeholder="State" />
            <CampoDigitacao type="text" label="Phone" value={phone} onChange={setPhone} placeholder="Phone" />
            <button type="submit">Register</button>
          </Container>
        </form>
      </CustomBox>
    </Modal>
  )
}
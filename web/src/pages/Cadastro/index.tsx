import { Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import IClinica from "../../types/IClinica"
import usePost from "../../usePost"
import { useNavigate } from "react-router-dom"

interface CustomProps {
  color: string
}

const CustomStep = styled.div<CustomProps>`
  background-color: ${props => props.color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`

export default function Cadastro() {
  const [activeStep, setActiveStep] = useState(0)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [state, setState] = useState('')

  const { sendData, error, success } = usePost()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setActiveStep(activeStep + 1)
    const clinic: IClinica = {
      email: email,
      nome: name,
      senha: password,
      endereco: {
        cep: cep,
        rua: street,
        numero: number,
        complemento: complement,
        estado: state
      }
    }

    if (activeStep !== 0) {
      try {
        sendData({ url: 'clinica', data: clinic });
        navigate('/login');
      } catch (error) {
        error && alert('Error while sending data.')
      }
    }

    setActiveStep(activeStep + 1);
  }

  return (
    <Stepper activeStep={activeStep}>
      <Step>
        <StepLabel
          StepIconComponent={(props) => (
            <CustomStep color={props.active ? 'lightblue' : 'lightgray'} />
          )}
        />
      </Step>
      <Step>
        <StepLabel
          StepIconComponent={(props) => (
            <CustomStep color={props.active ? 'lightblue' : 'lightgray'} />
          )}
        />
      </Step>
    </Stepper>
  )
}
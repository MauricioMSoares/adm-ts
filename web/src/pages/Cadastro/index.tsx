import { Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"

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
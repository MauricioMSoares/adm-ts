import styled from "styled-components"

const Input = styled.input`
background: #F0F0F0;
margin: 1em 0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 16px;
`

interface Props {
  type: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  label?: string
}

const Label = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: var(--azul-escuro);
`

const Container = styled.div`
width: 100%;
`

export default function CampoDigitacao({
  type, value, placeholder, onChange, label
}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  )
}
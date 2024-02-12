import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [response, setResponse] = useState("")

  async function sendData<T>({ url, data }:
    { url: string, data: T }) {
    try {
      const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      setSuccess(true)
      const convertedResponse = await response.json()
      setResponse(convertedResponse.token)
    } catch (error) {
      setError("Could not send the data.")
    }
  }

  return { error, success, sendData, response }
}
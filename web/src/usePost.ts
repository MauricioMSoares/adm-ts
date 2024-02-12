import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [response, setResponse] = useState("")

  async function sendData<T>({ url, data, token }:
    { url: string, data: T, token?: string }) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }
    try {
      const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers,
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
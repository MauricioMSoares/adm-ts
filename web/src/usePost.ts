import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function sendData<T>({ url, data }:
    { url: string, data: T }) {
    try {
      await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      setSuccess(true)
    } catch (error) {
      setError("Could not send the data.")
    }
  }

  return { error, success, sendData }
}
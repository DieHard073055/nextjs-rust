"use client"
import {useEffect, useState} from "react";

export default function Home() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/handler").then(
        (res) => {
            res.json().then(
                (value) => {
                    console.log(value)
                    setMessage(value["message"])
                }
            )
        }
    )
  }, [])
  return (

      <>{message ? 'Message from Rust: ' + message : "Loading Message"}</>
  )
}

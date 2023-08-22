import React from 'react'
import Link from "next/link"
function About() {
  return (
    <>
    <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    </nav>
    <h1>About page</h1>
    </>
  )
}

export default About

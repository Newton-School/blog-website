"use client"
import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"

export default function PostDetail({ params }) {
  // Complete the function
  const router = useRouter();
  const { id } = router.query;
  return(
    <>
    <nav>
      {console.log(params)}
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    </nav>
    <h1>
      Post Detail: {id}
    </h1>
    </>


  )
}
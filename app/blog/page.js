import React from 'react'
import Navbar from '@/components/home/Navbar'
import Footer from "@/components/home/Footer"
import BlogCard from "@/components/home/blogPage/blog"

function Blog() {
  return (
    <>
       <Navbar/>
       <BlogCard/>
       <Footer/>
    </>
  )
}

export default Blog
import BlogCard from "../components/BlogCard"


const Home = () => {
  return (
    <div className=" flex flex-col lg:flex-row bg-amber-100 w-full">

      <div className="w-full lg:w-[65%]">
          <div className="flex flex-wrap">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          
          </div>
        
      </div >
      
      <div className="hidden lg:block lg:w-[35%] bg-amber-100 m-6">
       
       <div className="text-black w-full p-6 bg-amber-50">
      
          <div>
            <h2>Announcements</h2>
            {/* announcements */}
          </div>
        <br />
          <div>
            <h2>Recent Blogs</h2>
            {/* recent blogs */}
          </div>
        <br />
          <div>
            <h2>Pinned Blogs</h2>
            {/* pinned blogs */}
          </div>
  
       </div>

    </div>
    </div> 
  
  )
}

export default Home

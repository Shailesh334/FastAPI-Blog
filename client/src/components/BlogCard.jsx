

const BlogCard = () => {
  return (
    <div className="card text-black bg-amber-50 sm:w-full  m-6 shadow-lg">
        <div className="card-body">
            <div className="flex gap-2">
                <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                </div>
                </div>
            <h2 className="card-title">Card Title</h2>
            </div>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts
                A card component has a figure, a body part, and inside body there are title and actions parts
                A card component has a figure, a body part, and inside body there are title and actions parts
                A card component has a figure, a body part, and inside body there are title and actions parts


            </p>

            <div className="card-actions justify-end">
                <button className="btn bg-amber-100 text-black hover:bg-amber-50">Read</button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard

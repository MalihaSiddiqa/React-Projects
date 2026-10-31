
const Navbar = ({ showPage, page}) => {

    const navBtnClasses = `border-b-2 px-2 text-sm font-medium `
  return (
    <nav className="border-b border-gray-200 bg-white py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-x-2 px-4">
            <span className=" text-black text-4xl font-serif">Profile Builder</span>

            <div className="flex">
                <button onClick={() => showPage('create')} className={`${navBtnClasses}
                 ${page=='create' ? 'border-gray-900 text-gray-900' : 'text-gray-500 border-transparent'}`}>
                    Create Profile
                </button>
                <button onClick={() => showPage('profiles')} className={`${navBtnClasses} 
                ${page=='profiles' ? 'border-gray-900 text-gray-900' : 'text-gray-500 border-transparent'}`}>
                    Saved Profiles
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
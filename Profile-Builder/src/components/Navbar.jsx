const Navbar = ({ showPage, page }) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Profile Builder</h1>

        <div className="flex gap-4">
          <button
            onClick={() => showPage("create")}
            className={`pb-1 text-sm font-medium border-b-2 transition ${
              page === "create"
                ? "border-blue-600 text-blue-600"
                : "border-transparent"
            }`}
          >
            Create Profile
          </button>
          <button
            onClick={() => showPage("profiles")}
            className={`pb-1 text-sm font-medium border-b-2 transition ${
              page === "profiles"
                ? "border-blue-600 text-blue-600"
                : "border-transparent"
            }`}
          >
            Saved Profiles
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
const ProfileView = ({ image, name, email, phnNo, about, skills, customSections }) => {
  return (
    <div className="flex flex-col gap-3">
      {image && <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto object-cover" />}
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p className="text-sm text-center text-stone-600">{email} | {phnNo}</p>

      <div className="mt-3">
        <h4 className="font-semibold text-stone-800">About</h4>
        <p className="text-stone-700">{about}</p>
      </div>

      <div className="mt-2">
        <h4 className="font-semibold text-stone-800">Skills</h4>
        <p className="text-stone-700">{skills}</p>
      </div>

      {/* Render Custom Dynamic Sections */}
      {customSections?.map((section) => (
        <div key={section.id} className="mt-2 border-t pt-2 border-stone-300">
          <h4 className="font-semibold text-stone-800">{section.title || "Custom Section"}</h4>
          <p className="text-stone-700 whitespace-pre-wrap">{section.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileView;
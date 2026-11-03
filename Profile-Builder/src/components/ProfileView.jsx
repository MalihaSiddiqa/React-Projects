const ProfileView = ({
  image,
  name,
  email,
  phnNo,
  about,
  skills,
  customSections,
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center pb-4 border-b border-gray-200">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto object-cover border border-gray-200 shadow-sm"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-2xl mx-auto">
            {name.charAt(0).toUpperCase() }
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mt-2">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {email} {phnNo && `• ${phnNo}`}
        </p>
      </div>

      {about && (
        <div>
          <h4 className="text-xs font-semibold ">
            About
          </h4>
          <p className="text-sm text-gray-700 mt-1">{about}</p>
        </div>
      )}

      {skills && (
        <div>
          <h4 className="text-xs font-semibold">
            Skills
          </h4>
          <p className="text-sm text-gray-700 mt-1">{skills}</p>
        </div>
      )}

      {customSections.length > 0 && (
        <div className="pt-2 border-t border-gray-100 space-y-3">
          {customSections.map((section) => (
            <div key={section.id}>
              <h4 className="text-xs font-semibold text-gray-400">
                {section.title}
              </h4>
              <p className="text-sm text-gray-700 mt-1 ">
                {section.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileView;
import React, { useState } from "react";
import ProfileView from "./ProfileView";

const ProfileList = ({ profiles, deleteProfile }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  if (profiles.length === 0) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-xl text-center">
        <h3 className="text-lg font-semibold">No profiles yet</h3>
        <p className="text-sm text-gray-500 mt-1">
          Switch to "Create Profile" to make your first profile card.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl w-full mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Saved Profiles ({profiles.length})
      </h2>

      <div className="space-y-4">
        {profiles.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProfile(item)}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer relative flex flex-col justify-between"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteProfile(item.id);
              }}
              title="Delete Profile"
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg font-bold"
            >
              ✕
            </button>

            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {item.name ? item.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{item.email}</p>
                </div>
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {item.about && (
                  <p className="line-clamp-2">
                    <span className="font-medium text-gray-700">About: </span>
                    {item.about}
                  </p>
                )}
                {item.skills && (
                  <p className="line-clamp-1">
                    <span className="font-medium text-gray-700">Skills: </span>
                    {item.skills}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div
          onClick={() => setSelectedProfile(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-3 right-4 font-bold text-lg"
            >
              ✕
            </button>
            <ProfileView
              image={selectedProfile.image}
              name={selectedProfile.name}
              email={selectedProfile.email}
              phnNo={selectedProfile.phnNo}
              about={selectedProfile.about}
              skills={selectedProfile.skills}
              customSections={selectedProfile.customSections}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileList;
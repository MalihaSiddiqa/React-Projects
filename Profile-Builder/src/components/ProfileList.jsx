import React from 'react';
import { useState } from 'react';
import ProfileView from './ProfileView';

const ProfileList = ({ profiles, deleteProfile }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  if (!profiles || profiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 m-8 p-10 bg-stone-200 rounded-3xl shadow-md text-stone-600">
        <h2 className="text-2xl font-serif font-semibold">No profiles found</h2>
        <p className="mt-2 text-stone-500">
          Create a profile from the "Create Profile" tab to see it listed here.
        </p>
      </div>
    );
  }
  

  return (
    <div
     className="flex flex-col items-center flex-1 m-8 p-6 shadow-md shadow-stone-400 rounded-3xl bg-stone-200">
      <h1 className="text-4xl font-serif p-3 border-b-2 border-stone-100 mb-8">
        Saved Profiles ({profiles.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {profiles.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProfile(item)}
            className="bg-stone-300 rounded-2xl shadow-xl p-5 flex flex-col justify-between relative border border-stone-400/30"
          >
            
            <button
              onClick={() => deleteProfile(item.id)}
              title="Delete Profile"
              className="absolute top-3 right-4 text-stone-500 hover:text-red-600 font-bold text-xl transition"
            >
              ✕
            </button>

            <div>
  
              <div className="flex items-center gap-4 border-b border-stone-400/50 pb-4 mb-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-stone-500 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-stone-400 flex items-center justify-center text-white text-2xl font-serif font-bold shadow-sm">
                    {item.name ? item.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}

                <div>
                    <h3 className="text-xl font-bold font-serif text-stone-900">{item.name }</h3>
                    <p className="text-xs text-stone-600">{item.email}</p>
                    <p className="text-xs text-stone-600">{item.phnNo}</p>
                
                </div>
              </div>

                 <div className="mb-3">
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                    About
                  </span>
                  <p className="text-sm text-stone-800 whitespace-pre-line mt-0.5">
                    {item.about}
                  </p>
                </div>
            
                <div className="mb-3">
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                    Skills
                  </span>
                  <p className="text-sm text-stone-800 whitespace-pre-line mt-0.5">
                    {item.skills}
                  </p>
                </div>
        
              {item.customSections && item.customSections.length > 0 && (
                <div className="pt-2 border-t border-stone-400/40 flex flex-col gap-2">
                  {item.customSections.map((sec) => (
                    <div key={sec.id}>
                      <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                        {sec.title || 'Custom Section'}
                      </span>
                      <p className="text-sm text-stone-800 whitespace-pre-line mt-0.5">
                        {sec.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div 
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
        >
          <div 
            className="bg-stone-100 p-6 rounded-3xl shadow-2xl relative max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-5 text-gray-600 hover:text-black font-bold text-xl"
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

}
export default ProfileList;

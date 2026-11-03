import { useState } from "react";
import ProfileView from "./ProfileView";

const ProfileForm = ({ onAddProfile }) => {
  const [viewProfile, setViewProfile] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    phnNo: "",
    about: "",
    skills: "",
  });

  const [customSections, setCustomSections] = useState([]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleAddSection = () => {
    setCustomSections([
      ...customSections,
      { id: Date.now(), title: "", value: "" },
    ]);
  };

  const handleSectionChange = (id, field, text) => {
    setCustomSections(
      customSections.map((section) =>
        section.id === id ? { ...section, [field]: text } : section
      )
    );
  };

  const handleRemoveSection = (id) => {
    setCustomSections(customSections.filter((section) => section.id !== id));
  };

  const OnCreateProfile = (e) => {
    e.preventDefault();

    const completeProfile = {
      ...formData,
      customSections,
    };

    if (onAddProfile) {
      onAddProfile(completeProfile);
    }

    setViewProfile(true);
  };

  return (
    <div className="max-w-3xl m-auto my-8 p-6 bg-white shadow-sm rounded-xl ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 ">
        Create Your Profile
      </h2>

      <form onSubmit={OnCreateProfile} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              name="phnNo"
              placeholder="+91"
              value={formData.phnNo}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              About Yourself
            </label>
            <textarea
              required
              rows={3}
              name="about"
              placeholder="Brief summary about yourself..."
              value={formData.about}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1">
              Skills
            </label>
            <textarea
              required
              rows={3}
              name="skills"
              placeholder="React, JavaScript, HTML, CSS..."
              value={formData.skills}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {customSections.length > 0 && (
            <h3 className="font-bold">
              Additional Sections
            </h3>
          )}

          {customSections.map((section) => (
            <div
              key={section.id}
              className="p-4  rounded-lg relative space-y-3"
            >
              <button
                type="button"
                onClick={() => handleRemoveSection(section.id)}
                className="absolute top-2 right-3 hover:text-red-500 text-lg font-bold"
              >
                ✕
              </button>

              <div>
                <label className="text-xs text-gray-600 mb-1">
                  Section Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Projects, Certifications"
                  value={section.title}
                  onChange={(e) =>
                    handleSectionChange(section.id, "title", e.target.value)
                  }
                  className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm "
                />
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1">
                  Section Content
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your achievements or details..."
                  value={section.value}
                  onChange={(e) =>
                    handleSectionChange(section.id, "value", e.target.value)
                  }
                  className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm "
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddSection}
            className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            + Add Custom Section
          </button>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg shadow-sm"
          >
            Save & View Profile
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {viewProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative  overflow-y-auto">
            <button
              onClick={() => setViewProfile(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 font-bold text-lg"
            >
              ✕
            </button>
            <ProfileView
              image={formData.image}
              name={formData.name}
              email={formData.email}
              phnNo={formData.phnNo}
              about={formData.about}
              skills={formData.skills}
              customSections={customSections}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
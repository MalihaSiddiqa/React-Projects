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

  const [customSections, setCustomSections] = useState([])

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
    <div className="flex flex-col items-center flex-1 m-8 p-4 shadow-md shadow-stone-400 rounded-3xl bg-stone-200">
      <h1 className="text-4xl font-serif p-3 border-b-2 border-stone-100">
        Create your profile
      </h1>

      <form
        onSubmit={OnCreateProfile}
        className="flex flex-wrap p-12 w-full rounded-2xl justify-between"
      >
        <div className="flex flex-row w-full justify-around mb-6">
          <div className="rounded-2xl shadow-2xl bg-stone-300 flex flex-col h-30 w-100 m-3 p-3">
            <label
              htmlFor="imageUpload"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              Upload Image
            </label>
            <input
              required
              id="imageUpload"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>

          <div className="rounded-2xl shadow-2xl bg-stone-300 flex flex-col h-30 w-100 m-3 p-3">
            <label
              htmlFor="name"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              Enter Your Name
            </label>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="Type Here.."
              value={formData.name}
              onChange={onChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>
        </div>

        <div className="flex flex-row w-full justify-around mb-6">
          <div className="rounded-2xl shadow-2xl bg-stone-300 flex flex-col h-30 w-100 m-3 p-3">
            <label
              htmlFor="email"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              Enter Your E-mail
            </label>
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder="Type Here.."
              value={formData.email}
              onChange={onChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>

          <div className="rounded-2xl shadow-2xl bg-stone-300 flex flex-col h-30 w-100 m-3 p-3">
            <label
              htmlFor="phnNo"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              Enter Your Phone No
            </label>
            <input
              required
              id="phnNo"
              type="tel"
              name="phnNo"
              placeholder="Type Here.."
              value={formData.phnNo}
              onChange={onChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>
        </div>

        <div className="flex flex-row w-full justify-around mb-6">
          <div className="w-100 rounded-2xl shadow-2xl bg-stone-300 flex flex-col m-6 p-3">
            <label
              htmlFor="about"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              About Yourself
            </label>
            <textarea
              required
              id="about"
              rows={4}
              name="about"
              placeholder="Type Here.."
              value={formData.about}
              onChange={onChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500 resize-none overflow-hidden"
            />
          </div>

          <div className="w-100 rounded-2xl shadow-2xl bg-stone-300 flex flex-col m-6 p-3">
            <label
              htmlFor="skills"
              className="font-serif border-stone-100 border-b text-xl pl-5 p-2"
            >
              Enter your skills
            </label>
            <textarea
              required
              id="skills"
              rows={4}
              name="skills"
              placeholder="Type Here.."
              value={formData.skills}
              onChange={onChange}
              className="bg-stone-100 m-2 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-stone-500 resize-none overflow-hidden"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 my-4">
          {customSections.map((section) => (
            <div
              key={section.id}
              className="w-100 rounded-2xl shadow-2xl bg-stone-300 flex flex-col p-4 relative"
            >
              <button
                type="button"
                onClick={() => handleRemoveSection(section.id)}
                className="absolute top-2 right-4 text-stone-500 hover:text-red-600 font-bold text-lg"
              >
                ✕
              </button>

              <label className="font-serif border-stone-100 border-b text-sm pl-2 p-1 font-semibold">
                Section Name
              </label>
              <input
                type="text"
                placeholder="e.g., Projects, Certifications, Hobbies..."
                value={section.title}
                onChange={(e) =>
                  handleSectionChange(section.id, "title", e.target.value)
                }
                className="bg-stone-100 m-2 p-2 rounded-xl outline-none focus:ring-2 focus:ring-stone-500"
              />

              <label className="font-serif border-stone-100 border-b text-sm pl-2 p-1 font-semibold">
                Section Content
              </label>
              <textarea
                rows={3}
                placeholder="Type section details here..."
                value={section.value}
                onChange={(e) =>
                  handleSectionChange(section.id, "value", e.target.value)
                }
                className="bg-stone-100 m-2 p-2 rounded-xl outline-none focus:ring-2 focus:ring-stone-500 resize-none"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddSection}
            className="bg-stone-400 hover:bg-stone-500 text-stone-900 font-medium px-5 py-2 rounded-2xl shadow transition"
          >
            + Add Section
          </button>
        </div>

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="bg-stone-500 hover:bg-stone-600 text-3xl text-white p-3 shadow-md rounded-2xl px-8"
          >
            Create Profile
          </button>
        </div>
      </form>

      {viewProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-stone-100 p-6 rounded-3xl shadow-2xl relative max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewProfile(false)}
              className="absolute top-4 right-5 text-gray-600 hover:text-black font-bold text-xl"
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
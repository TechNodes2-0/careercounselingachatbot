"use client";
import React, { useState } from "react";

const EditProfile = () => {
  const [educationLevel, setEducationLevel] = useState("");
  const [std, setStd] = useState("");
  const [interest, setInterest] = useState("");
  const [achievement, setAchievement] = useState("");
  const [skills, setSkills] = useState("");
  const [skillChips, setSkillChips] = useState([]);

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
    setStd("");
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleAddSkill = () => {
    if (skills.trim() !== "") {
      setSkillChips((prevChips) => [...prevChips, skills.trim()]);
      setSkills("");
    }
  };

  const handleRemoveSkill = (index) => {
    setSkillChips((prevChips) => prevChips.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-900">
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              Tell us abouy yourself?
            </h2>
          </div>

          {/* Card */}
          <div className="relative z-10 p-4 mt-5 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="education-level"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Level of Education:
                </label>
                <select
                  id="education-level"
                  className="block w-full p-4 mt-1 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 form-select"
                  value={educationLevel}
                  onChange={handleEducationLevelChange}
                >
                  <option value="">Select</option>
                  <option value="secondary">Secondary Education</option>
                  <option value="higherSecondary">
                    Higher Secondary Education
                  </option>
                </select>
              </div>

              {educationLevel && (
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="std"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Standard:
                  </label>
                  <select
                    id="std"
                    className="block w-full p-4 mt-1 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 form-select"
                    value={std}
                    onChange={(e) => setStd(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                  </select>
                </div>
              )}

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-name-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Interest
                </label>
                <textarea
                  type="text"
                  id="hs-feedback-post-comment-name-1"
                  className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="What is Your Interest?"
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Achievement
                </label>
                <textarea
                  type="email"
                  id="hs-feedback-post-comment-email-1"
                  className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Tell Us about your achivement"
                />
              </div>

              {/* Add more education fields as needed */}

              <div className="grid mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

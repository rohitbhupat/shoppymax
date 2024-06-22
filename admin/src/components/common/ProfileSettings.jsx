import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="container mx-auto p-40">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        {/* Profile settings form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="username"
              type="text"
              placeholder="Enter your new username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="email"
              type="email"
              placeholder="Enter your new email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="password"
              type="password"
              placeholder="Enter your new password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;

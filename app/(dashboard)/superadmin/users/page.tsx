'use client';

import React, { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import Image from 'next/image';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  schoolId: string;
  profilePic: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  pincode: string;
  state: string;
  createdAt: string;
  updatedAt: string;
};

const UserList = () => {
  const { data, isLoading, error } = useFetch<User[]>('/api/auth/users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((user) => (
          <div
            key={user.id}
            onClick={() => openModal(user)}
            className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-center">
              <Image
                src={user.profilePic}
                alt={user.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-3/4 sm:w-1/2">
            <div className="flex items-center mb-6">
              <Image
                src={selectedUser.profilePic}
                alt={selectedUser.name}
                className="w-32 h-32 object-cover rounded-full mr-6"
              />
              <div>
                <h1 className="text-3xl font-semibold text-gray-800">{selectedUser.name}</h1>
                <p className="text-lg text-gray-600">{selectedUser.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-600">{selectedUser.email}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">School ID</p>
                <p className="text-gray-600">{selectedUser.schoolId}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-600">{selectedUser.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-gray-600">{selectedUser.address}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">City</p>
                <p className="text-gray-600">{selectedUser.city}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">State</p>
                <p className="text-gray-600">{selectedUser.state}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Country</p>
                <p className="text-gray-600">{selectedUser.country}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Pincode</p>
                <p className="text-gray-600">{selectedUser.pincode}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-700">Created At</p>
              <p className="text-gray-600">{new Date(selectedUser.createdAt).toLocaleString()}</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-gray-700">Updated At</p>
              <p className="text-gray-600">{new Date(selectedUser.updatedAt).toLocaleString()}</p>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;

'use client';

import { authClient } from '@/lib/auth-client';
import { poppins } from '@/lib/font';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CiMail } from 'react-icons/ci';
import { FaCamera, FaLongArrowAltRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values: {
      fullName: user?.name || '',
    },
  });

  const handleUpdateFunc = async (formData) => {
    const { data, error } = await authClient.updateUser({
      name: formData.fullName,
    });

    if (error) {
      console.error(error);
      toast.error(error.message);
      return;
    }

    console.log(data);
    toast.success('Profile updated successfully!');
  };

  return (
    <section className={`bg-orange-50 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 ${poppins.className}`}>
      {/* Header */}
      <div
        className={`flex flex-col justify-center items-center bg-linear-to-r from-[#F97316] to-[#ff8f3f] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${poppins.className}`}
      >
        <div className="relative mx-auto mb-4">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 rounded-full border-4 border-white shadow-lg">
            <span className="absolute flex justify-center items-center bottom-0 right-0 h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-white bg-yellow-400 shadow-md">
              <FaCamera />
            </span>
          </div>
        </div>

        <h2 className="text-4xl text-center text-white font-bold">
          {user?.name}
        </h2>

        <div className="flex gap-2 items-center">
          <CiMail className="text-white" />
          <span className="text-white">{user?.email}</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(handleUpdateFunc)}
        className="max-w-xl mx-auto mt-10"
      >
        <fieldset className="fieldset bg-white border border-gray-200 rounded-xl p-6 shadow">
          <label className="label">Full Name</label>

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            {...register('fullName', {
              required: 'Name is required',
            })}
          />

          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-[#F97316] hover:bg-[#ea6b11] text-white border-none w-full mt-6"
          >
            {isSubmitting ? 'Updating...' : 'Update Information'}
          </button>
        </fieldset>
      </form>
      <Link href='/my-profile' className="text-[#F97316] mt-10 flex justify-center items-center gap-4"> 
      <span className='text-[#F97316]'>Back to your profile </span> 
      <span className='text-[#F97316]'><FaLongArrowAltRight /></span>
      </Link>
    </section>
  );
};

export default UpdateProfile;
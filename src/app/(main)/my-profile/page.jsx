'use client'

import { authClient } from '@/lib/auth-client';
import { poppins } from '@/lib/font';
import Link from 'next/link';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaCamera, FaRegStar } from 'react-icons/fa';
import { FiEdit3, FiShoppingBag, FiUser } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const MyProfile = () => {

    const { data: session } = authClient.useSession()

    const user = session?.user

    console.log(user)

    return (
        <section className='bg-orange-50 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20'
        >
            <div className={`flex flex-col justify-center items-center bg-linear-to-r from-[#F97316] to-[#ff8f3f] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${poppins.className}`}>
                <div className="relative mx-auto mb-4">
                    <div className="relative h-20 w-20 xs:h-24 xs:w-24 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full border-4 border-white shadow-lg">
                        <span className="absolute text-xs md:text-lg flex justify-center items-center bottom-0 right-0 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white bg-yellow-400 shadow-md">
                            <FaCamera />
                        </span>
                    </div>
                </div>
                <h2 className='text-4xl text-center text-white font-bold'>{user?.name}</h2>
                <div className='flex gap-1 items-center mx-auto mb-4'>
                    <span className='text-white'><CiMail /></span>
                    <span className='text-white'>{user?.email}</span>
                </div>
            </div>

            <div className='mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='flex flex-col justify-center items-center rounded-2xl p-5 bg-white shadow-sm'>
                    <span className='bg-orange-50 text-orange-500 w-11 h-11 rounded-xl flex justify-center items-center mb-3'><FiShoppingBag /></span>
                    <span className=' text-black text-2xl font-black mb-3'>0</span>
                    <span className=' text-orange-950 text-xs mt-0-5'>Orders Placed</span>
                </div>
                <div className='flex flex-col justify-center items-center rounded-2xl p-5 bg-white shadow-sm'>
                    <span className='bg-orange-50 text-orange-500 flex justify-center items-center mb-3 w-11 h-11 rounded-xl'><FaRegStar /></span>
                    <span className=' text-black text-2xl font-black mb-3'>0</span>
                    <span className=' text-orange-950 text-xs mt-0-5'>Wishlist Items</span>
                </div>
                <div className='flex flex-col justify-center items-center rounded-2xl p-5 bg-white shadow-sm'>
                    <span className='bg-orange-50 text-orange-500 flex justify-center items-center mb-3 w-11 h-11 rounded-xl'><FiEdit3 /></span>
                    <span className=' text-black text-2xl font-black mb-3'>0</span>
                    <span className=' text-orange-950 text-xs mt-0-5'>Reviews Given</span>
                </div>

            </div>
            <div className='flex flex-col justify-start items-start rounded-2xl bg-white shadow-sm py-5 px-8'>

                <div className='flex items-center gap-2 mb-4'>
                    <span className='text-foreground font-bold'><FiUser /></span>
                    <h2 className='font-bold text-foreground'>Profile Information</h2>
                </div>
                <div className='space-y-4 w-full'>
                    {/* Full Name */}
                    <div className='p-4 bg-muted w-full rounded-lg'>
                        <div className='flex gap-4'>
                            <div className='w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/10'>
                                <span><FiUser /></span>
                            </div>
                            <div>
                                <p className='text-xs text-foreground'>Full Name</p>
                                <h3 className='font-semibold text-foreground'>{user?.name}</h3>
                            </div>
                        </div>
                    </div>
                    {/* E-mail */}
                    <div className='p-4 bg-muted w-full rounded-lg'>
                        <div className='flex gap-4'>
                            <div className='w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/10'>
                                <span><MdOutlineEmail /></span>
                            </div>
                            <div>
                                <p className='text-xs text-foreground'>Email</p>
                                <h3 className='font-semibold text-foreground'>{user?.email}</h3>
                            </div>
                        </div>
                    </div>
                    <Link href="/update-page">
                       <button className="btn w-full bg-[#F97316] btn-neutral p-4 shadow-none border-none rounded-lg text-lg font-bold text-white">Update Information</button>
                    </Link>
                </div>

            </div>

        </section>
    );
};

export default MyProfile;
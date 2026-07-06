
import { poppins } from '@/lib/font';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className={`bg-[#1C0D00] py-12 sm:py-16 lg:py-20 ${poppins.className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Services */}
                <div>
                    <h3 className="footer-title text-white opacity-100">Categories</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover text-white opacity-60">Accessories</a></li>
                        <li><a className="link link-hover text-white opacity-60">Clothing</a></li>
                        <li><a className="link link-hover text-white opacity-60">SkinCare</a></li>
                        <li><a className="link link-hover text-white opacity-60">Footwear</a></li>
                        <li><a className="link link-hover text-white opacity-60">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="footer-title text-white opacity-100">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href='/' className="link link-hover text-white opacity-60">Home</Link></li>
                        <li><Link href='/products' className="link link-hover text-white opacity-60">All Product</Link></li>
                        <li><Link href='/login' className="link link-hover text-white opacity-60">Log In</Link></li>
                        <li><Link href='/register' className="link link-hover text-white opacity-60">Register</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="footer-title text-white opacity-100">Legal</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover text-white opacity-60">Terms of Use</a></li>
                        <li><a className="link link-hover text-white opacity-60">Privacy Policy</a></li>
                        <li><a className="link link-hover text-white opacity-60">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="rounded-2xl">
                    <h3 className="footer-title text-white opacity-100">Subscribe</h3>

                    <p className="text-sm text-gray-200 mb-4">
                        Enter your email address
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />

                        <button className="btn bg-[#F97316] hover:bg-orange-600 text-white border-none shadow-none sm:w-auto w-full">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-sm text-gray-100 mt-5 leading-6 max-w-md">
                        Hello, we are Lift Media. Our goal is to translate the positive effects
                        from revolutionizing how companies engage with their clients and their
                        team.
                    </p>
                </div>
                <hr className='border-0.125' />

            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <hr className="border-t border-white/20" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
                <p>© 2026 Summer Store. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white text-2xl"><FaFacebook />
</a>
                    <a href="#" className="hover:text-white text-2xl"><FaInstagram/></a>
                    <a href="#" className="hover:text-white text-2xl"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
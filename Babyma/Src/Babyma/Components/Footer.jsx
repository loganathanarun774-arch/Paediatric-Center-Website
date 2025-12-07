import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className="bg-gradient-to-br from-teal-50 to-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 mt-20 rounded-t-[50px] border-t border-teal-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Babyma</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Empowering families with compassionate pediatric care and cutting-edge medical technology. Building a healthier future for every child.
                        </p>
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm text-gray-500 hover:text-teal-600 transition-colors cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>hello@babyma.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500 hover:text-teal-600 transition-colors cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>1-800-BABYMA</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Services</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="service" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Medical Consultation</Link></li>
                            <li><Link to="service" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Obstetrics & Gynecology</Link></li>
                            <li><Link to="service" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Post Pregnancy Care</Link></li>
                            <li><Link to="service" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Parental & Psychological Counseling</Link></li>
                        </ul>
                    </div>

                    {/* Quick Link Column */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="about" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">About Us</Link></li>
                            <li><Link to="doctor" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Doctors</Link></li>
                            <li><Link to="service" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Service</Link></li>
                            <li><Link to="blog" smooth={true} duration={500} className="hover:text-teal-600 cursor-pointer transition-colors block">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Support</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-teal-600 cursor-pointer transition-colors block">Help Center</a></li>
                            <li><a href="#" className="hover:text-teal-600 cursor-pointer transition-colors block">Contact Us</a></li>
                            <li><a href="#" className="hover:text-teal-600 cursor-pointer transition-colors block">Emergency</a></li>
                            <li><a href="#" className="hover:text-teal-600 cursor-pointer transition-colors block">Community</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-teal-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-400">
                        © 2025 Babyma. All rights reserved.
                    </div>

                    <div className="flex items-center gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Cookies</a>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-teal-100 rounded-full shadow-sm cursor-pointer hover:border-teal-300 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        <span className="text-xs font-medium text-gray-600">English (US)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

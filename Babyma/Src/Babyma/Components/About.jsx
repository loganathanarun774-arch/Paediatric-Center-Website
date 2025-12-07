import React from 'react'


function About() {

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-50 via-white to-green-50 selection:bg-teal-100 selection:text-teal-900">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
                <div className="absolute top-1/2 -right-24 w-80 h-80 bg-green-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
            </div>

            <main className="relative z-10 container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full">

                {/* Text Content */}
                <div className="flex-1 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Babyma Paediatric Care
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Babyma</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                        India's first experiential paediatric centre focused on <span className="font-semibold text-teal-700">gentle, playful, and inclusive care</span>. We combine thoughtful clinic design with a child-centred care model to reduce anxiety and improve outcomes for families.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <button className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-2xl shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-1">
                            Our Services
                        </button>
                        <button className="px-8 py-3.5 bg-white border border-gray-200 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            Contact Us
                        </button>
                    </div>

                    <div className="p-6 bg-white/300 backdrop-blur-sm border border-white/50 rounded-3xl shadow-sm">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            "At Babyma we believe every child deserves compassionate, evidence-based care delivered in a welcoming space for families. Our teams include paediatricians, child-life specialists and therapists who specialise in developmental care."
                        </p>
                    </div>
                </div>

                {/* Info Panel / Visuals */}
                <aside className="flex-1 w-full max-w-md lg:max-w-lg relative">
                    {/* Glass Card */}
                    <div className="relative bg-white/30 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-8 shadow-2xl shadow-teal-900/5 overflow-hidden group hover:bg-white/40 transition-colors duration-500">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-start gap-5 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                                    {/* Logo Placeholder Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Babyma</h3>
                                    <div className="text-teal-700 font-medium text-sm mt-1 flex flex-wrap gap-2">
                                        <span className="bg-white/50 px-2 py-0.5 rounded-md">Peadiatric center</span>
                                        <span className="bg-white/50 px-2 py-0.5 rounded-md">Playful spaces</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100">
                                    <h4 className="font-bold text-teal-800 text-lg">98%</h4>
                                    <p className="text-xs text-teal-600 mt-1">Parent Satisfaction</p>
                                </div>
                                <div className="p-4 bg-green-50/50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-800 text-lg">15+</h4>
                                    <p className="text-xs text-green-600 mt-1">Specialists</p>
                                </div>
                            </div>

                            <div className="bg-white/60 rounded-3xl p-6 border border-white/60 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-transparent rounded-bl-full opacity-50"></div>
                                <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>123 Healing Lane, Midtown</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Monday to Saturday, 9am to 6pm</span>
                                    </div>
                                </div>
                                <a className="inline-flex items-center justify-center w-full mt-5 px-4 py-2.5 bg-teal-500 hover:bg-teal-100 text-teal-700 font-medium rounded-xl text-sm transition-colors" href="/contact">
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Blob under the card */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                </aside>
            </main>
        </div>
    )
}

export default About

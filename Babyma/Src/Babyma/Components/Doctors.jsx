import React, { useState, useEffect } from 'react'

const doctors = [
    {
        id: "01",
        name: "Dr. Irul Wahyudi",
        speciality: "Medical Consultation",
        image: "https://i.pinimg.com/736x/3d/1f/85/3d1f850364e462a11fd7622e513b61cf.jpg", // Placeholder
        color: "bg-blue-600"
    },
    {
        id: "02",
        name: "Dr. Sarah Johnson",
        speciality: "Obstetrics & Gynecology",
        image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg", // Placeholder
        color: "bg-gray-600"
    },
    {
        id: "03",
        name: "Dr. Mark Spencer",
        speciality: "Post Pregnancy Care",
        image: "https://i.pinimg.com/736x/f4/8b/91/f48b9186e7e1777a8c8ff427c591d347.jpg", // Placeholder
        color: "bg-blue-500"
    },
    {
        id: "04",
        name: "Dr. Emily Chen",
        speciality: "Parental & Psychological Counseling",
        image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg", // Placeholder
        color: "bg-gray-600"
    }
]

function Doctors() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-slide effect (optional, can be removed)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % doctors.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % doctors.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length)
    }

    const currentDoctor = doctors[currentIndex]

    return (
        <div id="doctor" className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center py-10 px-4">

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-8 z-10 p-4">
                    {/* Header Indicator */}
                    <div className="flex items-center gap-4 text-gray-400 font-bold text-xl">
                        <span className="text-teal-600 text-3xl">{currentDoctor.id}</span>
                        <div className="h-0.5 w-16 bg-gray-200">
                            <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${((currentIndex + 1) / doctors.length) * 100}%` }}></div>
                        </div>
                        <span>04</span>
                    </div>

                    <div className="relative">
                        {/* Circular Badge */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full border-2 border-teal-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                                <text className="text-[10px] uppercase font-bold tracking-wide text-teal-600">
                                    <textPath href="#curve">
                                        Certified Medical Service • Certified •
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Get Quick <br />
                            <span className="text-teal-600">Medical Service</span>
                        </h2>
                    </div>

                    <p className="text-gray-500 text-lg max-w-md">
                        Get your medical service with certified and professional doctors on Babyma.
                    </p>

                    <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg shadow-teal-600/30 transition-all transform hover:-translate-y-1">
                        Book Appoinment
                    </button>

                    {/* Navigation Dots (Mobile) */}
                    <div className="flex lg:hidden gap-2 pt-4">
                        {doctors.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-teal-600' : 'w-2 bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT - THE CARD & IMAGE */}
                <div className="relative h-[600px] w-full flex items-end justify-center lg:justify-end">

                    {/* The Blue Card Background */}
                    <div className={`
                        absolute bottom-0 w-full lg:w-[100%] h-[70%] 
                        bg-gradient-to-br from-teal-800 to-teal-600 
                        rounded-[40px] shadow-2xl overflow-visible
                        transition-colors duration-500
                    `}>
                        {/* Decorative Patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    {/* Use key here to trigger animation on change */}
                    <div key={currentIndex} className="relative w-full h-full flex flex-col justify-end pb-8 px-8 animate-[fadeIn_0.5s_ease-out]">

                        {/* Doctor Image - Overlapping Top */}
                        <img
                            src={currentDoctor.image}
                            alt={currentDoctor.name}
                            className="absolute bottom-1/4 right-0 lg:right-10 h-[80%] w-auto object-contain drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                        />

                        {/* Card Content (Name & Info) */}
                        <div className="relative z-20 flex items-end justify-between text-white mb-6 lg:mr-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-1 opacity-0 animate-[slideUp_0.5s_0.2s_forwards]">
                                    {currentDoctor.name}
                                </h3>
                                <p className="text-teal-100 text-lg opacity-0 animate-[slideUp_0.5s_0.3s_forwards]">
                                    {currentDoctor.speciality}
                                </p>

                                <div className="flex gap-4 mt-6 opacity-0 animate-[slideUp_0.5s_0.4s_forwards]">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Black Side Panel (Navigation) */}
                            <div className="hidden lg:flex flex-col items-center justify-center gap-3 bg-slate-900 rounded-[30px] p-2 h-10 w-64 absolute right-0 bottom-4 shadow-xl">
                                <span className="text-[20px] text-gray-400 uppercase tracking-wider mt-0.5 block">Schedule</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Styles for animations */}
            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    )
}

export default Doctors
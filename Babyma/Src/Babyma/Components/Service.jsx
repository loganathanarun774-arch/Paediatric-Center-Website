import React from 'react'

const services = [
  {
    title: "Medical Consultation",
    description: "Babyama, we provide comprehensive General Paediatric & Paediatric Super Speciality services in Coimbatore.From routine child health checkups to specialized care for complex conditions, our expert pediatricians and specialists ensure top-notch treatment and support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "bg-orange-500",
    delay: "0"
  },
  {
    title: "Obstetrics & Gynecology",
    description: "We provides specialized dental care for children in a fun and relaxing environment. Our team ensures a pain-free experience with gentle care and a child-friendly approach, focusing on preventive treatments, early detection, and dental education. Let your child smile confidently with expert pediatric dental care designed just for them!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-teal-600",
    delay: "100"
  },
  {
    title: "Post Pregnancy Care",
    description: "Specialized care for new mothers to promote recovery, strengthen the body, and enhance postpartum health. Personalized programs ensure every mother feels supported during this crucial phase.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-blue-600",
    delay: "200"
  },
  {
    title: "Parental & Psychological Counseling",
    description: "Empowering parents with expert guidance to nurture emotionally healthy and confident children. Our counseling services provide personalized support for parenting challenges, child behavior, emotional well-being, and family dynamics—all in a safe, compassionate space.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-orange-500",
    delay: "300"
  }
]

function Service() {
  return (
    <div id="service" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Services
          </h2>
          <p className="max-w-2xl text-lg text-teal-100/80 leading-relaxed">
           Babyama Women Wellness & Pediatric Centre provides top-quality care for mothers and children, including obstetrics, gynecology, pediatrics, and preventive dentistry. With a focus on personalized treatments, our expert team ensures comprehensive wellness in a nurturing environment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center`}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Circle Icon - Floating Top */}
              <div className={`
                                absolute -top-10 left-1/2 -translate-x-1/2 z-20
                                w-20 h-20 rounded-full ${service.color}
                                flex items-center justify-center text-white
                                shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300
                            `}>
                {service.icon}
              </div>

              {/* Pill Card Body */}
              <div className="
                                relative w-full pt-16 pb-12 px-6
                                bg-white/10 backdrop-blur-md border border-white/20
                                rounded-t-[100px] rounded-b-[20px] 
                                flex flex-col items-center text-center h-full
                                hover:bg-white/20 transition-all duration-300
                                group-hover:translate-y-[-5px]
                                min-h-[400px]
                            ">
                <h3 className="text-xl font-bold text-white mb-4 mt-2">
                  {service.title}
                </h3>
                <p className="text-teal-100/80 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Dotted Line Decoration (Generic like image) */}
                <div className="mt-auto pt-8 w-full opacity-30">
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
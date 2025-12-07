import React, { useState, useEffect } from 'react'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => console.error("Error fetching posts:", err))
  }, [])

  return (
    <div id="blog" className="relative min-h-screen bg-gradient-to-br from-teal-50 to-green-100 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT COLUMN: Content & Cards */}
        <div className="flex-1 w-full space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
              Latest Updates <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">
                From Babyma Peadiatric Experts
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Explore Babyama's Trusted Pediatric Services
            </p>
          </div>

          <div className="space-y-6">
            {loading ? (
              // Loading Skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 h-32 animate-pulse"></div>
              ))
            ) : (
              posts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-x-[-10px] cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xl">
                      {post.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900 text-lg mb-2 capitalize line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {post.body}
                      </p>
                    </div>
                  </div>
                  {/* Decoration */}
                  <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Network Map Visualization */}
        <div className="flex-1 w-full relative h-[600px] flex items-center justify-center">

          {/* Abstract Map Container */}
          <div className="relative w-full h-full max-w-lg mx-auto">

            {/* Glowing Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Network Lines & Dots (Simulating the map connections) */}
            <svg className="w-full h-full absolute inset-0 z-0 opacity-60" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* Connection Lines */}
              <g className="stroke-teal-300/50" strokeWidth="1">
                <path d="M250 250 L100 150" className="animate-[grow_3s_ease-in-out_infinite]" />
                <path d="M250 250 L400 100" />
                <path d="M250 250 L150 400" />
                <path d="M250 250 L350 350" />
                <path d="M100 150 L150 100" />
                <path d="M350 350 L400 400" />
                <path d="M150 400 L50 350" />
              </g>

              {/* Nodes */}
              <g>
                {/* Center Node */}
                <circle cx="250" cy="250" r="15" className="fill-white stroke-teal-500 stroke-4 animate-ping opacity-20" />
                <circle cx="250" cy="250" r="8" className="fill-teal-600" />

                {/* Surrounding Nodes */}
                {[
                  { cx: 100, cy: 150, delay: '0s' },
                  { cx: 400, cy: 100, delay: '1s' },
                  { cx: 150, cy: 400, delay: '0.5s' },
                  { cx: 350, cy: 350, delay: '1.5s' },
                  { cx: 50, cy: 350, delay: '2s' },
                  { cx: 400, cy: 400, delay: '0.8s' },
                  { cx: 150, cy: 100, delay: '1.2s' },
                ].map((node, i) => (
                  <g key={i} className="origin-center" style={{ animation: `float 6s ease-in-out infinite ${node.delay}` }}>
                    <circle cx={node.cx} cy={node.cy} r="20" className="fill-white/80" />
                    <image
                      href={`https://i.pravatar.cc/150?img=${i + 10}`}
                      x={node.cx - 15}
                      y={node.cy - 15}
                      height="30"
                      width="30"
                      className="rounded-full"
                      clipPath="circle(15px at 15px 15px)"
                    />
                    <circle cx={node.cx} cy={node.cy} r="16" className="stroke-teal-500 stroke-2 fill-none" />
                  </g>
                ))}
              </g>
            </svg>

            {/* Floating Info Cards (Simulating the popups in the reference) */}
            <div className="absolute top-20 right-10 bg-white p-3 rounded-xl shadow-lg shadow-teal-900/10 border border-teal-100 animate-[bounce_4s_infinite]">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-teal-600">14k+</div>
                <div className="text-xs text-gray-500 font-medium">Happy <br /> Families</div>
              </div>
            </div>

            <div className="absolute bottom-32 left-0 bg-white p-3 rounded-xl shadow-lg shadow-teal-900/10 border border-teal-100 animate-[bounce_5s_infinite]">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-orange-500">25+</div>
                <div className="text-xs text-gray-500 font-medium">Expert <br /> Doctors</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

/* Add custom animations to your global css or style tag if needed. 
   For now relying on Tailwind's default animate-pulse/bounce and standard transitions.
*/

export default Blog
'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { HeroScene } from '@/components/3d/HeroScene';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Download, Mail, Github, ExternalLink, Play, Pause, SkipForward, SkipBack } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.15]" />
        <div className="blob blob-green w-[500px] h-[500px] rounded-full top-[-100px] left-[-100px]" />
        <div className="blob blob-purple w-[400px] h-[400px] rounded-full bottom-[20%] right-[-50px]" />
        <div className="blob blob-cyan w-[300px] h-[300px] rounded-full top-[40%] left-[20%]" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-neon-green font-bold text-xl mb-2">Hi, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Vansh Harkirat Singh
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Computer Science Undergraduate, <span className="text-spotify-green">Backend & AI/ML Developer</span>
            </h3>
            <p className="text-gray-400 max-w-lg text-lg mb-8">
              Motivated undergraduate with strong expertise in Android development, backend engineering, IoT systems, and applied machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="w-5 h-5" /> Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 w-full h-full min-h-[400px]">
          <HeroScene />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="text-neon-green">01.</span> About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="min-h-[300px] flex items-center justify-center bg-white/5 overflow-hidden">
             <img 
               src="/profile.jpeg" 
               alt="Vansh Harkirat Singh" 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             <p className="text-gray-500 text-center px-4 hidden absolute">
               Add <strong>public/profile.jpg</strong><br/>
               to see your photo
             </p>
          </Card>
          <div className="space-y-6 text-gray-300 text-lg">
            <p>
              I am a motivated Computer Science undergraduate with strong expertise in Android development, backend engineering, IoT systems, and applied machine learning. 
              I have experience in building production-ready mobile apps, developing scalable FastAPI and Golang services, and integrating AI models into real-world systems.
            </p>
            <p>
              My proven track record includes projects in cybersecurity automation, AI-driven diagnostics, and IoT-based fault detection. 
              I am passionate about creating impactful, intelligent, and user-focused solutions by combining AI, cloud technologies, and robust system design.
            </p>
            <div className="pt-4">
              <h3 className="text-white font-bold mb-4">Technical Skills</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-neon-green">
                <li className="flex items-center gap-2">▹ C, C++, Kotlin</li>
                <li className="flex items-center gap-2">▹ Golang, Python, SQL</li>
                <li className="flex items-center gap-2">▹ Android (Kotlin)</li>
                <li className="flex items-center gap-2">▹ FastAPI, REST APIs</li>
                <li className="flex items-center gap-2">▹ TensorFlow, PyTorch</li>
                <li className="flex items-center gap-2">▹ Scikit-learn, OpenCV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Added as per resume */}
      <section id="education" className="py-10">
         <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="text-neon-green">02.</span> Education
        </h2>
        <div className="bg-[#181818] p-6 rounded-lg border border-white/5">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-bold text-white">Thapar Institute of Engineering & Technology</h3>
              <span className="text-neon-green font-mono text-sm">Aug 2023 -- July 2027</span>
           </div>
           <p className="text-gray-400">Bachelor of Technology in Computer Science</p>
           <p className="text-gray-500 text-sm mt-1">Patiala, India</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="text-neon-green">03.</span> Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group p-4 hover:bg-[#282828] transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-video bg-black/40 rounded-md mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-xl transition-all">
                 <img 
                   src="/projects/vulintel.jpeg" 
                   alt="VulIntel" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <span className="text-gray-600 text-xs text-center px-2 hidden absolute">Add public/projects/vulintel.jpg</span>
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                    <a href="https://github.com/harkiratchahal/pentest-ai-desktop" target="_blank" rel="noreferrer" className="px-4 py-2 bg-neon-green rounded-full text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <Github className="w-4 h-4" /> Desktop App Repo
                    </a>
                    <a href="https://github.com/harkiratchahal/pentest-website" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white rounded-full text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <Github className="w-4 h-4" /> Web Portal Repo
                    </a>
                 </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">VulIntel: AI-Powered Pentesting</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-3 flex-grow">
                End-to-end cybersecurity automation platform with AI-driven desktop app and web portal. Automated scanning, CVE lookup, and exploit ranking.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono mt-auto">
                <span>FastAPI</span>
                <span>Golang</span>
                <span>Python</span>
                <span>Docker</span>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="group p-4 hover:bg-[#282828] transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-video bg-black/40 rounded-md mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-xl transition-all">
                 <img 
                   src="/projects/fault-detector.png" 
                   alt="Fault Detector" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <span className="text-gray-600 text-xs text-center px-2 hidden absolute">Add public/projects/fault-detector.jpg</span>
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                    <a href="https://github.com/harkiratchahal/fault-detector-app" target="_blank" rel="noreferrer" className="px-4 py-2 bg-neon-green rounded-full text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <Github className="w-4 h-4" /> App Repo
                    </a>
                    <a href="https://github.com/harkiratchahal/fault-detector-backend" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white rounded-full text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <Github className="w-4 h-4" /> Backend Repo
                    </a>
                    <a href="https://team-travens.netlify.app/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-500 rounded-full text-white font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Live Portfolio
                    </a>
                 </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Fault Detector System</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-3 flex-grow">
                IoT-based real-time fault detection for AC overhead conductors using ESP32 and TensorFlow Lite Micro. Cloud APIs and local language support.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono mt-auto">
                <span>ESP32</span>
                <span>FastAPI</span>
                <span>TFLite</span>
                <span>Kotlin</span>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="group p-4 hover:bg-[#282828] transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-video bg-black/40 rounded-md mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-xl transition-all">
                 <img 
                   src="/projects/instafix.png" 
                   alt="InstaFix" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <span className="text-gray-600 text-xs text-center px-2 hidden absolute">Add public/projects/instafix.jpg</span>
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                    <a href="https://github.com/harkiratchahal/hackmol_instafix" target="_blank" rel="noreferrer" className="px-4 py-2 bg-neon-green rounded-full text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2">
                      <Github className="w-4 h-4" /> Project Repo
                    </a>
                 </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">InstaFix: Home Repair App</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-3 flex-grow">
                Android app for booking local handymen with AI-based issue diagnosis. Provider onboarding and optimized service discovery.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono mt-auto">
                <span>Android</span>
                <span>Kotlin</span>
                <span>TFLite</span>
                <span>REST APIs</span>
              </div>
            </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="text-neon-green">04.</span> Experience
        </h2>
        <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8 relative">
            {/* Experience 1 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-black border-2 border-neon-green" />
              <h3 className="text-xl font-bold text-white">Tech Team Member <span className="text-neon-green">@ Microsoft Learn Student Chapter</span></h3>
              <p className="text-sm text-gray-400 font-mono mb-4">Aug 2023 -- Present | Patiala, India</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-neon-green">
                <li>Developed Android apps using Kotlin and XML for event management; ensured stability for 500+ users as part of a 5-member agile team.</li>
                <li>Optimized SQL queries and Golang APIs, resulting in up to 30% improved performance.</li>
                <li>Brought Red Bull and GeeksforGeeks sponsorships to MLSC events, boosting outreach and engagement.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-black border-2 border-neon-green" />
              <h3 className="text-xl font-bold text-white">Semi Finalist <span className="text-neon-green">@ Smart India Hackathon (SIH)</span></h3>
              <p className="text-sm text-gray-400 font-mono mb-4">2024</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-neon-green">
                <li>Selected as Semi-Finalist for the Fault Detector System project.</li>
                <li>Developed an IoT-based real-time fault detection system for AC overhead conductors.</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-black border-2 border-neon-green" />
              <h3 className="text-xl font-bold text-white">Hackathon Participant <span className="text-neon-green">@ HackMOL 6.0</span></h3>
              <p className="text-sm text-gray-400 font-mono mb-4">Mar 2025 | NIT Jalandhar</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-neon-green">
                <li>Secured Top 10 position out of 200+ teams through rapid prototyping and collaborative problem-solving.</li>
              </ul>
            </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
        <p className="text-neon-green font-mono mb-4">06. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-10">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button size="lg" className="px-10 py-4 text-xl" onClick={() => window.location.href = 'mailto:vhschahal@gmail.com'}>
          vhschahal@gmail.com
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm font-mono">
        <p>Designed & Built by Vansh Harkirat Singh</p>
      </footer>
    </MainLayout>
  );
}

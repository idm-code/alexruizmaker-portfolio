import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Camera, Film, Award, Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ChevronDown, Menu, X, Globe } from 'lucide-react';

const App = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    es: {
      scenes: [
        { title: "DIRECTOR", subtitle: "Visión Creativa" },
        { title: "EDITOR", subtitle: "Maestro del Storytelling" },
        { title: "ARTISTA", subtitle: "Artesano Visual" }
      ],
      nav: {
        reel: "REEL",
        director: "DIRECTOR",
        portfolio: "PORTFOLIO",
        contact: "CONTACTO"
      },
      hero: {
        scrollExplore: "DESPLÁZATE PARA EXPLORAR",
        pause: "PAUSAR",
        play: "REPRODUCIR"
      },
      about: {
        directorsCut: "CORTE DEL DIRECTOR",
        behindLens: "DETRÁS DE",
        lens: "LA LENTE",
        description1: "Con más de 4 años transformando ideas en narrativas visuales que cautivan y conectan. Especializado en la producción de videos publicitarios y de producto, concretamente en el sector de la Perfumería y Cosmética.",
        description2: "Mi enfoque combina técnica avanzada con sensibilidad artística, creando contenido que no solo se ve increíble, sino que cuenta historias que resuenan con la audiencia.",
        projects: "PROYECTOS",
        years: "AÑOS",
        awards: "PREMIOS",
        cinematography: "Cinematografía",
        cinematographyDesc: "Operador de Cámara y realizador audiovisual",
        postProduction: "Post-producción",
        postProductionDesc: "Edición, VFX, motion graphics",
        storytelling: "Storytelling",
        storytellingDesc: "Narrativa visual, dirección creativa"
      },
      projects: {
        selectedWorks: "TRABAJOS SELECCIONADOS",
        portfolio: "PORTFOLIO",
        reel: "REEL",
        viewFullReel: "VER REEL COMPLETO",
        musicVideo: "Musical",
        documentary: "Producto",
        commercial: "Eventos",
        interview: "Entrevistas",
        shortFilm: "Sólo Edición",
        record: "Sólo grabación"
      },
      contact: {
        getInTouch: "PONTE EN CONTACTO",
        letsCreate: "CREEMOS",
        together: "JUNTOS",
        startProject: "Inicia Tu Proyecto",
        name: "Nombre",
        email: "Email",
        projectType: "Tipo de Proyecto",
        message: "Mensaje",
        sendMessage: "ENVIAR MENSAJE",
        letsConnect: "Conectemos",
        connectDescription: "¿Tienes un proyecto en mente? Me encanta colaborar en ideas creativas que desafíen los límites de la narrativa visual. Hablemos sobre cómo podemos dar vida a tu visión.",
        followWork: "Sigue Mi Trabajo",
        location: "Ubicación",
        projectPlaceholder: "Cuéntame sobre tu proyecto...",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com"
      },
      footer: {
        rights: "Todos los derechos reservados.",
        crafted: "HECHO CON",
        in: "EN SEVILLA"
      }
    },
    en: {
      scenes: [
        { title: "DIRECTOR", subtitle: "Creative Vision" },
        { title: "EDITOR", subtitle: "Storytelling Master" },
        { title: "ARTIST", subtitle: "Visual Craftsman" }
      ],
      nav: {
        reel: "REEL",
        director: "DIRECTOR",
        portfolio: "PORTFOLIO",
        contact: "CONTACT"
      },
      hero: {
        scrollExplore: "SCROLL TO EXPLORE",
        pause: "PAUSE",
        play: "PLAY"
      },
      about: {
        directorsCut: "DIRECTOR'S CUT",
        behindLens: "BEHIND THE",
        lens: "LENS",
        description1: "With over 4 years transforming ideas into visual narratives that captivate and connect. Specialized in advertising and product video production, specifically in the Perfumery and Cosmetics sector.",
        description2: "My approach combines advanced technique with artistic sensitivity, creating content that not only looks incredible, but tells stories that resonate with the audience.",
        projects: "PROJECTS",
        years: "YEARS",
        awards: "AWARDS",
        cinematography: "Cinematography",
        cinematographyDesc: "Camera operator and audiovisual producer",
        postProduction: "Post-production",
        postProductionDesc: "Editing, VFX, motion graphics",
        storytelling: "Storytelling",
        storytellingDesc: "Visual narrative, creative direction"
      },
      projects: {
        selectedWorks: "SELECTED WORKS",
        portfolio: "PORTFOLIO",
        reel: "REEL",
        viewFullReel: "VIEW FULL REEL",
        musicVideo: "Music Video",
        documentary: "Product",
        commercial: "Events",
        interview: "Interviews",
        shortFilm: "Editing Only",
        record: "Recording Only"
      },
      contact: {
        getInTouch: "GET IN TOUCH",
        letsCreate: "LET'S CREATE",
        together: "TOGETHER",
        startProject: "Start Your Project",
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        message: "Message",
        sendMessage: "SEND MESSAGE",
        letsConnect: "Let's Connect",
        connectDescription: "Do you have a project in mind? I love collaborating on creative ideas that challenge the limits of visual storytelling. Let's talk about how we can bring your vision to life.",
        followWork: "Follow My Work",
        location: "Location",
        projectPlaceholder: "Tell me about your project...",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com"
      },
      footer: {
        rights: "All rights reserved.",
        crafted: "CRAFTED WITH",
        in: "IN SEVILLE"
      }
    }
  };

  const currentContent = content[language];
  const scenes = currentContent.scenes;

  const projects = [
    {
      id: 1,
      title: "NEON DREAMS",
      category: currentContent.projects.musicVideo,
      year: "2024",
      client: "Universal Records",
      thumbnail: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: language === 'es' ? "Estética cyberpunk con storytelling emocional" : "Cyberpunk aesthetic meets emotional storytelling"
    },
    {
      id: 2,
      title: "URBAN LEGENDS",
      category: currentContent.projects.documentary,
      year: "2024",
      client: "Netflix",
      thumbnail: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: language === 'es' ? "Serie documental sobre cultura urbana" : "Street culture documentary series"
    },
    {
      id: 3,
      title: "MIDNIGHT CHASE",
      category: currentContent.projects.commercial,
      year: "2023",
      client: "BMW",
      thumbnail: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: language === 'es' ? "Comercial automotriz de alta velocidad" : "High-octane automotive commercial"
    },
    {
      id: 4,
      title: "ETHEREAL",
      category: currentContent.projects.shortFilm,
      year: "2023",
      client: "Independent",
      thumbnail: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: language === 'es' ? "Narrativa experimental premiada" : "Award-winning experimental narrative"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, scenes.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/AR-LOGO.jpg" 
                alt="Alex Ruiz Maker" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className="flex items-center space-x-2 text-sm font-medium hover:text-yellow-400 transition-colors">
                <Globe size={16} />
                <span>{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-yellow-400 transition-colors">
                {currentContent.nav.reel}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-yellow-400 transition-colors">
                {currentContent.nav.director}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-yellow-400 transition-colors">
                {currentContent.nav.portfolio}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-yellow-400 transition-colors">
                {currentContent.nav.contact}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-yellow-400/20">
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className="flex items-center space-x-2 text-left text-sm font-medium hover:text-yellow-400 transition-colors">
                  <Globe size={16} />
                  <span>{language === 'es' ? 'English' : 'Español'}</span>
                </button>
                <button onClick={() => scrollToSection('hero')} className="text-left text-sm font-medium hover:text-yellow-400 transition-colors">
                  {currentContent.nav.reel}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-sm font-medium hover:text-yellow-400 transition-colors">
                  {currentContent.nav.director}
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-sm font-medium hover:text-yellow-400 transition-colors">
                  {currentContent.nav.portfolio}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-sm font-medium hover:text-yellow-400 transition-colors">
                  {currentContent.nav.contact}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Cinema Style */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* YouTube Video Fullscreen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/yhFKo1BdTHA?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=yhFKo1BdTHA"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="w-full h-full absolute inset-0"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Scroll Indicator - SIEMPRE ABAJO */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 animate-bounce hover:text-green-400 transition-colors cursor-pointer group"
          >
            <span className="text-xs font-mono text-yellow-400 group-hover:text-green-400 transition-colors">{currentContent.hero.scrollExplore}</span>
            <ChevronDown size={20} className="text-yellow-400 group-hover:text-green-400 transition-colors" />
          </button>
        </div>
      </section>

      {/* About Section - Director's Cut */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <span className="text-yellow-400 font-mono text-sm tracking-wider">{currentContent.about.directorsCut}</span>
                <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6">
                  {currentContent.about.behindLens}
                  <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    {currentContent.about.lens}
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  {currentContent.about.description1}
                </p>
                <p>
                  {currentContent.about.description2}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-2">30+</div>
                  <div className="text-sm text-gray-400 font-mono">{currentContent.about.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">4+</div>
                  <div className="text-sm text-gray-400 font-mono">{currentContent.about.years}</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-400/20">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Camera className="text-yellow-400" size={24} />
                    <div>
                      <div className="font-semibold">{currentContent.about.cinematography}</div>
                      <div className="text-sm text-gray-400">{currentContent.about.cinematographyDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Film className="text-green-400" size={24} />
                    <div>
                      <div className="font-semibold">{currentContent.about.postProduction}</div>
                      <div className="text-sm text-gray-400">{currentContent.about.postProductionDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="text-yellow-400" size={24} />
                    <div>
                      <div className="font-semibold">{currentContent.about.storytelling}</div>
                      <div className="text-sm text-gray-400">{currentContent.about.storytellingDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Film Strip */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-mono text-sm tracking-wider">{currentContent.projects.selectedWorks}</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">
              {currentContent.projects.portfolio}
              <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                {currentContent.projects.reel}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 to-green-400 opacity-60" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                  </div>

                  {/* Film Strip Effect */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-green-400" />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-yellow-400" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400 font-mono text-xs tracking-wider">{project.category}</span>
                    <span className="text-gray-400 font-mono text-xs">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm">{project.client}</span>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={12} className="text-black ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-green-400 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
              <span>{currentContent.projects.viewFullReel}</span>
              <Play size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Control Room */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-mono text-sm tracking-wider">{currentContent.contact.getInTouch}</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">
              {currentContent.contact.letsCreate}
              <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                {currentContent.contact.together}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-400/20">
              <h3 className="text-2xl font-bold mb-6">{currentContent.contact.startProject}</h3>
              
              <form
                action="https://formsubmit.co/Alexruizmaker@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{currentContent.contact.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                      placeholder={currentContent.contact.namePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                      placeholder={currentContent.contact.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{currentContent.contact.projectType}</label>
                  <select
                    name="projectType"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    required
                  >
                    <option>{currentContent.projects.musicVideo}</option>
                    <option>{currentContent.projects.commercial}</option>
                    <option>{currentContent.projects.interview}</option>
                    <option>{currentContent.projects.documentary}</option>
                    <option>{currentContent.projects.shortFilm}</option>
                    <option>{currentContent.projects.record}</option>
                    <option>{language === 'es' ? 'Video Corporativo' : 'Corporate Video'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{currentContent.contact.message}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none"
                    placeholder={currentContent.contact.projectPlaceholder}
                    required
                  />
                </div>
                <input type="hidden" name="_redirect" value="/" />
                <input type="hidden" name="_next" value="https://alexruizmaker-portfolio.vercel.app/" />
                <input type="hidden" name="_captcha" value="false" />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {currentContent.contact.sendMessage}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{currentContent.contact.letsConnect}</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {currentContent.contact.connectDescription}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-400/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">{language === 'es' ? 'Alexruizmaker@gmail.com' : 'Alexruizmaker@gmail.com'}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-400/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">{language === 'es' ? '+34 648 87 96 39' : '+34 648 87 96 39'}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-400/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold">{currentContent.contact.location}</div>
                    <div className="text-gray-400">{language === 'es' ? 'España' : 'Spain'}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">{currentContent.contact.followWork}</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/alexruizmaker/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-400 hover:text-black transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.youtube.com/@alexruizmaker" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-400 hover:text-black transition-all duration-300">
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/alex-ruiz-4297052aa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-400 hover:text-black transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/Image2.jpg" 
                alt="Alex Ruiz Maker" 
                className="h-16 w-auto"
              />
              <span className="text-gray-400 text-sm">© 2024 Alex Ruiz Maker. {currentContent.footer.rights}</span>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              {currentContent.footer.crafted} <span className="text-yellow-400">♥</span> {currentContent.footer.in}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
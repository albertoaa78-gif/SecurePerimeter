import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

import heroBg from "@/assets/videos/hero-seamless-light.mp4";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src={heroBg}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </div>

        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="inline-block mb-8 px-4 py-1 border border-primary/20 bg-primary/5 rounded-full"
            >
              <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold">
                Seguridad de Grado Corporativo
              </span>
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white mb-8 tracking-tighter leading-none font-light italic">
              Excelencia <br />
              <span className="font-normal not-italic tracking-normal">Sin Límites</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
              Analytica Secure redefine la protección perimetral mediante inteligencia artificial avanzada. 
              Discreción absoluta para entornos de alta exigencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact">
                <button className="group relative px-10 py-5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-primary hover:text-white overflow-hidden">
                  <span className="relative z-10">Solicitar Auditoría</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="group px-10 py-5 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white/5 transition-all">
                  Nuestra Tecnología
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-10">
          <SectionHeading subtitle="Filosofía" title="El Arte de lo Invisible" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              {
                icon: Shield,
                title: "Perímetros Críticos",
                description: "Ingeniería de alta precisión para el blindaje electrónico de activos de alto valor."
              },
              {
                icon: Eye,
                title: "Inteligencia Forense",
                description: "Algoritmos de visión computacional que detectan anomalías antes de que ocurran."
              },
              {
                icon: Lock,
                title: "Legado y Discreción",
                description: "Protocolos de confidencialidad absoluta y soberanía total sobre sus datos."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group text-center"
              >
                <div className="mb-10 flex justify-center">
                  <div className="relative w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors duration-700">
                    <item.icon className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors duration-700" />
                  </div>
                </div>
                <h3 className="font-display text-lg text-white mb-6 tracking-widest uppercase font-light">{item.title}</h3>
                <p className="text-white/40 leading-relaxed text-[11px] uppercase tracking-[0.2em] max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="container mx-auto px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Alta Tecnología de Seguridad"
                  className="rounded-none grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-1000" />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                align="left"
                subtitle="Vanguardia" 
                title="Defensa Basada en Inteligencia" 
                className="mb-12"
              />
              <p className="text-white/40 text-[13px] mb-12 leading-relaxed tracking-wider uppercase">
                Analytica Secure anticipa. Al integrar redes neuronales de última generación en su infraestructura, creamos un ecosistema de protección autónomo y proactivo.
              </p>
              
              <ul className="space-y-6 mb-16">
                {[
                  "Reconocimiento biométrico no invasivo",
                  "Análisis predictivo de patrones de riesgo",
                  "Soberanía total de datos en servidores locales",
                  "Visión térmica de alta definición"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-6 text-white/60"
                  >
                    <div className="w-1 h-1 bg-primary" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/technology">
                <button className="text-white text-[9px] uppercase tracking-[0.4em] font-bold border-b border-white/20 pb-2 hover:border-primary transition-colors">
                  Especificaciones del Sistema
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

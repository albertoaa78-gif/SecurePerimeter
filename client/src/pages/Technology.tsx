import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Cpu, Network, Database, ShieldCheck } from "lucide-react";

export default function Technology() {
  const features = [
    {
      icon: Cpu,
      title: "Procesamiento de IA en el Borde",
      description: "El procesamiento ocurre en el propio dispositivo, asegurando una latencia de milisegundos y eliminando cuellos de botella. Las decisiones se toman instantáneamente a nivel de cámara."
    },
    {
      icon: Network,
      title: "Red de Malla Neuronal",
      description: "Las cámaras se comunican entre sí para rastrear sujetos en todo el perímetro de la propiedad sin interrupciones, transfiriendo los datos de seguimiento de forma inteligente."
    },
    {
      icon: Database,
      title: "Almacenamiento Local Encriptado",
      description: "Los NVR locales encriptados con AES-256 garantizan que sus grabaciones nunca salgan de su control físico, a menos que autorice explícitamente el acceso remoto seguro."
    },
    {
      icon: ShieldCheck,
      title: "Filtrado de Falsas Alarmas",
      description: "Nuestros modelos propios de aprendizaje profundo filtran la fauna, el clima y el movimiento del follaje con una precisión del 99.9%, alertándole solo cuando realmente importa."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading subtitle="La Columna Vertebral" title="Pila Tecnológica Avanzada" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            No solo instalamos cámaras. Desplegamos una sofisticada red sensorial que aprende y se adapta a su entorno.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-display text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 border border-white/10 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* Abstract tech visualization */}
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Analytics Visualization" 
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div>
                  <div className="text-primary text-xs tracking-widest uppercase mb-2">Análisis en Vivo</div>
                  <div className="font-mono text-xs text-white/70 space-y-1">
                    <p>Objetos detectados: 0</p>
                    <p>Estado del Sistema: ACTIVO</p>
                    <p>Encriptación: HABILITADA</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

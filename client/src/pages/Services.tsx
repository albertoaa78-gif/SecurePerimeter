import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useServices } from "@/hooks/use-services";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

// Helper to render dynamic icons
const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
  // @ts-ignore
  const Icon = Icons[name] as LucideIcon;
  return Icon ? <Icon className={className} /> : <Icons.Shield className={className} />;
};

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="pt-32 pb-16 container mx-auto px-6 text-center">
        <SectionHeading 
          subtitle="Nuestra Experiencia" 
          title="Soluciones Integrales de Seguridad" 
        />
        <p className="max-w-2xl mx-auto text-muted-foreground mb-16">
          Paquetes de protección a medida para fincas, sedes corporativas e instalaciones sensibles.
        </p>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white/5 animate-pulse rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-card/40 border border-white/5 hover:border-primary/50 transition-all duration-500 text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IconRenderer name={service.icon} className="w-32 h-32 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconRenderer name={service.icon} className="w-6 h-6 text-primary" />
                  </div>
                  
                  <span className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="font-display text-xl text-white mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link href="/contact">
                    <span className="inline-flex items-center text-xs text-white uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
                      Consultar
                      <Icons.ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white/5 py-24 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-6">¿Listo para mejorar su seguridad?</h2>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors">
              Programar Consulta
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

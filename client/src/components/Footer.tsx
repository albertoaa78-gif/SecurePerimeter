import { Shield, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display text-lg tracking-widest uppercase text-white">
                Analytica
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Proporcionando sistemas de protección electrónica de élite para personas de alto perfil e instalaciones seguras. Seguridad impulsada por la inteligencia.
            </p>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Navegación</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Experiencia</Link></li>
              <li><Link href="/technology" className="hover:text-primary transition-colors">Tecnología</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Consultas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Servicios</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Protección Perimetral</li>
              <li>Analítica de IA</li>
              <li>Sistemas de Vigilancia</li>
              <li>Seguridad Residencial VIP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Sede Central, Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+34 91 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>privado@analytica-secure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Analytica Secure. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Política de Privacidad</span>
            <span className="cursor-pointer hover:text-white transition-colors">Términos de Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertInquirySchema, type InsertInquiry } from "@shared/routes";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const createInquiry = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <SectionHeading 
              align="left"
              subtitle="Consulta Privada" 
              title="Inicie la Conversación" 
            />
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Operamos con estricta discreción. Envíe sus datos a continuación y un analista de seguridad senior se pondrá en contacto con usted a través de su canal seguro preferido.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-display text-lg mb-2">Línea Directa</h4>
                <p className="text-primary font-mono">+34 91 123 45 67</p>
              </div>
              <div>
                <h4 className="text-white font-display text-lg mb-2">Sede Central</h4>
                <p className="text-muted-foreground">Paseo de la Castellana 100<br/>28046 Madrid, España</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Nombre Completo</label>
                <Input 
                  {...form.register("name")}
                  className="glass-input h-12 text-white placeholder:text-white/20"
                  placeholder="Ingrese su nombre"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Correo Electrónico</label>
                  <Input 
                    {...form.register("email")}
                    className="glass-input h-12 text-white placeholder:text-white/20"
                    placeholder="nombre@empresa.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Teléfono (Opcional)</label>
                  <Input 
                    {...form.register("phone")}
                    className="glass-input h-12 text-white placeholder:text-white/20"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Requisitos de Seguridad</label>
                <Textarea 
                  {...form.register("message")}
                  className="glass-input min-h-[150px] text-white placeholder:text-white/20 resize-none"
                  placeholder="Por favor, describa sus necesidades de seguridad..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                disabled={createInquiry.isPending}
                type="submit"
                className="w-full h-12 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {createInquiry.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Transmitiendo...
                  </>
                ) : (
                  "Solicitar Consulta"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

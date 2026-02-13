import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    const seedServices = [
      {
        title: "Perímetro Inteligente con IA",
        description: "Sistemas de detección perimetral basados en redes neuronales profundas para distinguir entre amenazas reales y falsas alarmas con una precisión del 99.9%.",
        category: "ai",
        icon: "brain-circuit"
      },
      {
        title: "Protección Electrónica Avanzada",
        description: "Implementación de sensores biométricos, barreras infrarrojas y sistemas de control de acceso de grado militar para residencias VIP.",
        category: "perimeter",
        icon: "shield-check"
      },
      {
        title: "Mantenimiento VIP 24/7",
        description: "Servicio de respuesta inmediata y mantenimiento preventivo para garantizar que su sistema de seguridad esté siempre operativo y actualizado.",
        category: "maintenance",
        icon: "wrench"
      },
      {
        title: "Videoanálisis Forense",
        description: "Recuperación y análisis de eventos pasados con herramientas de búsqueda avanzada para investigaciones privadas y auditorías de seguridad.",
        category: "ai",
        icon: "search"
      },
      {
        title: "Integración Domótica Segura",
        description: "Control total de su seguridad desde una interfaz unificada, integrando iluminación, climatización y protección en una sola plataforma encriptada.",
        category: "electronic",
        icon: "home"
      }
    ];

    for (const service of seedServices) {
      await storage.createService(service);
    }
    console.log("Database seeded with services");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database on startup
  seedDatabase().catch(console.error);

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  return httpServer;
}

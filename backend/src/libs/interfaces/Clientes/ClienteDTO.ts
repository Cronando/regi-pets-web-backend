import { z } from "zod";

export const ClienteSchema = z.object({
    Nombre: z.string(),
    Apellido_Pat: z.string(),
    Apellido_Mat: z.string(),
    CURP: z.string().min(18).max(18),
    Direccion: z.string(),
    Correo: z.string().email(),
    Telefono: z.string().min(10).optional().nullable(),
    Celular: z.string().min(10).optional().nullable(),
    Status: z.boolean().optional(),
    VetID: z.number().int().nonnegative().optional()
});

export type ClienteDTO = z.infer<typeof ClienteSchema>;
export const ClienteBusquedaSchema = ClienteSchema.partial();


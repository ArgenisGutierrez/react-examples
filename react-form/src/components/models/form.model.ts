import { z } from "zod";
// creando un esquema con zod
export const schema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z
      .string()
      .email("Correo invalido")
      .min(1, "El correo es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La confirmacion debe tener al menos 6 caracteres"),
  })
  //Comprobar si los passwords coinciden
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

// creas un tipo para el form inferido con zod
export type FormValues = z.infer<typeof schema>;

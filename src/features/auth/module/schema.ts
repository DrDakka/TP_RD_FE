import z from 'zod';

const loginSchema = z
  .object({
    username: z.string().min(1),
    password: z.string().min(1),
  })
  .strict();

const registerSchema = z
  .object({
    username: z.string().min(1),
    email: z.email(),
    password: z.string().min(1),
    password_confirm: z.string().min(1),
    terms: z.literal(true),
  })
  .strict()
  .refine(data => data.password === data.password_confirm, {
    path: ['password_confirm'],
  });

export { loginSchema, registerSchema };

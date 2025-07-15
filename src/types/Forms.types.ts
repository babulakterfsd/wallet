import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: ' must be string',
      required_error: ' is required',
    })
    .email(' must be a valid email address'),
  password: z
    .string({
      invalid_type_error: ' must be string',
      required_error: ' is required',
    })
    .min(6, ' must be at least 6 characters long')
    .max(20, ' must be at most 20 characters long')
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      ' must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
});

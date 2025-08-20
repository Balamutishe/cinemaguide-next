import z from "zod";

export const UserSchema = {
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  favorites: z.array(z.string()),
};

export type TUser = z.infer<typeof UserSchema>;

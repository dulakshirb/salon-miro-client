import z from "zod";

const UserRegistrationRequestSchema = z.object({
  email: z.email({
    error: "Invalid email address",
  }),

  firstName: z
    .string({
      error: "Invalid first name",
    })
    .min(1, {
      error: "First name must be at least 1 character long",
    })
    .max(25, {
      error: "First name must be at most 25 characters long",
    }),

  lastName: z
    .string({
      error: "Invalid last name",
    })
    .min(1, {
      error: "Last name must be at least 1 character long",
    })
    .max(25, {
      error: "Last name must be at most 25 characters long",
    }),

  password: z
    .string({
      error: "Invalid password",
    })
    .min(8, {
      error: "Password must be at least 8 characters long",
    })
    .max(25, {
      error: "Password must be at most 25 characters long",
    }),
});

export default UserRegistrationRequestSchema;

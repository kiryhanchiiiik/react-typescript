import { z } from "zod";

export const tourSchema = z.object({
  id: z.string(),
});

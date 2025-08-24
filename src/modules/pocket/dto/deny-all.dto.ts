import { z } from 'zod';

export const DenyAllResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type DenyAllResponseDto = z.infer<typeof DenyAllResponseDtoSchema>;

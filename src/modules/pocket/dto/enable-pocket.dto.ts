import { z } from 'zod';

export const EnablePocketResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type EnablePocketResponseDto = z.infer<typeof EnablePocketResponseDtoSchema>;

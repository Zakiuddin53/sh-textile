import { z } from "zod";

export const measurementSchema = z.object({
  // Client Details
  username: z.string().min(2, "Username must be at least 2 characters"),
  orderNumber: z.string().min(1, "Order number is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),

  // Sherwani Measurements
  sherwaniLength: z.string(),
  sherwaniChest: z.string(),
  sherwaniBlowChest: z.string(),
  sherwaniWaist: z.string(),
  sherwaniHip: z.string(),
  sherwaniSleeve: z.string(),
  sherwaniNeck: z.string(),
  sherwaniShoulder: z.string(),
  sherwaniCap: z.string(),
  sherwaniFullHeight: z.string(),

  // Trozen Measurements
  trozenLength: z.string(),
  trozenMohri: z.string(),

  // Coat Measurements
  coatLength: z.string(),
  coatChest: z.string(),
  coatBlowChest: z.string(),
  coatWaist: z.string(),
  coatHip: z.string(),
  coatSleeve: z.string(),
  coatNeck: z.string(),
  coatShoulder: z.string(),
  coatCap: z.string(),
  coatFullHeight: z.string(),

  // Pant Measurements
  pantLength: z.string(),
  pantWaist: z.string(),
  pantThigh: z.string(),
  pantBottom: z.string(),
});

export type MeasurementFormValues = z.infer<typeof measurementSchema>;

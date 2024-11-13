"use server";

import { ApiError } from "@/lib/errors";
import { prisma } from "@/lib/prisma";
import { ApiResponse } from "@/lib/result";
import { measurementSchema } from "@/lib/validations/measurement";
import { ClientMeasurement } from "@prisma/client";
import { revalidatePath } from "next/cache";

type MeasurementListItem = Pick<
  ClientMeasurement,
  "id" | "createdAt" | "username" | "orderNumber" | "phone" | "address"
>;

export async function getMeasurements(): Promise<
  ApiResponse<MeasurementListItem[]>
> {
  const select = {
    id: true,
    createdAt: true,
    username: true,
    orderNumber: true,
    phone: true,
    address: true,
  };

  const measurements = await prisma.clientMeasurement
    .findMany({
      orderBy: { createdAt: "desc" },
      select,
    })
    .catch((error) => {
      console.error("Database error:", error);
      throw ApiError.DATABASE_ERROR(error);
    });

  return {
    success: true,
    data: measurements,
  };
}

export async function getMeasurementById(
  id: number
): Promise<ApiResponse<ClientMeasurement>> {
  return await prisma.clientMeasurement
    .findUnique({
      where: { id },
    })
    .then((measurement) => {
      if (!measurement) {
        throw ApiError.NOT_FOUND("Measurement");
      }
      return {
        success: true,
        data: measurement,
      };
    })
    .catch((error) => {
      console.error("Failed to fetch measurement:", error);
      if (error.code) {
        throw error;
      }
      throw ApiError.DATABASE_ERROR(error);
    });
}

export async function createMeasurement(
  data: unknown
): Promise<ApiResponse<ClientMeasurement>> {
  return measurementSchema
    .parseAsync(data)
    .then((validatedData) => {
      return prisma.clientMeasurement.create({
        data: validatedData,
      });
    })
    .then((measurement) => {
      revalidatePath("/records");
      return {
        success: true,
        data: measurement,
      };
    })
    .catch((error) => {
      console.error("Failed to create measurement:", error);
      if (error.name === "ZodError") {
        throw ApiError.VALIDATION_ERROR(error.errors);
      }
      throw ApiError.DATABASE_ERROR(error);
    });
}

export async function updateMeasurement(
  id: number,
  data: unknown
): Promise<ApiResponse<ClientMeasurement>> {
  return measurementSchema
    .parseAsync(data)
    .then((validatedData) => {
      return prisma.clientMeasurement.update({
        where: { id },
        data: validatedData,
      });
    })
    .then((measurement) => {
      revalidatePath("/records");
      return {
        success: true,
        data: measurement,
      };
    })
    .catch((error) => {
      console.error("Failed to update measurement:", error);
      if (error.name === "ZodError") {
        throw ApiError.VALIDATION_ERROR(error.errors);
      }
      if (error.code === "P2025") {
        throw ApiError.NOT_FOUND("Measurement");
      }
      throw ApiError.DATABASE_ERROR(error);
    });
}

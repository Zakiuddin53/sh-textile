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

export async function getMeasurements(params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<
  ApiResponse<{ measurements: MeasurementListItem[]; total: number }>
> {
  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const skip = (page - 1) * limit;
  const search = params?.search?.trim() || "";

  const where = search
    ? {
        OR: [
          { username: { contains: search, mode: "insensitive" as const } },
          { orderNumber: { contains: search, mode: "insensitive" as const } },
          { phone: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : {};

  try {
    const [measurements, total] = await Promise.all([
      prisma.clientMeasurement.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          createdAt: true,
          username: true,
          orderNumber: true,
          phone: true,
          address: true,
        },
      }),
      prisma.clientMeasurement.count({ where }),
    ]);

    return {
      success: true,
      data: { measurements, total },
    };
  } catch (error) {
    console.error("Database error:", error);
    throw ApiError.DATABASE_ERROR(error);
  }
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

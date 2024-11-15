"use server";

import { ApiError } from "@/lib/errors";
import { prisma } from "@/lib/prisma";
import { ApiResponse } from "@/lib/result";
import { measurementSchema } from "@/lib/validations/measurement";
import { ClientMeasurement } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

const buildSearchFilter = (search: string) => {
  const searchFields = ["username", "orderNumber", "phone"] as const;
  return search
    ? {
        OR: searchFields.map((field) => ({
          [field]: { contains: search, mode: "insensitive" as const },
        })),
      }
    : {};
};

const getPaginationParams = ({
  page = 1,
  limit = 10,
  search = "",
}: PaginationParams) => ({
  skip: (page - 1) * limit,
  take: limit,
  where: buildSearchFilter(search.trim()),
});

const handleError = (error: unknown, context: string) => {
  console.error(`${context}:`, error);
  if (error && typeof error === "object") {
    if ("name" in error && error.name === "ZodError") {
      return ApiError.VALIDATION_ERROR(error);
    }
    if ("code" in error && error.code === "P2025") {
      return ApiError.NOT_FOUND("Measurement");
    }
  }
  return ApiError.DATABASE_ERROR(error);
};

type MeasurementListItem = Pick<
  ClientMeasurement,
  "id" | "createdAt" | "username" | "orderNumber" | "phone" | "address"
>;

export async function getMeasurements(
  params?: PaginationParams
): Promise<
  ApiResponse<{ measurements: MeasurementListItem[]; total: number }>
> {
  const { skip, take, where } = getPaginationParams(params ?? {});

  try {
    const [measurements, total] = await Promise.all([
      prisma.clientMeasurement.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
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

    return { success: true, data: { measurements, total } };
  } catch (error) {
    throw handleError(error, "Database error");
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

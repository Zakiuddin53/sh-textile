"use server";

import { prisma } from "@/lib/prisma";
import { measurementSchema } from "@/lib/validations/measurement";
import { revalidatePath } from "next/cache";

export async function getMeasurements() {
  try {
    const measurements = await prisma.clientMeasurement.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        createdAt: true,
        username: true,
        orderNumber: true,
        phone: true,
        address: true,
      },
    });

    return {
      success: true,
      data: measurements,
    };
  } catch (error) {
    console.error("Failed to fetch measurements:", error);
    return {
      success: false,
      error: "Failed to fetch measurements",
    };
  }
}

export async function getMeasurementById(id: number) {
  try {
    const measurement = await prisma.clientMeasurement.findUnique({
      where: { id },
    });

    if (!measurement) {
      return {
        success: false,
        error: "Measurement not found",
      };
    }

    return {
      success: true,
      data: measurement,
    };
  } catch (error) {
    console.error("Failed to fetch measurement:", error);
    return {
      success: false,
      error: "Failed to fetch measurement",
    };
  }
}

export async function createMeasurement(data: unknown) {
  try {
    const validatedData = measurementSchema.parse(data);

    const measurement = await prisma.clientMeasurement.create({
      data: validatedData,
    });

    revalidatePath("/records");

    return {
      success: true,
      data: measurement,
    };
  } catch (error) {
    console.error("Failed to create measurement:", error);
    return {
      success: false,
      error: "Failed to create measurement",
    };
  }
}

export async function updateMeasurement(id: number, data: unknown) {
  try {
    const validatedData = measurementSchema.parse(data);

    const measurement = await prisma.clientMeasurement.update({
      where: { id },
      data: validatedData,
    });

    revalidatePath("/records");
    revalidatePath(`/measurements/${id}`);

    return {
      success: true,
      data: measurement,
    };
  } catch (error) {
    console.error("Failed to update measurement:", error);
    return {
      success: false,
      error: "Failed to update measurement",
    };
  }
}

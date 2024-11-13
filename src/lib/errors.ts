export const ApiError = {
  DATABASE_ERROR: (details?: unknown) => ({
    code: "DATABASE_ERROR",
    message: "Database operation failed",
    details,
  }),

  VALIDATION_ERROR: (details?: unknown) => ({
    code: "VALIDATION_ERROR",
    message: "Invalid data provided",
    details,
  }),

  NOT_FOUND: (resource: string) => ({
    code: "NOT_FOUND",
    message: `${resource} not found`,
  }),

  UNAUTHORIZED: () => ({
    code: "UNAUTHORIZED",
    message: "Unauthorized access",
  }),

  PRISMA_ERROR: (details?: unknown) => ({
    code: "PRISMA_ERROR",
    message: "Database operation failed",
    details,
  }),

  MEASUREMENT_ERROR: (action: string) => ({
    code: "MEASUREMENT_ERROR",
    message: `Failed to ${action} measurement`,
  }),

  MEASUREMENT_NOT_FOUND: () => ({
    code: "MEASUREMENT_NOT_FOUND",
    message: "Measurement record not found",
  }),
};

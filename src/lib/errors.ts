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
};

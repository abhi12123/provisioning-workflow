import z from "zod";

export const tagPattern = /^[^:]+:[^:]+$/;
export const ServiceFormSchema = z
  .object({
    serviceName: z.string().min(1, "Service name is required"),
    description: z.string().optional(),
    tags: z.array(
      z.string().regex(tagPattern, "Each tag must be in <key>:<value> format")
    ),
    softwareRelease: z.string().min(1, "Software release is required"),
    version: z.string().min(1, "Version is required"),
    createAsContainerDB: z.boolean().optional(),
    windowPreference: z.enum(["no-preferences", "select-window"], {
      errorMap: () => ({ message: "Window preference is required" }),
    }),

    // 👉 Make these optional here
    startDay: z.string().optional(),
    startTime: z.string().optional(),
    duration: z.string().optional(),

    enableAutoMinorUpdate: z.boolean(),
    sla: z.string().min(1, "SLA is required"),
    snapshotTime: z.string().min(1, "Snapshot time is required"),
  })
  .superRefine((data, ctx) => {
    if (data.windowPreference === "select-window") {
      if (!data.startDay) {
        ctx.addIssue({
          path: ["startDay"],
          code: z.ZodIssueCode.custom,
          message: "Start day is required",
        });
      }
      if (!data.startTime) {
        ctx.addIssue({
          path: ["startTime"],
          code: z.ZodIssueCode.custom,
          message: "Start time is required",
        });
      }
      if (!data.duration) {
        ctx.addIssue({
          path: ["duration"],
          code: z.ZodIssueCode.custom,
          message: "Duration is required",
        });
      }
    }
  });

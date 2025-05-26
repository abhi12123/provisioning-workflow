import React from "react";
import Heading from "../design-system/typography/Heading";
import Body from "../design-system/typography/Body";
import InputField from "../design-system/input-field";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Radix UI components
import Tag from "../design-system/tag";
import Combobox from "../design-system/combobox";
import Checkbox from "../design-system/checkbox";
import RadioGroup from "../design-system/radio-group.tsx";
import Table from "../design-system/table/index.tsx";

const tagPattern = /^[^:]+:[^:]+$/;

const FormSchema = z.object({
  serviceName: z.string().min(1, "Service name is required"),
  description: z.string().optional(),
  tags: z
    .array(
      z.string().regex(tagPattern, "Each tag must be in <key>:<value> format")
    )
    .min(1, "Atleast one tag is required"),
  softwareRelease: z.string().min(1, "Software release is required"),
  version: z.string().min(1, "Version is required"),
  createAsContainerDB: z.boolean().optional(),
  windowPreference: z.string().min(1, "Window preference is required"),
  startDay: z.string().min(1, "Start day is required"),
  startTime: z.string().min(1, "Start time is required"),
  duration: z.string().min(1, "Duration is required"),
  enableAutoMinorUpdate: z.boolean(),
  sla: z.string().min(1, "SLA is required"),
  snapshotTime: z.string().min(1, "Snapshot time is required"),
});

type FormData = z.infer<typeof FormSchema>;

const ServiceDetails = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tags: [],
      createAsContainerDB: false,
      enableAutoMinorUpdate: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const tags = watch("tags");
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.currentTarget;
      const value = input.value.trim();
      if (tagPattern.test(value)) {
        setValue("tags", [...tags, value]);
        input.value = "";
      } else {
        alert("Tags format is incorrect");
      }
    }
  };

  const windowPreference = watch("windowPreference");

  console.log(windowPreference);

  return (
    <form
      className="forms"
      id="create-service"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="service-details">
        <div>
          <Heading variant="md">Service Details</Heading>
          <Body className="description">
            Service Name, Service Description, Software Release
          </Body>
        </div>
        <div className="form-item">
          <Body as="label">Service Name</Body>
          <InputField {...register("serviceName")} />
          <Body className="form-error" variant="secondary">
            {errors.serviceName?.message}
          </Body>
        </div>

        <div className="form-item">
          <Body as="label">Description (optional)</Body>
          <InputField {...register("description")} />
        </div>

        <div className="form-item">
          <Body as="label">Tags (format: key:value)</Body>
          <InputField onKeyDown={handleAddTag} placeholder="Key:Value" />
          <ul>
            {tags.map((tag: string, index: number) => (
              <Tag
                key={index}
                onDelete={() => {
                  const newTags = tags.filter((_, i) => i !== index);
                  setValue("tags", newTags, { shouldValidate: true });
                }}
              >
                {tag}
              </Tag>
            ))}
          </ul>
          <Body className="form-error" variant="secondary">
            {errors.tags?.message}
          </Body>
        </div>

        <div className="form-item">
          <Body as="label">Software Release</Body>
          <Controller
            control={control}
            name="softwareRelease"
            render={({ field }) => (
              <Combobox
                value={field.value}
                onValueChange={field.onChange}
                options={[
                  { label: "Release 1", value: "release-1" },
                  { label: "Release 2", value: "release-2" },
                  { label: "Release 3", value: "release-3" },
                ]}
              />
            )}
          />
          <Body className="form-error" variant="secondary">
            {errors.softwareRelease?.message}
          </Body>
        </div>

        <div className="form-item">
          <Body as="label">Version</Body>
          <Controller
            control={control}
            name="version"
            render={({ field }) => (
              <Combobox
                value={field.value}
                onValueChange={field.onChange}
                options={[
                  { label: "21.0.0.0.1", value: "21.0.0.0.1" },
                  { label: "21.0.0.0.2", value: "21.0.0.0.2" },
                  { label: "21.0.0.0.3", value: "21.0.0.0.3" },
                ]}
              />
            )}
          />
          <Body className="form-error" variant="secondary">
            {errors.version?.message}
          </Body>
        </div>

        <div>
          <Body as="label">Version</Body>
          <Controller
            control={control}
            name="createAsContainerDB"
            render={({ field }) => (
              <Checkbox
                checked={!!field.value}
                onCheckedChange={(checked) => {
                  // Ignore indeterminate, but your checkbox component does that already
                  // Just ensure field.onChange gets a boolean
                  if (typeof checked === "boolean") {
                    field.onChange(checked);
                  }
                }}
                label="Create as Container Database"
              />
            )}
          />
        </div>
      </div>

      <div className="additional-settings">
        <div>
          <Heading variant="md">Engine configuration</Heading>
          <Body className="description">
            Adjustable parameters, performance optimization, fine-tuning options
          </Body>
        </div>
        <div>
          <Heading variant="sm">Maintenance Window</Heading>
          <Body variant="secondary" className="description-light">
            Adjustable parameters, performance optimization, fine-tuning options
          </Body>
        </div>
        <div>
          <Body as="label">Window Preference</Body>
          <Controller
            control={control}
            name="windowPreference"
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                options={[
                  { label: "No Preferences", value: "no-preferences" },
                  { label: "Select Window", value: "select-window" },
                ]}
                direction="row"
              />
            )}
          />
          <Body className="form-error" variant="secondary">
            {errors.windowPreference?.message}
          </Body>
        </div>

        {windowPreference === "select-window" && (
          <>
            <div className="form-item">
              <Body as="label">Start Day</Body>
              <InputField type="date" {...register("startDay")} />
              <Body className="form-error" variant="secondary">
                {errors.startDay?.message}
              </Body>
            </div>

            <div className="form-item">
              <Body as="label">Start Time</Body>
              <InputField type="time" {...register("startTime")} />
              <Body className="form-error" variant="secondary">
                {errors.startTime?.message}
              </Body>
            </div>

            <div className="form-item">
              <Body as="label">Duration</Body>
              <Controller
                control={control}
                name="duration"
                render={({ field }) => (
                  <Combobox
                    value={field.value}
                    onValueChange={field.onChange}
                    options={[
                      { label: "1", value: "1" },
                      { label: "2", value: "2" },
                      { label: "3", value: "3" },
                    ]}
                  />
                )}
              />
              <Body className="form-error" variant="secondary">
                {errors.duration?.message}
              </Body>
            </div>

            <div className="form-item">
              <Controller
                control={control}
                name="enableAutoMinorUpdate"
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    label="Enable Auto Minor Version Update"
                  />
                )}
              />
              <Body className="form-error" variant="secondary">
                {errors.enableAutoMinorUpdate?.message}
              </Body>
            </div>
          </>
        )}
        <div>
          <Heading variant="sm">Availability Machine Preferences</Heading>
          <Body variant="secondary" className="description-light">
            Here you can define your data protection SLA and schedule. Once the
            database has been created, you can further define the data
            availability and access policies from the Availability Machine app.
          </Body>
        </div>
        <div className="form-item">
          <Body as="label">SLA</Body>
          <InputField type="text" {...register("sla")} />
          <Body className="form-error" variant="secondary">
            {errors.sla?.message}
          </Body>
        </div>

        <div className="form-item">
          <Body as="label">Snapshot Time</Body>
          <InputField type="time" {...register("snapshotTime")} />
          <Body className="form-error" variant="secondary">
            {errors.snapshotTime?.message}
          </Body>
        </div>
        <Table />
      </div>
      <style jsx>{`
        .service-details,
        .additional-settings {
          display: flex;
          padding: var(--spacing-medium);
          flex-direction: column;
          align-items: flex-start;
          gap: var(--spacing-large);
          align-self: stretch;
          border-radius: var(--spacing-regular, 8px);
          background: var(--colors-surface-0);
        }
        .description {
          color: var(--colors-text-subtler);
        }
        .description-light {
          color: var(--colors-text-subtlest);
        }
        .form-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--spacing-regular, 8px);
          align-self: stretch;
          width: 360px;
        }
        .form-error {
          color: var(--colors-danger-200);
        }
        .forms {
          display: flex;
          padding-bottom: 32px;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          flex: 1 0 0;
        }
      `}</style>
    </form>
  );
};

export default ServiceDetails;

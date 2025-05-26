import React, { useEffect } from "react";
import Heading from "../design-system/typography/Heading.tsx";
import Body from "../design-system/typography/Body.tsx";
import InputField from "../design-system/input-field/index.tsx";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Tag from "../design-system/tag/index.tsx";
import Combobox from "../design-system/combobox/index.tsx";
import Checkbox from "../design-system/checkbox/index.tsx";
import RadioGroup from "../design-system/radio-group.tsx/index.tsx";
import Table from "../design-system/table/index.tsx";
import useInView from "../hooks/useInView.ts";
import RadioButton from "../design-system/radio/index.tsx";
import Label from "../design-system/label/index.tsx";
import { ServiceFormSchema, tagPattern } from "../utils/ServiceFormSchema.ts";
import { columns, rowsData } from "../utils/SampleTableData.tsx";

interface ServiceDetailsProps {
  onChangeElementInView: (element: string) => void;
}

const ServiceForm: React.FC<ServiceDetailsProps> = ({
  onChangeElementInView,
}) => {
  type FormData = z.infer<typeof ServiceFormSchema>;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    resetField,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ServiceFormSchema),
    defaultValues: {
      tags: [],
      createAsContainerDB: false,
      enableAutoMinorUpdate: false,
      windowPreference: "no-preferences",
    },
  });

  const { ref, isInView } = useInView({ threshold: 0.4 });

  const onSubmit = (data: FormData) => {
    alert(`Form submitted ${JSON.stringify(data, undefined, 4)}`);
    console.log("Form submitted:", data);
  };

  console.log(errors);

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

  useEffect(() => {
    if (isInView) {
      onChangeElementInView("additional-setting");
    } else {
      onChangeElementInView("service-details");
    }
  }, [isInView]);

  const windowPreference = watch("windowPreference");

  useEffect(() => {
    if (windowPreference === "no-preferences") {
      resetField("startDay", { defaultValue: undefined });
      resetField("startTime", { defaultValue: undefined });
      resetField("duration", { defaultValue: undefined });
    }
  }, [windowPreference, resetField]);

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
          <Label>Service Name</Label>
          <InputField {...register("serviceName")} />
          <Body className="form-error" variant="secondary">
            {errors.serviceName?.message}
          </Body>
        </div>

        <div className="form-item-description">
          <Label>Description (optional)</Label>
          <InputField
            variant="textarea"
            rows={4}
            {...register("description")}
          />
        </div>

        <div className="form-item">
          <Label>Tags</Label>
          <InputField
            onKeyDown={handleAddTag}
            placeholder="Key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:Value"
          />
          <ul className="tags-container">
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
        <div>
          <Heading variant="md">Engine configuration</Heading>
          <Body className="description">
            Adjustable parameters, performance optimization, fine-tuning options
          </Body>
        </div>
        <div className="form-column">
          <div className="form-item">
            <Label>Software Release</Label>
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
            <Label>Version</Label>
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
        </div>
        <div>
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
                id="createAsContainerDB"
              />
            )}
          />
        </div>
      </div>

      <div className="additional-setting" ref={ref}>
        <div>
          <Heading variant="sm">Maintenance Window</Heading>
          <Body variant="secondary" className="description-light">
            Adjustable parameters, performance optimization, fine-tuning options
          </Body>
        </div>
        <div className="form-item">
          <Label>Window Preference</Label>
          <Controller
            control={control}
            name="windowPreference"
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="window-preference-radio-group"
              >
                <RadioButton label="No Preferences" value="no-preferences" />
                <RadioButton label="Select window" value="select-window" />
              </RadioGroup>
            )}
          />
          <Body className="form-error" variant="secondary">
            {errors.windowPreference?.message}
          </Body>
        </div>

        {windowPreference === "select-window" && (
          <>
            <div className="form-item">
              <Label>Start Day</Label>
              <InputField type="date" {...register("startDay")} />
              <Body className="form-error" variant="secondary">
                {errors.startDay?.message}
              </Body>
            </div>

            <div className="form-item">
              <Label>Start Time</Label>
              <InputField type="time" {...register("startTime")} />
              <Body className="form-error" variant="secondary">
                {errors.startTime?.message}
              </Body>
            </div>

            <div className="form-item">
              <Label>Duration</Label>
              <Controller
                control={control}
                name="duration"
                render={({ field }) => (
                  <Combobox
                    value={field.value || ""}
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
                    id="enableAutoMinorUpdate"
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
          <Label>SLA</Label>
          <InputField type="text" {...register("sla")} />
          <Body className="form-error" variant="secondary">
            {errors.sla?.message}
          </Body>
        </div>

        <div className="form-item">
          <Label>Snapshot Time</Label>
          <InputField type="time" {...register("snapshotTime")} />
          <Body className="form-error" variant="secondary">
            {errors.snapshotTime?.message}
          </Body>
        </div>
        <Table data={rowsData} columns={columns} selectable={true} />
      </div>
      <style jsx>{`
        .service-details,
        .additional-setting {
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
          max-width: 50%;
        }
        .form-item-description {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--spacing-regular, 8px);
          align-self: stretch;
          max-width: 100%;
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
        .window-preference-radio-group {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-medium);
        }
        .tags-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-regular);
          flex-flow: wrap;
        }
        .form-column {
          display: flex;
          align-items: flex-end;
          gap: var(--spacing-medium);
          width: 100%;
        }
        .form-column .form-item {
          max-width: 100%;
          width: 100%;
        }
      `}</style>
    </form>
  );
};

export default ServiceForm;

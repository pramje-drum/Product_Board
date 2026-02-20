"use client";
import { useForm, Controller } from "react-hook-form";
import { useMemo } from "react";
import FormRenderer from "./FormRenderer/Index";

export default function FormController({ config = [], onSubmit }) {
	const defaultValues = useMemo(() => {
		return config.reduce((acc, field) => {
			acc[field.name] = field.defaultValue ?? "";
			return acc;
		}, {});
	}, [config]);

	const {
		control,
		handleSubmit,
		formState: { isLoading },
	} = useForm({
		defaultValues,
	});
	// console.log("isSubmitting:", isSubmitting);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			{config.map((fieldConfig) => (
				<Controller
					key={fieldConfig.name}
					name={fieldConfig.name}
					control={control}
					rules={fieldConfig.rules}
					render={({ field, fieldState }) => (
						<FormRenderer
							config={fieldConfig}
							field={field}
							error={fieldState.error}
						/>
					)}
				/>
			))}

			<button
				type="submit"
				disabled={isLoading}
				className="bg-slate-900 text-white py-2 rounded-md mt-4"
			>
				{isLoading ? "Logging in..." : "Login"}
			</button>
		</form>
	);
}

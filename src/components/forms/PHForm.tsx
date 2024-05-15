import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type PHFormProps = { children: React.ReactNode; onSubmit: SubmitHandler<FieldValues> };

const PHForm = ({ children, onSubmit }: PHFormProps) => {
	const methods = useForm();
	const { handleSubmit, reset } = methods;
	const submit: SubmitHandler<FieldValues> = (data) => {
		onSubmit(data);
		reset();
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submit)}>{children}</form>
		</FormProvider>
	);
};

export default PHForm;

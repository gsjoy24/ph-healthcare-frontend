import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type PHFormProps = { children: React.ReactNode; onSubmit: SubmitHandler<FieldValues> };

const PHForm = ({ children }: PHFormProps) => {
	const methods = useForm();
	const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
};

export default PHForm;

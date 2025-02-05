import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import { schema, FormValues } from "./models";

//creando el form
export const CustomForm = () => {
  //destructurar lo que necesitamos del useForm
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  //handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        control={control}
        label="Name"
        type="text"
        error={errors.name}
      />

      <InputForm
        name="email"
        control={control}
        label="Email"
        type="text"
        error={errors.email}
      />

      <InputForm
        name="password"
        control={control}
        label="Password"
        type="password"
        error={errors.password}
      />

      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirma tu Password"
        type="password"
        error={errors.confirmPassword}
      />

      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Enviar
      </button>
    </form>
  );
};

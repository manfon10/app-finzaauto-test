import { FC } from "react";

import { useFormContext } from "react-hook-form";

import styles from "../../../styles/user.module.css";
import { IFormUserProps } from "../../../types/User";

const FormUser: FC<IFormUserProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select
        className={styles.inputsForm}
        {...register("title", {
          required: "Este campo es obligatorio",
          onChange: (e) => props.handleChange(e),
        })}
        disabled={props.disabledData}
      >
        <option value="mr">mr</option>
        <option value="ms">ms</option>
        <option value="mrs">mrs</option>
        <option value="miss">miss</option>
        <option value="dr">dr</option>
      </select>
      {errors.title && errors.title.type === "required" && (
        <p className={styles.textErrorForm}>{`${errors.title.message}`}</p>
      )}
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", {
          required: "Este campo es obligatorio",
          onChange: (e) => props.handleChange(e),
        })}
        disabled={props.disabledData}
        className={styles.inputsForm}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <p className={styles.textErrorForm}>{`${errors.firstName.message}`}</p>
      )}
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", {
          required: "Este campo es obligatorio",
          onChange: (e) => props.handleChange(e),
        })}
        disabled={props.disabledData}
        className={styles.inputsForm}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <p className={styles.textErrorForm}>{`${errors.lastName.message}`}</p>
      )}
      <input
        type="text"
        placeholder="Picture"
        {...register("picture", {
          required: "Este campo es obligatorio",
          onChange: (e) => props.handleChange(e),
        })}
        disabled={props.disabledData}
        className={styles.inputsForm}
      />
      {errors.picture && errors.picture.type === "required" && (
        <p className={styles.textErrorForm}>{`${errors.picture.message}`}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Este campo es obligatorio",
          onChange: (e) => props.handleChange(e),
        })}
        disabled={props.disabledData}
        className={styles.inputsForm}
      />
      {errors.email && errors.email.type === "required" && (
        <p className={styles.textErrorForm}>{`${errors.email.message}`}</p>
      )}
    </>
  );
};

export default FormUser;

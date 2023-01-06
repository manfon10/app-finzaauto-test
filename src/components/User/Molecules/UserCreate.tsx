import { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

import IconLeft from "../Atoms/IconLeft";
import FormUser from "../Atoms/FormUser";

import styles from "../../../styles/user.module.css";
import useApi from "../../../hooks/useApi";
import { postResource } from "../../../utils/fetch";
import ButtonForm from "../Atoms/ButtonForm";

const UserCreate: FC = () => {
  const navigate = useNavigate();

  const methods = useForm({ mode: "onChange" });

  const [dataForm, setDataForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
    email: "",
  });
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [userData, setUserData] = useState({});

  const [newUser, createNewUser] = useApi(() =>
    postResource("user", "create", userData)
  );

  useEffect(() => {
    if (isSubmitForm) {
      createNewUser();
      navigate("/");
    }
  }, [isSubmitForm]);

  const handleInputChange = (event: {
    target: { name: string; value: string };
  }) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLeftPage = () => {
    navigate("/");
  };

  const handleSubmit = (data: object) => {
    setIsSubmitForm(true);
    setUserData(data);
  };

  return (
    <>
      <div>
        <div className={styles.containerTitlePage}>
          <IconLeft handleAction={handleLeftPage} />
          <h2 style={{ margin: 0 }}>Creación de Usuario</h2>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={(...args) =>
              void methods.handleSubmit(handleSubmit)(...args)
            }
            className={styles.formUser}
          >
            <FormUser handleChange={handleInputChange} />
            <ButtonForm textButton="Crear Usuario" />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default UserCreate;

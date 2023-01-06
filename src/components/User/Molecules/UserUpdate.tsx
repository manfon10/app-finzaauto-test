import { FC, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";

import IconLeft from "../Atoms/IconLeft";
import FormUser from "../Atoms/FormUser";

import styles from "../../../styles/user.module.css";
import { getResourceById, updateRoseource } from "../../../utils/fetch";
import { IDataUser } from "../../../types/User";
import ButtonForm from "../Atoms/ButtonForm";

const UserUpdate: FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const methods = useForm({ mode: "onChange" });

  const [dataForm, setDataForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
    email: "",
  });
  const [dataUser, setDataUser] = useState<IDataUser>({
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
    email: "",
    id: "",
  });

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
    if (id) {
      updateRoseource("user", id, data).then(() => navigate("/"));
    }
  };

  useEffect(() => {
    if (id) {
      getResourceById("user", id).then((res) => setDataUser(res));
    }
  }, [id]);

  useEffect(() => {
    if (dataUser) {
      methods.setValue("title", dataUser.title);
      methods.setValue("firstName", dataUser.firstName);
      methods.setValue("lastName", dataUser.lastName);
      methods.setValue("picture", dataUser.picture);
      methods.setValue("email", dataUser.email);
    }
  }, [dataUser]);

  return (
    <>
      <div>
        <div className={styles.containerTitlePage}>
          <IconLeft handleAction={handleLeftPage} />
          <h2 style={{ margin: 0 }}>Actualizar Usuario</h2>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={(...args) =>
              void methods.handleSubmit(handleSubmit)(...args)
            }
            className={styles.formUser}
          >
            <FormUser handleChange={handleInputChange} />
            <ButtonForm textButton="Actualizar Usuario" />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default UserUpdate;

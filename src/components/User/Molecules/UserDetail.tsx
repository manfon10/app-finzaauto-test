import { FC, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";

import IconLeft from "../Atoms/IconLeft";
import FormUser from "../Atoms/FormUser";

import styles from "../../../styles/user.module.css";
import { getResourceById } from "../../../utils/fetch";
import { IDataUser } from "../../../types/User";

const UserDetail: FC = () => {
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
          <h2 style={{ margin: 0 }}>Detalle Usuario</h2>
        </div>
        <FormProvider {...methods}>
          <form className={styles.formUser}>
            <FormUser handleChange={handleInputChange} disabledData />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default UserDetail;

import { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/Md";
import { AiOutlineEdit, AiOutlineFolderView } from "react-icons/Ai";

import SearchBox from "../Atoms/SearchBox";
import ButtonCreateUser from "../Atoms/ButtonCreateUser";
import AlertAction from "../Atoms/AlertAction";

import useApi from "../../../hooks/useApi";

import {
  deleteResource,
  getResource,
  getResourceById,
} from "../../../utils/fetch";

import styles from "../../../styles/home.module.css";
import ResultSearch from "../../User/Atoms/ResultSearch";
import { IDataUser } from "../../../types/User";

const Home: FC = () => {
  const navigate = useNavigate();

  const [usersResponse, getUsers, isLoading] = useApi(() =>
    getResource("user")
  );

  const [userId, setUserId] = useState("");
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const [dataUser, setDataUser] = useState({
    id: "",
    title: "",
    firstName: "",
    lastName: "",
  });
  const [isErrorFetch, setIsErroFetch] = useState("");

  const [user, deleteUser] = useApi(() => deleteResource("user", userId));

  const handleCreateUser = () => {
    navigate("/create-user");
  };

  const handleDeleteUser = () => {
    setIsSubmitForm(true);
    setIsDeleteUser(false);
  };

  const handleViewAlert = (id: string) => {
    setUserId(id);
    setIsDeleteUser(true);
  };

  const handleCloseAlert = () => {
    setIsDeleteUser(false);
  };

  const handleChangeDataSearch = (event: {
    target: { name: string; value: string };
  }) => {
    getResourceById("user", event.target.value)
      .then((res) => {
        setDataUser(res);
        setIsOpenSearchBox(true);
        setIsErroFetch("");
      })
      .catch((err) => {
        setIsErroFetch(err.response.data.error);
        setIsOpenSearchBox(false);
      });
  };

  useEffect(() => {
    void getUsers();
  }, []);

  useEffect(() => {
    if (isSubmitForm) {
      void deleteUser();
      void getUsers();
    }
  }, [isSubmitForm]);

  return (
    <>
      <div className={styles.containerActionsHome}>
        <>
          <SearchBox handleChange={handleChangeDataSearch} />
          {dataUser && isOpenSearchBox && (
            <ResultSearch>
              <div onClick={() => navigate(`/update-user/${dataUser.id}`)}>
                <label>Nombres y Apellidos</label>
                <p>{`${dataUser.title} ${dataUser.firstName} ${dataUser.lastName}`}</p>
              </div>
            </ResultSearch>
          )}
          {isErrorFetch && !isOpenSearchBox && <p>{isErrorFetch}</p>}
          <ButtonCreateUser handleAction={handleCreateUser} />
        </>
      </div>
      <div className={styles.containerInfoUsers}>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Id</th>
              <th style={{ width: "200px", textAlign: "center" }}>
                Nombres y Apellidos
              </th>
              <th>Foto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              usersResponse &&
              usersResponse.map(
                ({ id, title, firstName, lastName, picture }: IDataUser) => (
                  <tr key={id}>
                    <td>
                      <p className={styles.formatText}>{id}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p
                        className={styles.formatText}
                      >{`${title} ${firstName} ${lastName}`}</p>
                    </td>
                    <td>
                      <img
                        className={styles.imageDataUser}
                        src={picture}
                        alt={`${firstName} ${lastName}`}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => handleViewAlert(id)}
                        className={styles.buttonActions}
                      >
                        <MdDeleteOutline />
                      </button>
                      <button
                        onClick={() => navigate(`/update-user/${id}`)}
                        className={styles.buttonActions}
                      >
                        <AiOutlineEdit />
                      </button>
                      <button
                        onClick={() => navigate(`/detail-user/${id}`)}
                        className={styles.buttonActions}
                      >
                        <AiOutlineFolderView />
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
      {isDeleteUser && (
        <AlertAction
          handleAction={() => handleDeleteUser()}
          handleActionCancel={handleCloseAlert}
        />
      )}
    </>
  );
};

export default Home;

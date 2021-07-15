import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList/CategoriesList";
import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";
import CartPage from "./Components/Pages/CartPage/CartPage";
import Modal from "./Components/ModalDialog/ModalDialog";
import "./App.css";

function App() {
  const [state, setState] = useState({
    data: [],
    dataActive: {},
    dataCartGoods: [],
    loading: true,
    strSearch: "",
    productsInCart: 0,
    showModal: false,
    closeOnEsc: true,
    pugNumber: 0,
  });

  useEffect(() => {
    udatePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function udatePage() {
    setTimeout(() => {
      fetch(`https://api.punkapi.com/v2/beers`)
        .then((resp) => resp.json())
        .then((data) => {
          updateData({
            data: data,
            dataActive: data[0],
            loading: false,
          });
        });
    }, 1000);
  }

  function updateData(data) {
    setState((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  }

  function toggleModal() {
    updateData({
      showModal: !showModal,
    });
  }

  function inputBlur({ target }) {
    let error = document.getElementById("error");
    switch (target.id) {
      case "name":
        if (target.value === "") {
          error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
        }
        break;
      case "date of birth":
        if (target.value === "") {
          error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
        }
        break;
      case "e-mail":
        if (target.value === "") {
          error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
        } else if (!target.value.includes("@")) {
          target.classList.add("invalid");
          error.innerHTML = `Пожалуйста, введите правильный email.`;
        }
        break;
      case "password":
        if (target.value === "") {
          error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
        } else if (target.value.length < 6) {
          target.classList.add("invalid");
          error.innerHTML = `Пожалуйста, введите пароль более 6 символов.`;
        }
        break;
      default:
        alert("Нет таких значений");
    }
  }

  function inputFocus({ target }) {
    let error = document.getElementById("error");
    if (target.classList.contains("invalid")) {
      target.classList.remove("invalid");
      error.innerHTML = "";
    }
  }

  const {
    data,
    dataActive,
    dataCartGoods,
    loading,
    strSearch,
    productsInCart,
    showModal,
    closeOnEsc,
    pugNumber,
  } = state;

  return (
    <Fragment>
      <div className="App">
        <Header productsInCart={productsInCart} onModalClose={toggleModal} />
        <main>
          <div className="container">
            {loading ? (
              <Spinner />
            ) : (
              <Switch>
                <Route
                  path="/"
                  exact={true}
                  render={() => (
                    <CategoriesList
                      data={data}
                      dataActive={dataActive}
                      dataCart={dataCartGoods}
                      strSearch={strSearch}
                      productsInCart={productsInCart}
                      updateData={updateData}
                      pugNumber={pugNumber}
                    />
                  )}
                />
                <Route
                  path="/cart"
                  exact={true}
                  render={() => (
                    <CartPage
                      data={data}
                      dataCartGoods={dataCartGoods}
                      productsInCart={productsInCart}
                      updateData={updateData}
                    />
                  )}
                />
              </Switch>
            )}
          </div>
        </main>
        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
      {showModal && (
        <Modal onModalClose={toggleModal} closeOnEsc={closeOnEsc}>
          <Modal.Header>Registration</Modal.Header>
          <Modal.Body>
            <form className="form">
              <div>
                <span>{"name: "}</span>
                <input
                  type="text"
                  id="name"
                  onBlur={(e) => {
                    inputBlur(e);
                  }}
                  onFocus={(e) => {
                    inputFocus(e);
                  }}
                />
              </div>
              <div>
                <span>{"date of birth: "}</span>
                <input
                  type="text"
                  id="date of birth"
                  onBlur={(e) => {
                    inputBlur(e);
                  }}
                  onFocus={(e) => {
                    inputFocus(e);
                  }}
                />
              </div>
              <div>
                <span>{"e-mail: "}</span>
                <input
                  type="text"
                  id="e-mail"
                  onBlur={(e) => {
                    inputBlur(e);
                  }}
                  onFocus={(e) => {
                    inputFocus(e);
                  }}
                />
              </div>
              <div>
                <span>{"password: "}</span>
                <input
                  type="text"
                  id="password"
                  onBlur={(e) => {
                    inputBlur(e);
                  }}
                  onFocus={(e) => {
                    inputFocus(e);
                  }}
                />
              </div>
              <div id="error" className="error"></div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="submit-btn"
              title="Закрыть окно"
              onClick={toggleModal}
            >
              Submit
            </button>
            <button
              className="close-btn"
              title="Закрыть окно"
              onClick={toggleModal}
            >
              Закрыть
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </Fragment>
  );
}

export default App;

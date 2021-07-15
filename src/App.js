import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList/CategoriesList";
import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";
import CartPage from "./Components/Pages/CartPage/CartPage";
import Modal from "./Components/ModalDialog/ModalDialog";
import { inputBlur } from "./services/inputBlur";
import { inputFocus } from "./services/inputFocus";
import { fetchData } from "./services/fetchData";
import { toggleModal } from "./services/toggleModal";

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

  function updateData(data) {
    setState((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  }

  useEffect(() => {
    fetchData(updateData);
  }, []);

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
        <Header
          productsInCart={productsInCart}
          onModalClose={() => {
            toggleModal(updateData, showModal);
          }}
        />
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
        <Modal
          onModalClose={() => {
            toggleModal(updateData, showModal);
          }}
          closeOnEsc={closeOnEsc}
        >
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
              title="Submit"
              onClick={() => {
                toggleModal(updateData, showModal);
              }}
            >
              Submit
            </button>
            <button
              className="close-btn"
              title="Закрыть окно"
              onClick={() => {
                toggleModal(updateData, showModal);
              }}
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

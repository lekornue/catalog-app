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
      fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=5`)
        .then((resp) => resp.json())
        .then((data) =>
          updateData({
            data: data,
            dataActive: data[0],
            loading: false,
          })
        );
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

  const {
    data,
    dataActive,
    dataCartGoods,
    loading,
    strSearch,
    productsInCart,
    showModal,
    closeOnEsc,
  } = state;

  return (
    <Fragment>
      <div className="App">
        <Header
          productsInCart={productsInCart}
          onModalClose={toggleModal}
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
                      dataCart = {dataCartGoods}
                      strSearch={strSearch}
                      productsInCart={productsInCart}
                      updateData={updateData}
                    />
                  )}
                />
                <Route
                  path="/cart"
                  exact={true}
                  render={() => <CartPage dataCartGoods={dataCartGoods} />}
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
                <input type="text" />
              </div>
              <div>
                <span>{"date of birth: "}</span>
                <input type="text" />
              </div>
              <div>
                <span>{"e-mail: "}</span>
                <input type="text" />
              </div>
              <div>
                <span>{"password: "}</span>
                <input type="text" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
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

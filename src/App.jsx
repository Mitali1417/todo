import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { styles } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={`${styles.main} ${styles.xPaddings}`}>
          <AllRoutes />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

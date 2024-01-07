import { useState } from "react";
import s from "./tablet.module.scss";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Third from "./Third";
const Tablet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const setPage = () => {
    switch (currentPage) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <Third />;
      default:
        return <FirstPage />;
    }
  };
  return (
    <div className={s.container}>
      {setPage()}
      <div className={s.slider}>
        <button
          onClick={() => handleChangePage(1)}
          className={`${s.slider_btn} ${
            currentPage === 1 && s.slider_btn_active
          } `}
        ></button>
        <button
          onClick={() => handleChangePage(2)}
          className={`${s.slider_btn} ${
            currentPage === 2 && s.slider_btn_active
          } `}
        ></button>
        <button
          onClick={() => handleChangePage(3)}
          className={`${s.slider_btn} ${
            currentPage === 3 && s.slider_btn_active
          } `}
        ></button>
      </div>
    </div>
  );
};
export default Tablet;

import { useState } from "react";

import s from "./header.module.scss";

import Content from "./Content/Content";
import Panel from "./Panel/Panel";
import Modal from "../Modal/Modal";

import { useSelector, useDispatch } from "react-redux";
import { changeModalVisability } from "../../Redux/slices/sliceUI";

const Header = () => {
  const dispatch = useDispatch();
  const modalVisability = useSelector((state) => state.ui.modalVisability);
  const handleToggleModal = (value) => {
    dispatch(changeModalVisability(value));
  };
  return (
    <header className={s.header}>
      {modalVisability && <Modal handleToggleModal={handleToggleModal} />}
      <div className={s.wrapper}>
        <Panel handleToggleModal={handleToggleModal} />
        <Content />
      </div>
    </header>
  );
};

export default Header;

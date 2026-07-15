import React from "react";
import { FaCamera, FaEye, FaTrash } from "react-icons/fa";

import {
  Overlay,
  Menu,
  Item,
  CancelButton,
} from "./styles";

const ImageMenu = ({
  onView,
  onUpload,
  onRemove,
  onClose,
}) => {
  return (
    <Overlay onClick={onClose}>
      <Menu onClick={(e) => e.stopPropagation()}>

        <Item onClick={onView}>
          <FaEye />
          <span>Ver foto</span>
        </Item>

        <Item onClick={onUpload}>
          <FaCamera />
          <span>Alterar foto</span>
        </Item>

        <Item onClick={onRemove}>
          <FaTrash />
          <span>Remover foto</span>
        </Item>

        <CancelButton onClick={onClose}>
          Cancelar
        </CancelButton>

      </Menu>
    </Overlay>
  );
};

export { ImageMenu };
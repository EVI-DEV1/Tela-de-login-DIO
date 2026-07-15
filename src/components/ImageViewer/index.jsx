import React from "react";

import {
    Overlay,
    Image,
    CloseButton
} from "./styles";

const ImageViewer = ({ image, onClose }) => {
    return (
        <Overlay onClick={onClose}>

            <Image
                src={image}
                alt="Imagem"
                onClick={(e) => e.stopPropagation()}
            />

            <CloseButton onClick={onClose}>
                ✕
            </CloseButton>

        </Overlay>
    );
};

export { ImageViewer };
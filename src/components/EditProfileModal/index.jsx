import React, { useState } from "react";

import {
    Overlay,
    Modal,
    Title,
    Form,
    Input,
    TextArea,
    Buttons,
    CancelButton,
    SaveButton
} from "./styles";

const EditProfileModal = ({ user, onClose, onSave }) => {

    const [formData, setFormData] = useState({
        profession: user?.profession || "",
        bio: user?.bio || "",
        location: user?.location || "",
        github: user?.github || "",
        linkedin: user?.linkedin || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Overlay>

            <Modal>

                <Title>Editar Perfil</Title>

                <Form>

                    <Input
                        placeholder="Profissão"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                    />

                    <TextArea
                        placeholder="Bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                    />

                    <Input
                        placeholder="Cidade"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <Input
                        placeholder="GitHub"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                    />

                    <Input
                        placeholder="LinkedIn"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                    />

                </Form>

                <Buttons>

                    <CancelButton onClick={onClose}>
                        Cancelar
                    </CancelButton>

                    <SaveButton onClick={() => onSave(formData)}>
                        Salvar
                    </SaveButton>

                </Buttons>

            </Modal>

        </Overlay>
    );
};

export { EditProfileModal };
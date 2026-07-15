import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { api } from "../../services/api";

import {
  Container,
  Card,
  Title,
  Input,
  TextArea,
  Button,
} from "./styles";

const EditProfile = () => {
  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const [formData, setFormData] = useState({
    name: loggedUser?.name || "",
    profession: loggedUser?.profession || "",
    location: loggedUser?.location || "",
    github: loggedUser?.github || "",
    linkedin: loggedUser?.linkedin || "",
    portfolio: loggedUser?.portfolio || "",
    bio: loggedUser?.bio || "",
    skills: loggedUser?.skills?.join(", ") || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const skillsArray = formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");

      const updatedUser = {
        ...loggedUser,
        ...formData,
        skills: skillsArray,
      };

      const { data } = await api.put(`/users/${loggedUser.id}`, updatedUser);

      localStorage.setItem("loggedUser", JSON.stringify(data));

      alert("Perfil atualizado com sucesso!");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar perfil.");
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Card>
          <Title>Editar Perfil</Title>

          <Input name="name" placeholder="Nome completo" value={formData.name} onChange={handleChange} />

          <Input name="profession" placeholder="Profissão" value={formData.profession} onChange={handleChange} />

          <Input name="location" placeholder="Cidade" value={formData.location} onChange={handleChange} />

          <Input name="github" placeholder="GitHub" value={formData.github} onChange={handleChange} />

          <Input name="linkedin" placeholder="LinkedIn" value={formData.linkedin} onChange={handleChange} />

          <Input name="portfolio" placeholder="Portfólio" value={formData.portfolio} onChange={handleChange} />

          <TextArea name="bio" rows={5} placeholder="Conte um pouco sobre você..." value={formData.bio} onChange={handleChange} />

          <Input
            name="skills"
            placeholder="Tecnologias separadas por vírgula. Ex: React, JavaScript, CSS"
            value={formData.skills}
            onChange={handleChange}
          />

          <Button type="button" onClick={handleSave}>
            Salvar Perfil
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default EditProfile;
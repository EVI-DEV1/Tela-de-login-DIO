import reactBanner from "../assets/banners/react.png";
import htmlBanner from "../assets/banners/html.png";
import cssBanner from "../assets/banners/css.png";
import javascriptBanner from "../assets/banners/javascript.png";
import nodeBanner from "../assets/banners/node.png";
import pythonBanner from "../assets/banners/python.png";
import javaBanner from "../assets/banners/java.png";
import mysqlBanner from "../assets/banners/mysql.png";


export const posts = [
  {
    id: 1,
    user: "Pablo Henrique",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    banner: reactBanner,
    time: "Há 8 minutos",
    title: "Criando aplicações modernas e Escaláveis com React",
    description:
      "Aprenda componentização, Hooks, rotas e consumo de APIs criando projetos reais.",
    likes: 182,
    comments: 38,
    tags: ["React", "Hooks", "JavaScript"],
  },

  {
    id: 2,
    user: "Mariana Lima",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    banner: htmlBanner,
    time: "Há 45 minutos",
    title: "Estruture páginas com semântica usando o HTML5",
    description:
      "Estruture páginas modernas utilizando as principais tags semânticas.",
    likes: 143,
    comments: 26,
    tags: ["HTML5", "Semântica"],
  },

  {
    id: 3,
    user: "João Victor",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    banner: cssBanner,
    time: "Há 2 horas",
    title: "Estilize e crie layouts responsivos com CSS3",
    description:
      "Crie layouts profissionais totalmente responsivos.",
    likes: 211,
    comments: 42,
    tags: ["CSS3", "Flexbox", "Grid"],
  },

  {
    id: 4,
    user: "Fernanda Souza",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    banner: javascriptBanner,
    time: "Ontem",
    title: "Programe com lógica e interatividade usando JavaScript",
    description:
      "Domine funções, objetos, arrays, promises e async/await.",
    likes: 320,
    comments: 81,
    tags: ["JavaScript", "ES6"],
  },

  {
    id: 5,
    user: "Lucas Oliveira",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    banner: nodeBanner,
    time: "Ontem",
    title: "Crie APIs RESTful e aplicações poderosas com Node.js e Express",
    description:
      "Desenvolva APIs completas utilizando Express e integração com banco de dados.",
    likes: 275,
    comments: 59,
    tags: ["Node.js", "Express"],
  },

  {
    id: 6,
    user: "Amanda Costa",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    banner: pythonBanner,
    time: "2 dias atrás",
    title: " Aprenda lógica, automação e desenvolvimento com Python",
    description:
      "Aprenda lógica, funções, listas, dicionários e automações.",
    likes: 410,
    comments: 97,
    tags: ["Python", "Automação"],
  },

  {
    id: 7,
    user: "Carlos Henrique",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    banner: javaBanner,
    time: "3 dias atrás",
    title: "Java Orientado a Objetos",
    description:
      "Construa aplicações robustas utilizando os pilares da POO.",
    likes: 267,
    comments: 54,
    tags: ["Java", "POO"],
  },

  {
    id: 8,
    user: "Beatriz Martins",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    banner: mysqlBanner,
    time: "4 dias atrás",
    title: "Banco de Dados e consultas SQL",
    description:
      "Modelagem, consultas SQL e relacionamento entre tabelas.",
    likes: 198,
    comments: 41,
    tags: ["MySQL", "SQL"],
  },
];
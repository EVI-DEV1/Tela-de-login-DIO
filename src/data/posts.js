import reactBanner from "../assets/banners/react.png";
import htmlBanner from "../assets/banners/html.png";
import cssBanner from "../assets/banners/css.png";
import javascriptBanner from "../assets/banners/javascript.png";
import programacaoBanner from "../assets/banners/programacao.png";
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
    title: "Criando aplicações modernas e escaláveis com React",
    description:
      "Aprenda componentização, Hooks, rotas e consumo de APIs criando projetos reais.",
    likes: 182,
    comments: 38,
    tags: ["React", "Hooks", "JavaScript"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 15,
    subscribedBy: [],
   
 courseUrl:
  "https://www.youtube.com/watch?v=1LhX2u6_BJE&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=1",
  },

  {
    id: 2,
    user: "Mariana Lima",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    banner: htmlBanner,
    time: "Há 45 minutos",
    title: "Estruture páginas com semântica usando HTML5",
    description:
      "Aprenda a utilizar as principais tags semânticas para criar páginas acessíveis e bem organizadas.",
    likes: 143,
    comments: 26,
    tags: ["HTML5", "Semântica"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 15,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC",
  },

  {
    id: 3,
    user: "João Victor",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    banner: cssBanner,
    time: "Há 2 horas",
    title: "Estilize e crie layouts responsivos com CSS3",
    description:
      "Crie layouts profissionais e responsivos utilizando Flexbox, Grid e Media Queries.",
    likes: 211,
    comments: 42,
    tags: ["CSS3", "Flexbox", "Grid"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 12,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
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
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 5,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
  },

  {
    id: 5,
    user: "Lucas Oliveira",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    banner: programacaoBanner,
    time: "Ontem",
    title: "Algoritmos e Lógica de Programação",
    description:
      "Aprenda algoritmos, lógica de programação, estruturas de decisão, repetição e funções com exercícios práticos.",
    likes: 275,
    comments: 59,
    tags: ["Lógica", "Algoritmos", "Programação"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 18,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
  },

  {
    id: 6,
    user: "Amanda Costa",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    banner: pythonBanner,
    time: "2 dias atrás",
    title: "Aprenda lógica, automação e desenvolvimento com Python",
    description:
      "Aprenda lógica, listas, dicionários, funções e automações utilizando Python.",
    likes: 410,
    comments: 97,
    tags: ["Python", "Automação"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 15,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6",
  },

  {
    id: 7,
    user: "Carlos Henrique",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    banner: javaBanner,
    time: "3 dias atrás",
    title: "Java Orientado a Objetos",
    description:
      "Construa aplicações robustas utilizando os pilares da Programação Orientada a Objetos.",
    likes: 267,
    comments: 54,
    tags: ["Java", "POO"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 28,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",
  },

  {
    id: 8,
    user: "Beatriz Martins",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    banner: mysqlBanner,
    time: "4 dias atrás",
    title: "Banco de Dados e Consultas SQL",
    description:
      "Aprenda modelagem de banco de dados, SQL, consultas, relacionamentos e boas práticas.",
    likes: 198,
    comments: 41,
    tags: ["MySQL", "SQL"],
    likedBy: [],
    savedBy: [],
    commentsList: [],
    subscribers: 25,
    subscribedBy: [],
    courseUrl:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r",
  },
];
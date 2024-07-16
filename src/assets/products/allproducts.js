//nsw
import nsw01_img from "../products/nsw_mo.jpg";
import nsw02_img from "../products/nsw_smash.jpg";
import nsw03_img from "../products/nsw_mk8.jpg";
import nsw04_img from "../products/nsw_ko.jpg";
import nsw05_img from "../products/nsw_zbotw.jpg";
import nsw06_img from "../products/nsw_ztofk.jpg";
import nsw07_img from "../products/nsw_metroid.jpg";
import nsw08_img from "../products/nsw_ki.jpg";
import nsw09_img from "../products/nsw_an.jpg";
import nsw10_img from "../products/tsuki.jpg";
//pc
import pc01_img from "../products/7days.jpg";
import pc02_img from "../products/baldurgate.jpg";
import pc03_img from "../products/cp.jpg";
import pc04_img from "../products/elden.jpg";
import pc05_img from "../products/daorigins.jpg";
import pc06_img from "../products/diablo4t.jpg";
import pc07_img from "../products/zomboid.jpg";
import pc08_img from "../products/rust.jpg";
import pc09_img from "../products/skyrimle.jpg";
import pc10_img from "../products/w3.jpg";
//ps
import ps01_img from "../products/sp2.jpg";
import ps02_img from "../products/p5.jpg";
import ps03_img from "../products/ff16.jpg";
import ps04_img from "../products/gt7.jpg";
import ps05_img from "../products/stray.jpg";
import ps06_img from "../products/tlou.jpg";
import ps07_img from "../products/mw2.jpg";
import ps08_img from "../products/it2.jpg";
import ps09_img from "../products/h2.jpg";
import ps10_img from "../products/gwR.jpg";
//xbox
import xbox01_img from "../products/mine.jpg";
import xbox02_img from "../products/sekiro.jpg";
import xbox03_img from "../products/2k24.jpg";
import xbox04_img from "../products/acm.jpg";
import xbox05_img from "../products/fc24.jpg";
import xbox06_img from "../products/fh5.jpg";
import xbox07_img from "../products/sea.jpg";
import xbox08_img from "../products/ufc5.jpg";
import xbox09_img from "../products/tekken8.jpg";
import xbox10_img from "../products/pal.jpg";
//prevent
import pv01_img from "../products/dragonball.jpg";
import pv02_img from "../products/zechos.jpg";
import pv03_img from "../products/gta6.jpg";
import pv04_img from "../products/ass.jpg";
import pv05_img from "../products/deadr.jpg";

//new
import nw01_img from "../products/ershadow.jpg";
import nw02_img from "../products/shin.jpg";
import nw03_img from "../products/trails.jpg";
import nw04_img from "../products/VRising.jpg";
import nw05_img from "../products/f124.jpg";
let all_products = [
  {
    id: 1,
    nombre: "Mario Odissey",
    categoria: "Nintendo Switch",
    img: nsw01_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Aventura de plataformas en 3D con Mario en el Reino Champiñón.",
    estado: "none",
  },
  {
    id: 2,
    nombre: "Super Smash Bros",
    categoria: "Nintendo Switch",
    img: nsw02_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de lucha con personajes de varias franquicias de Nintendo.",
    estado: "none",
  },
  {
    id: 3,
    nombre: "Mario Kart 8",
    categoria: "Nintendo Switch",
    img: nsw03_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de carreras con personajes y pistas del universo de Mario.",
    estado: "none",
  },
  {
    id: 4,
    nombre: "Konosuba",
    categoria: "Nintendo Switch",
    img: nsw04_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego basado en la popular serie de anime Konosuba.",
    estado: "none",
  },
  {
    id: 5,
    nombre: "Zelda Breath of the Wild",
    categoria: "Nintendo Switch",
    img: nsw05_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Aventura de mundo abierto con Link en el reino de Hyrule.",
    estado: "none",
  },
  {
    id: 6,
    nombre: "Zelda Tears of the Kingdom",
    categoria: "Nintendo Switch",
    img: nsw06_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Secuela de Breath of the Wild con nuevas aventuras y desafíos.",
    estado: "none",
  },
  {
    id: 7,
    nombre: "Metroid Prime Remastered",
    categoria: "Nintendo Switch",
    img: nsw07_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Versión remasterizada del clásico Metroid Prime.",
    estado: "none",
  },
  {
    id: 8,
    nombre: "Kirby and the Forgotten Land",
    categoria: "Nintendo Switch",
    img: nsw08_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de plataformas en 3D con Kirby explorando un nuevo mundo.",
    estado: "none",
  },
  {
    id: 9,
    nombre: "Animal Crossing: New Horizons",
    categoria: "Nintendo Switch",
    img: nsw09_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Simulación de vida en una isla desierta con animales antropomorfos.",
    estado: "none",
  },
  {
    id: 10,
    nombre: "Tsukihime",
    categoria: "Nintendo Switch",
    img: nsw10_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de novela visual con elementos de romance y misterio.",
    estado: "none",
  },
  {
    id: 11,
    nombre: "7 Days to Die",
    categoria: "PC",
    img: pc01_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de supervivencia en mundo abierto con temática de zombies.",
    estado: "none",
  },
  {
    id: 12,
    nombre: "Baldur's Gate",
    categoria: "PC",
    img: pc02_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de rol basado en el universo de Dungeons & Dragons.",
    estado: "none",
  },
  {
    id: 13,
    nombre: "CyberPunk 2077",
    categoria: "PC",
    img: pc03_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de rol de acción ambientado en un futuro distópico.",
    estado: "none",
  },
  {
    id: 14,
    nombre: "Elden Ring",
    categoria: "PC",
    img: pc04_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de rol y acción en un mundo de fantasía oscura.",
    estado: "none",
  },
  {
    id: 15,
    nombre: "Dragon Age: Origins",
    categoria: "PC",
    img: pc05_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de rol clásico con una narrativa épica y combates tácticos.",
    estado: "none",
  },
  {
    id: 16,
    nombre: "Diablo IV",
    categoria: "PC",
    img: pc06_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de rol y acción en el mundo de fantasía oscura de Sanctuary.",
    estado: "none",
  },
  {
    id: 17,
    nombre: "Project Zomboid",
    categoria: "PC",
    img: pc07_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de supervivencia en un mundo apocalíptico lleno de zombies.",
    estado: "none",
  },
  {
    id: 18,
    nombre: "Rust",
    categoria: "PC",
    img: pc08_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Juego de supervivencia en un mundo abierto donde la vida es brutal.",
    estado: "none",
  },
  {
    id: 19,
    nombre: "Skyrim",
    categoria: "PC",
    img: pc09_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Juego de rol en un vasto mundo de fantasía lleno de dragones.",
    estado: "none",
  },
  {
    id: 20,
    nombre: "Witcher 3",
    categoria: "PC",
    img: pc10_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Juego de rol y acción en un mundo de fantasía con Geralt de Rivia.",
    estado: "none",
  },
  {
    id: 21,
    nombre: "Spider-man 2",
    categoria: "PlayStation",
    img: ps01_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de acción y aventura con Spider-Man enfrentando nuevos enemigos.",
    estado: "none",
  },
  {
    id: 22,
    nombre: "Persona 5",
    categoria: "PlayStation",
    img: ps02_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de rol japonés con elementos de simulación social.",
    estado: "none",
  },
  {
    id: 23,
    nombre: "Final Fantasy XVI",
    categoria: "PlayStation",
    img: ps03_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de rol y acción en el universo de Final Fantasy.",
    estado: "none",
  },
  {
    id: 24,
    nombre: "Gran Turismo 7",
    categoria: "PlayStation",
    img: ps04_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de simulación de carreras con gráficos realistas.",
    estado: "none",
  },
  {
    id: 25,
    nombre: "Stray",
    categoria: "PlayStation",
    img: ps05_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de aventuras donde controlas a un gato en un mundo cyberpunk.",
    estado: "none",
  },
  {
    id: 26,
    nombre: "The Last Of Us I",
    categoria: "PlayStation",
    img: ps06_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion: "Juego de acción y aventura en un mundo post-apocalíptico.",
    estado: "none",
  },
  {
    id: 27,
    nombre: "Modern Warfare 2",
    categoria: "PlayStation",
    img: ps07_img,
    precio: 99999,
    precio_oferta: 99999,
    descripcion:
      "Juego de disparos en primera persona con una campaña intensa.",
    estado: "none",
  },
  {
    id: 28,
    nombre: "It Takes Two",
    categoria: "PlayStation",
    img: ps08_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de aventuras cooperativo que te lleva a un viaje emocionante y único.",
    estado: "none",
  },
  {
    id: 29,
    nombre: "Helldivers 2",
    categoria: "PlayStation",
    img: ps09_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de acción cooperativo en el que te enfrentarás a hordas de enemigos alienígenas.",
    estado: "none",
  },
  {
    id: 30,
    nombre: "God Of War Ragnarok",
    categoria: "PlayStation",
    img: ps10_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La esperada secuela de God of War, donde Kratos y Atreus se enfrentan a nuevas amenazas.",
    estado: "none",
  },
  {
    id: 31,
    nombre: "Minecraft",
    categoria: "Xbox",
    img: xbox01_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de construcción y aventura que te permite crear y explorar mundos infinitos.",
    estado: "none",
  },
  {
    id: 32,
    nombre: "Sekiro",
    categoria: "Xbox",
    img: xbox02_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de acción y aventura con combates desafiantes ambientado en el Japón feudal.",
    estado: "none",
  },
  {
    id: 33,
    nombre: "2K24",
    categoria: "Xbox",
    img: xbox03_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La última entrega del popular juego de baloncesto, con gráficos mejorados y nuevas características.",
    estado: "none",
  },
  {
    id: 34,
    nombre: "Assassin's Creed Mirage",
    categoria: "Xbox",
    img: xbox04_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un nuevo capítulo en la saga de Assassin's Creed, ambientado en un exótico mundo abierto.",
    estado: "none",
  },
  {
    id: 35,
    nombre: "FC24",
    categoria: "Xbox",
    img: xbox05_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La última entrega del popular juego de fútbol, con mejoras en jugabilidad y gráficos.",
    estado: "none",
  },
  {
    id: 36,
    nombre: "Forza Horizon 5",
    categoria: "Xbox",
    img: xbox06_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de carreras en mundo abierto con una impresionante variedad de coches y paisajes.",
    estado: "none",
  },
  {
    id: 37,
    nombre: "Sea of Thieves",
    categoria: "Xbox",
    img: xbox07_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de aventuras pirata donde puedes explorar un mundo abierto lleno de tesoros y peligros.",
    estado: "none",
  },
  {
    id: 38,
    nombre: "UFC 5",
    categoria: "Xbox",
    img: xbox08_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La última entrega del popular juego de lucha UFC, con gráficos realistas y jugabilidad mejorada.",
    estado: "none",
  },
  {
    id: 39,
    nombre: "Tekken 8",
    categoria: "Xbox",
    img: xbox09_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La próxima entrega de la clásica serie de juegos de lucha Tekken, con nuevos personajes y mecánicas.",
    estado: "none",
  },
  {
    id: 40,
    nombre: "PalWorld",
    categoria: "Xbox",
    img: xbox10_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de aventuras y supervivencia en el que puedes capturar y entrenar criaturas fantásticas.",
    estado: "none",
  },
  {
    id: 41,
    nombre: "Dragon Ball Sparking Zero",
    categoria: "PC",
    img: pv01_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un emocionante juego de lucha basado en la popular serie Dragon Ball, con intensas batallas y personajes icónicos.",
    estado: "preventa",
  },
  {
    id: 42,
    nombre: "Zelda Echos of Wisdom",
    categoria: "PC",
    img: pv02_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Una nueva entrega en la legendaria serie de aventuras Zelda, con un mundo abierto lleno de misterios.",
    estado: "preventa",
  },
  {
    id: 43,
    nombre: "GTA 6",
    categoria: "PC",
    img: pv03_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La esperada próxima entrega de la popular serie de juegos de acción y mundo abierto, Grand Theft Auto.",
    estado: "preventa",
  },
  {
    id: 44,
    nombre: "Assassin's Creed Shadows",
    categoria: "PC",
    img: pv04_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Una nueva aventura en la saga de Assassin's Creed, con un intrigante escenario y jugabilidad mejorada.",
    estado: "preventa",
  },
  {
    id: 45,
    nombre: "Dead Rising Remastered",
    categoria: "PC",
    img: pv05_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Una versión mejorada del clásico juego de supervivencia y zombis, con gráficos actualizados y nuevo contenido.",
    estado: "preventa",
  },
  {
    id: 46,
    nombre: "Shadow of the Erdtree DLC",
    categoria: "DLC",
    img: nw01_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Una expansión emocionante para un popular juego de rol, con nuevas misiones y contenido.",
    estado: "nuevo",
  },
  {
    id: 47,
    nombre: "Shin Megami Tensei: Vengeance",
    categoria: "DLC",
    img: nw02_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un nuevo capítulo en la serie de juegos de rol Shin Megami Tensei, con una historia oscura y desafiante.",
    estado: "nuevo",
  },
  {
    id: 48,
    nombre: "Trails Through DayBreak",
    categoria: "DLC",
    img: nw03_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Una expansión épica para un popular juego de rol, con nuevas aventuras y personajes.",
    estado: "nuevo",
  },
  {
    id: 49,
    nombre: "V Rising",
    categoria: "DLC",
    img: nw04_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "Un juego de supervivencia y construcción en el que juegas como un vampiro en un mundo oscuro y misterioso.",
    estado: "nuevo",
  },
  {
    id: 50,
    nombre: "F1 24",
    categoria: "DLC",
    img: nw05_img,
    precio: 60000,
    precio_oferta: 45000,
    descripcion:
      "La última entrega de la serie de juegos de carreras de Fórmula 1, con gráficos mejorados y nueva jugabilidad.",
    estado: "nuevo",
  },
];

export default all_products;

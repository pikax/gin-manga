import axios from 'axios'

export function getAllMangas() {
  return Promise.resolve(all);
}


export function getInfo(title: string) {
  return axios.get("/static/info/" + title + '.json')
    .then(x => x.data);
}

export function getChapters(title: string) {

  console.log("/static/chapters/" + title + '.json')
  return axios.get("/static/chapters/" + title + '.json').then(x =>{

    console.log(x.data);
   return x.data
  } );
}

export function getChapter(title: string, chapterId) {
  return axios.get("/static/chapters/" + title + "/" + chapterId + '.json').then(x => x.data);
}


export function getImage(chapterId, imageName) {
  return axios.get(getImageUrl(chapterId, imageName)).then(x => JSON.parse(x.data));
}

export function getImageUrl(chapterId, imageName) {
  return `/static/images/${chapterId}/${imageName}`;
}


const all = [
  {
    title: "Ansatsu Kyoushitsu",
    mature: false,
    image: "/static/cover/Ansatsu Kyoushitsu-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Beelzebub",
    mature: false,
    image: "/static/cover/Beelzebub-cover.jpg",
    status: "Ongoing"
  },
  {
    title: "Berserk",
    mature: false,
    image: "/static/cover/Berserk-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Bleach",
    mature: false,
    image: "/static/cover/Bleach-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Blood Lad",
    mature: false,
    image: "/static/cover/Blood Lad-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Fairy Tail",
    mature: false,
    image: "/static/cover/Fairy Tail-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Gintama",
    mature: false,
    image: "/static/cover/Gintama-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Hungry Joker",
    mature: false,
    image: "/static/cover/Hungry Joker-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Hunter x Hunter",
    mature: false,
    image: "/static/cover/Hunter x Hunter-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Magi",
    mature: false,
    image: "/static/cover/Magi-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Naruto",
    mature: false,
    image: "/static/cover/Naruto-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Shijou Saikyou no Deshi Kenichi",
    mature: false,
    image: "/static/cover/Shijou Saikyou no Deshi Kenichi-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Toriko",
    mature: false,
    image: "/static/cover/Toriko-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Vagabond",
    mature: false,
    image: "/static/cover/Vagabond-cover.jpg",
    status: "Ongoing"
  },
  {
    title: "Katekyo Hitman Reborn!",
    mature: false,
    image: "/static/cover/Katekyo Hitman Reborn!-cover.jpg",
    status: "Ongoing"
  },
  {
    title: "Psyren",
    mature: false,
    image: "/static/cover/Psyren-cover.jpg",
    status: "Ongoing"
  },
  {
    title: "xxxHOLiC",
    mature: false,
    image: "/static/cover/xxxHOLiC-cover.jpg",
    status: "Ongoing"
  },
  {
    title: "One Piece",
    mature: false,
    image: "/static/cover/One Piece-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Akame ga Kill!",
    mature: false,
    image: "/static/cover/Akame ga Kill!-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Holyland",
    mature: false,
    image: "/static/cover/Holyland-cover.jpg",
    status: "Ongoing"
  }, {
    title: "One Punch-Man",
    mature: false,
    image: "/static/cover/ONEPUNCH-MAN-cover.jpg",
    status: "Ongoing"
  }, {
    title: "Vinland Saga",
    mature: false,
    image: "/static/cover/Vinland Saga-cover.jpg",
    status: "Ongoing"
  },

];






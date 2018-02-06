import axios from 'axios'

export function getAllMangas() {
  return Promise.resolve(all);
}


export function getInfo(title: string){
  return axios.get("/static/info/"+title+'/info.json')
      .then(x=>x.data);
}

export function getChapter(title:string, chapter){
  return axios.get("/static/info/"+title+"/"+chapter+'.json').then(x=>JSON.parse(x.data));
}


const all = [
  {
    title: "Ansatsu Kyoushitsu",
    mature: false,
    image: "/static/cover/Ansatsu Kyoushitsu.jpg",
    status: "Ongoing"
  },{
    title: "Beelzebub",
    mature: false,
    image: "/static/cover/Beelzebub.jpg",
    status: "Ongoing"
  },
  {
    title: "Berserk",
    mature: false,
    image: "/static/cover/Berserk.jpg",
    status: "Ongoing"
  },{
    title: "Bleach",
    mature: false,
    image: "/static/cover/Bleach.jpg",
    status: "Ongoing"
  },{
    title: "Blood Lad",
    mature: false,
    image: "/static/cover/Blood Lad.jpg",
    status: "Ongoing"
  },{
    title: "Fairy Tail",
    mature: false,
    image: "/static/cover/Fairy Tail.jpg",
    status: "Ongoing"
  },{
    title: "Gintama",
    mature: false,
    image: "/static/cover/Gintama.jpg",
    status: "Ongoing"
  },{
    title: "Hungry Joker",
    mature: false,
    image: "/static/cover/Hungry Joker.jpg",
    status: "Ongoing"
  },{
    title: "Hunter x Hunter",
    mature: false,
    image: "/static/cover/Hunter x Hunter.jpg",
    status: "Ongoing"
  },{
    title: "Magi",
    mature: false,
    image: "/static/cover/Magi.jpg",
    status: "Ongoing"
  },{
    title: "Naruto",
    mature: false,
    image: "/static/cover/Naruto.jpg",
    status: "Ongoing"
  },{
    title: "Shijou Saikyou no Deshi Kenichi",
    mature: false,
    image: "/static/cover/Shijou Saikyou no Deshi Kenichi.jpg",
    status: "Ongoing"
  },{
    title: "Toriko",
    mature: false,
    image: "/static/cover/Toriko.jpg",
    status: "Ongoing"
  },{
    title: "Vagabond",
    mature: false,
    image: "/static/cover/Vagabond.jpg",
    status: "Ongoing"
  },
  {
    title: "Katekyo Hitman Reborn!",
    mature: false,
    image: "/static/cover/Katekyo Hitman Reborn!.jpg",
    status: "Ongoing"
  },
  {
    title: "Psyren",
    mature: false,
    image: "/static/cover/Psyren.jpg",
    status: "Ongoing"
  },
  {
    title: "xxxHOLiC",
    mature: false,
    image: "/static/cover/xxxHOLiC.jpg",
    status: "Ongoing"
  },
  {
    title: "One Piece",
    mature: false,
    image: "/static/cover/One Piece.jpg",
    status: "Ongoing"
  },{
    title: "Akame ga Kill!",
    mature: false,
    image: "/static/cover/Akame ga Kill!.jpg",
    status: "Ongoing"
  },{
    title: "Holyland",
    mature: false,
    image: "/static/cover/Holyland.jpg",
    status: "Ongoing"
  },{
    title: "One Punch-Man",
    mature: false,
    image: "/static/cover/One Punch-Man.jpg",
    status: "Ongoing"
  },{
    title: "Vinland Saga",
    mature: false,
    image: "/static/cover/Vinland Saga.jpg",
    status: "Ongoing"
  },

];






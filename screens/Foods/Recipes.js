
const recipes = [
  {
    id: 1,
    name: "Chicken Adobo",
    discount: "20%",
    image: require("../../assets/images/chmken.jpg"),
    ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],
    description:
      "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
    time: "15 min",
    del_time: "8 min",
    cooking_time: "4 min",
  },
  {
    id: 2,
    name: "Pork Sinigang",
    discount: "30%",
    price: 25,
    image: require("../../assets/images/simigang.jpg"),
     ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],
    description:
      "Id amet veniam nisi esse ea. Ex est ut cupidatat sint culpa commodo exercitation est magna proident officia laboris. Exercitation laboris ex laborum qui mollit et occaecat deserunt incididunt. Mollit excepteur sunt adipisicing ullamco excepteur non ex proident. Irure laborum enim do fugiat aute amet eu quis amet tempor.",
    rating: 4.7,
    time: "10 min",
    del_time: "5 min",
    cooking_time: "3 min",
  },
  {
    id: 3,
    name: "Bulalo",
    discount: "10%",
    price: 19,
    image: require("../../assets/images/buuu.jpg"),
     ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],
    description:
      "Duis enim eiusmod do tempor aliqua exercitation non sunt duis excepteur eu cillum ad. Laboris sit mollit et qui quis ipsum nisi occaecat sunt et proident voluptate ipsum eiusmod. Non officia ullamco pariatur pariatur consectetur ea. Cupidatat in irure sint reprehenderit fugiat reprehenderit aute. Est minim id adipisicing aliqua ut in deserunt dolore aliquip exercitation Lorem. Fugiat tempor excepteur magna nisi.",
    rating: 4.7,
    time: "12 min",
    del_time: "6 min",
    cooking_time: "2 min",
  },
  {
    id: 4,
    name: "Kare Kare",
    discount: "25%",
    price: 34,
    image: require("../../assets/images/kare.jpg"),
 ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 4.7,
    time: "20 min",
    del_time: "10 min",
    cooking_time: "5 min",
  },
  {
    id: 5,
    name: "Pork Sisig",
    discount: "20%",
    price: 55,
    image: require("../../assets/images/simsig.jpg"),
 ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],    description:
      "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
    rating: 4.7,
    time: "15 min",
    del_time: "8 min",
    cooking_time: "4 min",
  },
  {
    id: 6,
    name: "Pinakbet Ilocano",
    discount: "30%",
    price: 72,
    image: require("../../assets/images/pinakbetn.jpg"),
 ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],    description:
      "Id amet veniam nisi esse ea. Ex est ut cupidatat sint culpa commodo exercitation est magna proident officia laboris. Exercitation laboris ex laborum qui mollit et occaecat deserunt incididunt. Mollit excepteur sunt adipisicing ullamco excepteur non ex proident. Irure laborum enim do fugiat aute amet eu quis amet tempor.",
    rating: 5,
    time: "30 min",
    del_time: "25 min",
    cooking_time: "13 min",
  },
  {
    id: 7,
    name: "Chicken Tinola",
    discount: "10%",
    price: 43,
    image: require("../../assets/images/timola.jpg"),
 ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],    description:
      "Duis enim eiusmod do tempor aliqua exercitation non sunt duis excepteur eu cillum ad. Laboris sit mollit et qui quis ipsum nisi occaecat sunt et proident voluptate ipsum eiusmod. Non officia ullamco pariatur pariatur consectetur ea. Cupidatat in irure sint reprehenderit fugiat reprehenderit aute. Est minim id adipisicing aliqua ut in deserunt dolore aliquip exercitation Lorem. Fugiat tempor excepteur magna nisi.",
    rating: 4.0,
    time: "32 min",
    del_time: "16 min",
    cooking_time: "9 min",
  },
  {
    id: 8,
    name: "Beef Kaldereta",
    discount: "45%",
    price: 21,
    image: require("../../assets/images/beep.jpg"),
 ingredients:[
        {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
    ],    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
    del_time: "10 min",
    cooking_time: "5 min",
  },
];

export default recipes;

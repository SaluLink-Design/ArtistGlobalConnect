export interface Artist {
  id: string;
  name: string;
  alias: string;
  roles: string[];
  origin: string;
  bio: string;
  knownFor?: string[];
  associatedActs: string[];
  bookingEmail: string;
  bookingPhone: string[];
  generalEmail?: string;
  image: string;
  imageCasual?: string;
}

export const artists: Artist[] = [
  {
    id: "eeque",
    name: "Leago Sinclair Moganedi",
    alias: "EeQue",
    roles: ["Singer", "Vocalist", "Rapper", "Song-Writer"],
    origin: "Limpopo, Lebowakgomo",
    bio: "EeQue is a vocalist and writer born in Limpopo, Lebowakgomo. Coming from a family that loves music — with memories of his dad playing Phil Collins and a high school playlist dominated by Chris Brown — he recorded his first song in 2012. Starting off in Hip Hop with his biggest collaboration being Kid X, he later transitioned into becoming a versatile artist, bringing his artistry to every genre and giving him a huge edge in the music industry. Beyond music, EeQue has a passion for cooking and acting, positioning him for food-related shows and TV features.",
    associatedActs: [
      "DJ Maphorisa",
      "DBN Gogo",
      "Nkosazana Daughter",
      "Kamo Mphela",
      "Kwesta",
      "Xduppy",
      "AlXapo",
      "Benzoo",
      "Pcee",
      "Royal Musiq",
      "Ch'cco",
      "Focalistic",
      "Anatii",
    ],
    bookingEmail: "eeQuebookings@gmail.com",
    bookingPhone: ["+27 71 544 3654", "+27 67 727 3004"],
    image: "/artists/eeque/photo-main.jpg",
    imageCasual: "/artists/eeque/photo-casual.jpg",
  },
  {
    id: "masterpiece-yvk",
    name: "Thabang Kgotso Kganaka",
    alias: "Masterpiece YVK",
    roles: ["Vocalist", "Performer", "Artist", "Song-Writer"],
    origin: "Delmas · Raised in Tembisa",
    bio: "Masterpiece YVK started making music in 2018 after being convinced by Leehleza to use his skills as an MC in the studio. After being introduced to Kabza De Small, he recorded his first single. An MC since 2012 across formal events, festivals, and private parties, he is well known for his captivating chants and catchy lyrics. Through meeting various artists he expanded his catalog, delivering hits like Superman and the crowd favourite Manzi Nte. A full creative who believes in storytelling rooted in kasi tales, Masterpiece also produces vlogs, behind-the-scenes content, and lifestyle videos.",
    knownFor: ["Superman", "Manzi Nte"],
    associatedActs: [
      "Tyleri Cu",
      "Young Stunna",
      "DJ Stokie",
      "Kabza De Small",
      "DJ Maphorisa",
      "Toss",
      "Mr JazziQ",
      "Kamo Mphela",
      "Ntsika",
      "Kwesta",
      "Diamond Platnumz",
    ],
    bookingEmail: "bookings@yvkrecords.co.za",
    bookingPhone: ["081 460 3827", "073 680 5050"],
    generalEmail: "info@yvkrecords.co.za",
    image: "/artists/masterpiece-yvk/photo-main.jpg",
    imageCasual: "/artists/masterpiece-yvk/photo-fun.jpg",
  },
];

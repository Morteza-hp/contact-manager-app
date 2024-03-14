import { f1, f2, f3, f4, f5, m1, m2, m3, m4, m5 } from "../assets/images/avatars";

export type User = {
  id: Number;
  name: String;
  lastName: String;
  email: String;
  profilePicture: any;
  phoneNumber: String;
  age: Number;
};
export const users: User[] = [
  {
    id: 1,
    name: "Morteza",
    lastName: "Hasanpour",
    email: "Mortezahp1381@gmail.com",
    profilePicture: m1,
    phoneNumber: "09125678491",
    age: 21,
  },
  {
    id: 2,
    name: "Ali",
    lastName: "Hakimfar",
    email: "alihakimfar253@ymail.com",
    profilePicture: m2,
    phoneNumber: "09195482489",
    age: 30,
  },
  {
    id: 3,
    name: "Mohsen",
    lastName: "Aghaei",
    email: "mohsen48@gmail.com",
    profilePicture: m3,
    phoneNumber: "09391099098",
    age: 34,
  },
  {
    id: 4,
    name: "Mahdi",
    lastName: "Rahimi",
    email: "hunter120@gmail.com",
    profilePicture: m4,
    phoneNumber: "09804448711",
    age: 23,
  },
  {
    id: 5,
    name: "Kaveh",
    lastName: "Ahmadi",
    email: "kavehahmadi574@gmail.com",
    profilePicture: m5,
    phoneNumber: "09127758493",
    age: 19,
  },
  {
    id: 6,
    name: "Parisa",
    lastName: "Alborz",
    email: "alborz302@gmail.com",
    profilePicture: f1,
    phoneNumber: "09309090877",
    age: 29,
  },
  {
    id: 7,
    name: "Maryam",
    lastName: "Karimi",
    email: "maryam.karimi@gmail.com",
    profilePicture: f2,
    phoneNumber: "09125678491",
    age: 22,
  },
  {
    id: 8,
    name: "Kiana",
    lastName: "Yasini",
    email: "katty9092@gmail.com",
    profilePicture: f3,
    phoneNumber: "09991434278",
    age: 21,
  },
  {
    id: 9,
    name: "Leila",
    lastName: "Mehraban",
    email: "legend55@ymail.com",
    profilePicture: f4,
    phoneNumber: "09114641676",
    age: 38,
  },
  {
    id: 10,
    name: "Sepide",
    lastName: "Sabouri",
    email: "ultimate53@gmail.com",
    profilePicture: f5,
    phoneNumber: "09921373765",
    age: 18,
  },
];

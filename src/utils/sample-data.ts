import { User, Product } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
  { id: 105, name: "Peter" },
  { id: 106, name: "Ana" },
  { id: 107, name: "Pietra" },
  { id: 108, name: "Sean" },
];

export const sampleProductData: Product[] = [
  { id: 109, description: "Earbuds", user: "Alice" },
  { id: 110, description: "Mi10 Ultra", user: "Alice" },
  { id: 111, description: "Poco X3", user: "Dave" },
  { id: 112, description: "Mi Band 6", user: "Dave" },
  { id: 113, description: "Mi9T", user: "Sean" },
];

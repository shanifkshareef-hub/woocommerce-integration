
export interface CreateForm<T> {
  setAddress(address: IAddress): void;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

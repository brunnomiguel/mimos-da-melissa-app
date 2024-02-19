export type Image = {
  id: string;
  path: string;
};

export type ProductData = {
  id?: string;
  name: string;
  price: number;
  size?: string;
  category?: string;
  is_wholesale?: boolean;
  description?: string;
  images?: Image[];
};

export const productData: ProductData[] = [
  {
    id: "ujsdbviuddfvdfsbivf",
    name: "Laço princesa",
    price: 20,
    size: "P",
    category: "Básicos",
    is_wholesale: true,
    description: "Laço com aplique personalizado de princesa",
    images: [{ id: "dfvjfsdvweeivufv", path: "kndaasaasdasc.png" }],
  },
  {
    id: "ujsdbvixcdfvvudsbiv",
    name: "Laço princesa",
    price: 45,
    size: "G",
    category: "Laços",
    is_wholesale: true,
    description: "Laço com aplique personalizado de princesa",
    images: [{ id: "zxadqwfwesdv", path: "kndaasaasfdc.png" }],
  },
  {
    id: "ujsgreeddfvbviudsbi",
    name: "Laço princesa",
    price: 60,
    size: "M",
    category: "Aramados",
    is_wholesale: false,
    description: "Laço com aplique personalizado de princesa",
    images: [{ id: "dfvjfivusdfv", path: "kndaasaewasc.png" }],
  },
];

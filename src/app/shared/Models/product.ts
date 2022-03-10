export interface Product {
  type: string;
  url: string;
  title: string;
  description: string;
  image: string;
  methods: ProductMethod[];
}

export interface ProductMethod {
  icon: string;
  title: string;
  description: string;
  image: string;
  info: string[];
}

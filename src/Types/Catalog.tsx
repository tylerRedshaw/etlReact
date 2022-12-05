
export interface BatchRetrieveCatalogObjectsResponse {
  objects: Item[];
}

export interface Item {
  type: string;
  id: string;
  updated_at: Date;
  created_at: Date;
  version: number;
  is_deleted: boolean;
  present_at_all_locations: boolean;
  item_data: ItemData;
}

export interface ItemData {
  name: string;
  description: string;
  visibility: string;
  variations: Variation[];
  product_type: string;
  skip_modifier_screen: boolean;
  description_html: string;
  description_plaintext: string;
}

export interface PriceMoney {
    amount: number;
    currency: string;
}

export interface LocationOverride {
    location_id: string;
    track_inventory: boolean;
}

export interface ItemVariationData {
    item_id: string;
    name: string;
    sku: string;
    ordinal: number;
    pricing_type: string;
    price_money: PriceMoney;
    location_overrides: LocationOverride[];
    track_inventory: boolean;
    sellable: boolean;
    stockable: boolean;
}

export interface Variation {
    type: string;
    id: string;
    updated_at: Date;
    created_at: Date;
    version: any;
    is_deleted: boolean;
    present_at_all_locations: boolean;
    item_variation_data: ItemVariationData;
}

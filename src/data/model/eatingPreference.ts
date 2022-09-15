export interface AllergensCategories {
  id: number;
  category_name: string;
}

export interface EatingPreferences {
  id: number;
  allergens_categories: AllergensCategories;
  is_active: boolean;
  is_delete: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_on?: any;
  allergens_name: string;
  ordering_id: number;
  allergens: number[];
}

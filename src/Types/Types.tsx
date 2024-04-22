export interface IOrder {
  id: number;
  stage: string;
  meals: Meal[];
  details: string;
  comments: string[] | [];
  paymentType: string;
  deliveryType: string;
  dateCreation: string;
  TotalSum: number;
}

export type Meal = {
  title: string;
  quantity: number;
  preferences?: string[] | [];
};


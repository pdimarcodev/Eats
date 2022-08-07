export type Prediction = {
  description: string;
  place_id: string;
  reference: string;
  matched_substrings: any[];
  structured_formatting: Object;
  terms: Object[];
  types: string[];
};

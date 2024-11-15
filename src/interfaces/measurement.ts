export interface Measurement {
  id: number;
  createdAt: Date;
  username: string;
  orderNumber: string;
  phone: string;
  address: string;
}

export interface MeasurementsListProps {
  measurements: Measurement[];
  total: number;
  page: number;
  search: string;
}

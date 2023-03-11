export interface CandidateUserInterface {
  id?: number;
  name: string;
  email: string;
  password?: string;
  role?: string;
  provider?: string;
  providerId?: string;
  active: boolean;
}

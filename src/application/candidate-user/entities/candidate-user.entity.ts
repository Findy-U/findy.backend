export class CandidateUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  roles?: string;
  provider?: string;
  providerId?: string;
}

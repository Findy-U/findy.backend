export interface CandidateProjectInterface {
  name: string;
  projectScope: string;
  phone: string;
  id: number;
  CandidateUser: CandidateUser;
}

interface CandidateUser {
  name: string;
  email: string;
  roles: string;
}

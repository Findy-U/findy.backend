export interface CandidateProjectResponse {
  id: number;
  name: string;
  projectScope: string;
  urlTeamSelection: string;
  responsible: string;
  contactResponsible: string;
  urlLinkediResponsible: string;
  findyHelp: string;
  candidateUserId: number;
  contactLeaders: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  language: ProjectStack[];
  professional: ProjectRoles[];
}

export interface CandidateUser {
  id: number;
  name: string;
  email: string;
  roles: string;
}

interface ProjectStack {
  id: number;
  projectId: number;
  stackId: number;
}

interface ProjectRoles {
  id: number;
  projectId: number;
  title: string;
}

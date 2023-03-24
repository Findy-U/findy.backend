export class CreateCandidateProjectDto {
  name: string;
  projectScope: string;
  phone: string;
  language?: number[];
  professional?: number[];
  responsible?: number;
  projectId?: number;
}

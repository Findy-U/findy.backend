export interface SurveyNeedsInterface {
  id?: number;
  candidateUserId?: number;
  professionalSituation: string;
  professionalArea: string;
  goal: string;
  createdAt?: Date;
}

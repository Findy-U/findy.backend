export abstract class SurveyMarketInformationRepository {
  abstract create(createSurveyMarketInformationDto: any): Promise<any>;
  abstract findAll(): Promise<any>;
  abstract findOne(id: number): Promise<any>;
  abstract findByIdUser(idUser: number): Promise<any>;
  abstract update(
    id: number,
    updateSurveyMarketInformationDto: any,
  ): Promise<any>;
  abstract remove(id: number): Promise<any>;
}

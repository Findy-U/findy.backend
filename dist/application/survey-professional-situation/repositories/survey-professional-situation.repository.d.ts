export declare abstract class SurveyProfessionalSituationRepository {
    abstract create(createSurveyProfessionalSituationDto: any): Promise<any>;
    abstract findAll(): Promise<any>;
    abstract findByIdUser(id: number): Promise<any>;
    abstract findById(id: number): Promise<any>;
}

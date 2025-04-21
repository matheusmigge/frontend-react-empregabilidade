export type Company = {
    id: string;
    name: string;
    cnpj: string;
    logoUrl: string;
    phoneNumber: string;
    adminAccountEmail: string;
    adminAccountPassword: string;
    managerAccountEmail: string;
    managerAccountPassword: string;
    hrManagerAccountEmail: string;
    hrManagerAccountPassword: string;
    accountCreationDate: string;
};

export type Job = {
    id: string;
    company: Company;
    title: string;
    openingDate: string;
    closingDate: string | null;
    jobAvailable: boolean;
    bannerUrl: string;
    hiringType: string;
    salary: number;
    workModel: string;
    jobArea: string;
    maximumAcceptedDistanceInKm: number;
    jobDescription: string;
    responsibilitiesAndDuties: string;
    requirementsAndQualifications: string;
    whatIncreasesYourChances: string;
    requiredSkillsTags: string[];
    selectionProcessStages: string[];
    maximumApplications: number;
    currentApplications: number;
    address: {
        cep: string;
        addressType: string;
        addressName: string;
        address: string;
        state: string;
        district: string;
        lat: string;
        lng: string;
        city: string;
        cityIbge: string;
        ddd: string;
    };
};

export type Candidate = {
    id: string;
    firstName: string;
    lastName: string;
    cpf: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    password: string;
    address: {
      cep: string;
      addressType: string;
      addressName: string;
      address: string;
      state: string;
      district: string;
      lat: string;
      lng: string;
      city: string;
      cityIbge: string;
      ddd: string;
    };
    linkedInURL: string;
    portfolioURL: string;
    resume: {
      professionalSummary: string;
      experiences: {
        experience: {
          company: string;
          role: string;
          startDate: string;
          endDate: string;
          summaryOfDuties: string;
        };
      }[];
      education: {
        institution: string;
        degree: string;
        startDate: string;
        endDate: string;
      }[];
      coursesAndCertifications: {
        course: {
          institution: string;
          title: string;
          completionYear: number;
        };
      }[];
      skillsAndCompetencies: string[];
      languages: {
        language: string;
        proficiencyLevel: string;
      }[];
    };
  };
  
  export type Application = {
    id: string;
    jobId: string;
    candidateId: string;
    applicationDate: string;
    status: string;
  };
  

import { Value } from 'classnames';

export interface Roles {
  uuid: string;
  display: string;
}

export interface RolesResponse {
  results: Roles[];
}

export interface Facility {
  uuid: string;
  name: string;
  attributes: [
    {
      value: string;
    },
  ];
}

export interface FacilityResponse {
  results: Facility[];
}

export interface ProviderResponse {
  uuid: string;
  display: string;
  person: {
    uuid: string;
    display: string;
  };
  identifier: string;
  attributes: Array<{
    uuid: string;
    display: string;
    attributeType: {
      uuid: string;
      display: string;
    };
    value: {
      uuid: string;
      display: string;
      tags: Array<{
        uuid: string;
        display: string;
      }>;
    };
  }>;
}

interface PersonAttribute {
  uuid: string;
  display: string;
}

interface Person {
  uuid: string;
  display: string;
  gender: string;
  attributes: PersonAttribute[];
}

interface PersonPrivileges {
  uuid: string;
  display: string;
}

export interface UserRoles {
  uuid: string;
  display: string;
  person: Person;
  privileges: PersonPrivileges[];
}
export interface Practitioner {
  id: string;
  meta: Metadata;
  extension: ExtensionCadre[];
  identifier: IdentifierType[];
  active: boolean;
  name: PractitionerName[];
  telecom: ContactList[];
  qualification: Qualification[];
}

interface Metadata {
  lastUpdated: string;
  profile: string[];
}

interface ExtensionCadre {
  url: string;
  valueCoding?: {
    system?: string;
    code?: string;
    display?: string;
  };
  valueString?: string;
}

interface IdentifierType {
  use: string;
  type: {
    coding: {
      code: string;
    }[];
  };
  value: string;
}

interface PractitionerName {
  family: string;
  given: string[];
  prefix: string[];
}

interface ContactList {
  system: string;
  use: string;
  value?: string;
}

interface Qualification {
  extension: QualificationExtension[];
  code: {
    coding: {
      system?: string;
      code?: string;
      display: string;
    }[];
  }; // Added 'code' here
}

interface QualificationExtension {
  url: string;
  valueCoding?: {
    system?: string;
    code?: string;
    display?: string;
  };
  valueString?: string;
}

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly contains: InputMaybe<Scalars['Date']['input']>;
  readonly containsi: InputMaybe<Scalars['Date']['input']>;
  readonly endsWith: InputMaybe<Scalars['Date']['input']>;
  readonly eq: InputMaybe<Scalars['Date']['input']>;
  readonly eqi: InputMaybe<Scalars['Date']['input']>;
  readonly gt: InputMaybe<Scalars['Date']['input']>;
  readonly gte: InputMaybe<Scalars['Date']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt: InputMaybe<Scalars['Date']['input']>;
  readonly lte: InputMaybe<Scalars['Date']['input']>;
  readonly ne: InputMaybe<Scalars['Date']['input']>;
  readonly nei: InputMaybe<Scalars['Date']['input']>;
  readonly not: InputMaybe<DateFilterInput>;
  readonly notContains: InputMaybe<Scalars['Date']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Date']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Student_Access {
  Owner = 'owner',
  Student = 'student'
}

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Group | I18NLocale | Pharmacy | PracticeType | SelectedBasesOfPractice | Setting | Student | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Group = {
  readonly __typename?: 'Group';
  readonly courseNumber: Maybe<Scalars['Int']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly student: Maybe<StudentEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type GroupEntity = {
  readonly __typename?: 'GroupEntity';
  readonly attributes: Maybe<Group>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type GroupEntityResponse = {
  readonly __typename?: 'GroupEntityResponse';
  readonly data: Maybe<GroupEntity>;
};

export type GroupEntityResponseCollection = {
  readonly __typename?: 'GroupEntityResponseCollection';
  readonly data: ReadonlyArray<GroupEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type GroupFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<GroupFiltersInput>>>;
  readonly courseNumber: InputMaybe<IntFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<GroupFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<GroupFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly student: InputMaybe<StudentFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type GroupInput = {
  readonly courseNumber: InputMaybe<Scalars['Int']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly student: InputMaybe<Scalars['ID']['input']>;
};

export type GroupRelationResponseCollection = {
  readonly __typename?: 'GroupRelationResponseCollection';
  readonly data: ReadonlyArray<GroupEntity>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createGroup: Maybe<GroupEntityResponse>;
  readonly createPharmacy: Maybe<PharmacyEntityResponse>;
  readonly createPracticeType: Maybe<PracticeTypeEntityResponse>;
  readonly createSelectedBasesOfPractice: Maybe<SelectedBasesOfPracticeEntityResponse>;
  readonly createStudent: Maybe<StudentEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteGroup: Maybe<GroupEntityResponse>;
  readonly deletePharmacy: Maybe<PharmacyEntityResponse>;
  readonly deletePracticeType: Maybe<PracticeTypeEntityResponse>;
  readonly deleteSelectedBasesOfPractice: Maybe<SelectedBasesOfPracticeEntityResponse>;
  readonly deleteSetting: Maybe<SettingEntityResponse>;
  readonly deleteStudent: Maybe<StudentEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateGroup: Maybe<GroupEntityResponse>;
  readonly updatePharmacy: Maybe<PharmacyEntityResponse>;
  readonly updatePracticeType: Maybe<PracticeTypeEntityResponse>;
  readonly updateSelectedBasesOfPractice: Maybe<SelectedBasesOfPracticeEntityResponse>;
  readonly updateSetting: Maybe<SettingEntityResponse>;
  readonly updateStudent: Maybe<StudentEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreatePharmacyArgs = {
  data: PharmacyInput;
};


export type MutationCreatePracticeTypeArgs = {
  data: PracticeTypeInput;
};


export type MutationCreateSelectedBasesOfPracticeArgs = {
  data: SelectedBasesOfPracticeInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePharmacyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePracticeTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSelectedBasesOfPracticeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGroupArgs = {
  data: GroupInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePharmacyArgs = {
  data: PharmacyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePracticeTypeArgs = {
  data: PracticeTypeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSelectedBasesOfPracticeArgs = {
  data: SelectedBasesOfPracticeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSettingArgs = {
  data: SettingInput;
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export type Pharmacy = {
  readonly __typename?: 'Pharmacy';
  readonly address: Scalars['String']['output'];
  readonly city: Scalars['String']['output'];
  readonly contractNumber: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly headOfPractice: Maybe<Scalars['String']['output']>;
  readonly legalName: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly number: Maybe<Scalars['Int']['output']>;
  readonly places: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PharmacyEntity = {
  readonly __typename?: 'PharmacyEntity';
  readonly attributes: Maybe<Pharmacy>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PharmacyEntityResponse = {
  readonly __typename?: 'PharmacyEntityResponse';
  readonly data: Maybe<PharmacyEntity>;
};

export type PharmacyEntityResponseCollection = {
  readonly __typename?: 'PharmacyEntityResponseCollection';
  readonly data: ReadonlyArray<PharmacyEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PharmacyFiltersInput = {
  readonly address: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PharmacyFiltersInput>>>;
  readonly city: InputMaybe<StringFilterInput>;
  readonly contractNumber: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly headOfPractice: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly legalName: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<PharmacyFiltersInput>;
  readonly number: InputMaybe<IntFilterInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PharmacyFiltersInput>>>;
  readonly places: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PharmacyInput = {
  readonly address: InputMaybe<Scalars['String']['input']>;
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly contractNumber: InputMaybe<Scalars['String']['input']>;
  readonly headOfPractice: InputMaybe<Scalars['String']['input']>;
  readonly legalName: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly number: InputMaybe<Scalars['Int']['input']>;
  readonly places: InputMaybe<Scalars['Int']['input']>;
};

export type PracticeType = {
  readonly __typename?: 'PracticeType';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PracticeTypeEntity = {
  readonly __typename?: 'PracticeTypeEntity';
  readonly attributes: Maybe<PracticeType>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PracticeTypeEntityResponse = {
  readonly __typename?: 'PracticeTypeEntityResponse';
  readonly data: Maybe<PracticeTypeEntity>;
};

export type PracticeTypeEntityResponseCollection = {
  readonly __typename?: 'PracticeTypeEntityResponseCollection';
  readonly data: ReadonlyArray<PracticeTypeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PracticeTypeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PracticeTypeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<PracticeTypeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PracticeTypeFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PracticeTypeInput = {
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type PracticeTypeRelationResponseCollection = {
  readonly __typename?: 'PracticeTypeRelationResponseCollection';
  readonly data: ReadonlyArray<PracticeTypeEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly group: Maybe<GroupEntityResponse>;
  readonly groups: Maybe<GroupEntityResponseCollection>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly pharmacies: Maybe<PharmacyEntityResponseCollection>;
  readonly pharmacy: Maybe<PharmacyEntityResponse>;
  readonly practiceType: Maybe<PracticeTypeEntityResponse>;
  readonly practiceTypes: Maybe<PracticeTypeEntityResponseCollection>;
  readonly selectedBasesOfPractice: Maybe<SelectedBasesOfPracticeEntityResponse>;
  readonly selectedBasesOfPractices: Maybe<SelectedBasesOfPracticeEntityResponseCollection>;
  readonly setting: Maybe<SettingEntityResponse>;
  readonly student: Maybe<StudentEntityResponse>;
  readonly students: Maybe<StudentEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryGroupArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupsArgs = {
  filters: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPharmaciesArgs = {
  filters: InputMaybe<PharmacyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPharmacyArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPracticeTypeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPracticeTypesArgs = {
  filters: InputMaybe<PracticeTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySelectedBasesOfPracticeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySelectedBasesOfPracticesArgs = {
  filters: InputMaybe<SelectedBasesOfPracticeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySettingArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryStudentArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStudentsArgs = {
  filters: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SelectedBasesOfPractice = {
  readonly __typename?: 'SelectedBasesOfPractice';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly endPractiseTerm: Maybe<Scalars['Date']['output']>;
  readonly pharmacy: Maybe<PharmacyEntityResponse>;
  readonly startPractiseTerm: Maybe<Scalars['Date']['output']>;
  readonly student: Maybe<StudentEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SelectedBasesOfPracticeEntity = {
  readonly __typename?: 'SelectedBasesOfPracticeEntity';
  readonly attributes: Maybe<SelectedBasesOfPractice>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SelectedBasesOfPracticeEntityResponse = {
  readonly __typename?: 'SelectedBasesOfPracticeEntityResponse';
  readonly data: Maybe<SelectedBasesOfPracticeEntity>;
};

export type SelectedBasesOfPracticeEntityResponseCollection = {
  readonly __typename?: 'SelectedBasesOfPracticeEntityResponseCollection';
  readonly data: ReadonlyArray<SelectedBasesOfPracticeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SelectedBasesOfPracticeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SelectedBasesOfPracticeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly endPractiseTerm: InputMaybe<DateFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<SelectedBasesOfPracticeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SelectedBasesOfPracticeFiltersInput>>>;
  readonly pharmacy: InputMaybe<PharmacyFiltersInput>;
  readonly startPractiseTerm: InputMaybe<DateFilterInput>;
  readonly student: InputMaybe<StudentFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SelectedBasesOfPracticeInput = {
  readonly endPractiseTerm: InputMaybe<Scalars['Date']['input']>;
  readonly pharmacy: InputMaybe<Scalars['ID']['input']>;
  readonly startPractiseTerm: InputMaybe<Scalars['Date']['input']>;
  readonly student: InputMaybe<Scalars['ID']['input']>;
};

export type Setting = {
  readonly __typename?: 'Setting';
  readonly canStudentSelectPracticeBase: Scalars['Boolean']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly currentPracticeType: Maybe<PracticeTypeEntityResponse>;
  readonly endPracticeDate: Scalars['Date']['output'];
  readonly practiceTypes: Maybe<PracticeTypeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly startPracticeDate: Scalars['Date']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SettingPracticeTypesArgs = {
  filters: InputMaybe<PracticeTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SettingEntity = {
  readonly __typename?: 'SettingEntity';
  readonly attributes: Maybe<Setting>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SettingEntityResponse = {
  readonly __typename?: 'SettingEntityResponse';
  readonly data: Maybe<SettingEntity>;
};

export type SettingInput = {
  readonly canStudentSelectPracticeBase: InputMaybe<Scalars['Boolean']['input']>;
  readonly currentPracticeType: InputMaybe<Scalars['ID']['input']>;
  readonly endPracticeDate: InputMaybe<Scalars['Date']['input']>;
  readonly practiceTypes: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly startPracticeDate: InputMaybe<Scalars['Date']['input']>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  readonly __typename?: 'Student';
  readonly access: Enum_Student_Access;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly group: Maybe<GroupRelationResponseCollection>;
  readonly middleName: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly picture: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type StudentGroupArgs = {
  filters: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type StudentEntity = {
  readonly __typename?: 'StudentEntity';
  readonly attributes: Maybe<Student>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type StudentEntityResponse = {
  readonly __typename?: 'StudentEntityResponse';
  readonly data: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  readonly __typename?: 'StudentEntityResponseCollection';
  readonly data: ReadonlyArray<StudentEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  readonly access: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<StudentFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly group: InputMaybe<GroupFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly middleName: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<StudentFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<StudentFiltersInput>>>;
  readonly phone: InputMaybe<StringFilterInput>;
  readonly picture: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type StudentInput = {
  readonly access: InputMaybe<Enum_Student_Access>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly group: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly middleName: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly picture: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type ChangePlacesCountInPharmacyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  places: Scalars['Int']['input'];
}>;


export type ChangePlacesCountInPharmacyMutation = { readonly __typename?: 'Mutation', readonly updatePharmacy: { readonly __typename?: 'PharmacyEntityResponse', readonly data: { readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly places: number } } } };

export type ChangeStudentDataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  group: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  middleName: Scalars['String']['input'];
}>;


export type ChangeStudentDataMutation = { readonly __typename?: 'Mutation', readonly updateStudent: { readonly __typename?: 'StudentEntityResponse', readonly data: { readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly name: string, readonly email: string, readonly picture: string, readonly middleName: string, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } } } } };

export type CreatePharmacyMutationVariables = Exact<{
  name: Scalars['String']['input'];
  city: Scalars['String']['input'];
  address: Scalars['String']['input'];
  contractNumber: Scalars['String']['input'];
  places?: InputMaybe<Scalars['Int']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  number: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreatePharmacyMutation = { readonly __typename?: 'Mutation', readonly createPharmacy: { readonly __typename?: 'PharmacyEntityResponse', readonly data: { readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly address: string, readonly places: number, readonly contractNumber: string, readonly legalName: string, readonly number: number } } } };

export type CreateStudentMutationVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  picture: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStudentMutation = { readonly __typename?: 'Mutation', readonly createStudent: { readonly __typename?: 'StudentEntityResponse', readonly data: { readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly name: string, readonly email: string, readonly picture: string, readonly middleName: string } } } };

export type DeletePharmacyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePharmacyMutation = { readonly __typename?: 'Mutation', readonly deletePharmacy: { readonly __typename?: 'PharmacyEntityResponse', readonly data: { readonly __typename?: 'PharmacyEntity', readonly id: string } } };

export type SelectBaseOfPracticeMutationVariables = Exact<{
  studentId: Scalars['ID']['input'];
  pharmacyId: Scalars['ID']['input'];
  startDate: InputMaybe<Scalars['Date']['input']>;
  endDate: InputMaybe<Scalars['Date']['input']>;
}>;


export type SelectBaseOfPracticeMutation = { readonly __typename?: 'Mutation', readonly createSelectedBasesOfPractice: { readonly __typename?: 'SelectedBasesOfPracticeEntityResponse', readonly data: { readonly __typename?: 'SelectedBasesOfPracticeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'SelectedBasesOfPractice', readonly student: { readonly __typename?: 'StudentEntityResponse', readonly data: { readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly name: string, readonly email: string, readonly picture: string, readonly phone: string, readonly middleName: string, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string } }> } } } }, readonly pharmacy: { readonly __typename?: 'PharmacyEntityResponse', readonly data: { readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly address: string, readonly places: number, readonly contractNumber: string, readonly legalName: string, readonly number: number } } } } } } };

export type UpdateSettingsMutationVariables = Exact<{
  startPracticeDate: InputMaybe<Scalars['Date']['input']>;
  endPracticeDate: InputMaybe<Scalars['Date']['input']>;
  canStudentSelectPracticeBase: InputMaybe<Scalars['Boolean']['input']>;
  currentPracticeType: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateSettingsMutation = { readonly __typename?: 'Mutation', readonly updateSetting: { readonly __typename?: 'SettingEntityResponse', readonly data: { readonly __typename?: 'SettingEntity', readonly attributes: { readonly __typename?: 'Setting', readonly startPracticeDate: any, readonly endPracticeDate: any, readonly canStudentSelectPracticeBase: boolean, readonly practiceTypes: { readonly __typename?: 'PracticeTypeRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PracticeTypeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PracticeType', readonly name: string } }> }, readonly currentPracticeType: { readonly __typename?: 'PracticeTypeEntityResponse', readonly data: { readonly __typename?: 'PracticeTypeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PracticeType', readonly name: string } } } } } } };

export type CanUserChoosePracticeBaseQueryVariables = Exact<{
  userId?: Scalars['ID']['input'];
}>;


export type CanUserChoosePracticeBaseQuery = { readonly __typename?: 'Query', readonly selectedBasesOfPractices: { readonly __typename?: 'SelectedBasesOfPracticeEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'SelectedBasesOfPracticeEntity', readonly id: string }> } };

export type GetAllGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGroupsQuery = { readonly __typename?: 'Query', readonly groups: { readonly __typename?: 'GroupEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } };

export type GetAllPharmaciesQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllPharmaciesQuery = { readonly __typename?: 'Query', readonly pharmacies: { readonly __typename?: 'PharmacyEntityResponseCollection', readonly meta: { readonly __typename?: 'ResponseCollectionMeta', readonly pagination: { readonly __typename?: 'Pagination', readonly total: number, readonly page: number, readonly pageSize: number, readonly pageCount: number } }, readonly data: ReadonlyArray<{ readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly address: string, readonly places: number, readonly legalName: string, readonly number: number } }> } };

export type GetAllPharmacyIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPharmacyIdsQuery = { readonly __typename?: 'Query', readonly pharmacies: { readonly __typename?: 'PharmacyEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PharmacyEntity', readonly id: string }> } };

export type GetAllSelectedPracticeBaseQueryVariables = Exact<{
  studentName?: InputMaybe<Scalars['String']['input']>;
  studentGroup?: InputMaybe<Scalars['String']['input']>;
  pharmacyName?: InputMaybe<Scalars['String']['input']>;
  pharmacyCity?: InputMaybe<Scalars['String']['input']>;
  pharmacyAddress?: InputMaybe<Scalars['String']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllSelectedPracticeBaseQuery = { readonly __typename?: 'Query', readonly selectedBasesOfPractices: { readonly __typename?: 'SelectedBasesOfPracticeEntityResponseCollection', readonly meta: { readonly __typename?: 'ResponseCollectionMeta', readonly pagination: { readonly __typename?: 'Pagination', readonly total: number, readonly page: number, readonly pageSize: number, readonly pageCount: number } }, readonly data: ReadonlyArray<{ readonly __typename?: 'SelectedBasesOfPracticeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'SelectedBasesOfPractice', readonly student: { readonly __typename?: 'StudentEntityResponse', readonly data: { readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly name: string, readonly phone: string, readonly middleName: string, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } } } }, readonly pharmacy: { readonly __typename?: 'PharmacyEntityResponse', readonly data: { readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly number: number, readonly address: string, readonly legalName: string, readonly contractNumber: string, readonly headOfPractice: string } } } } }> } };

export type GetAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsQuery = { readonly __typename?: 'Query', readonly students: { readonly __typename?: 'StudentEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'StudentEntity', readonly attributes: { readonly __typename?: 'Student', readonly email: string, readonly name: string, readonly access: Enum_Student_Access, readonly picture: string, readonly phone: string, readonly middleName: string, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } } }> } };

export type GetCanStudentsSelectPracticeBaseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCanStudentsSelectPracticeBaseQuery = { readonly __typename?: 'Query', readonly setting: { readonly __typename?: 'SettingEntityResponse', readonly data: { readonly __typename?: 'SettingEntity', readonly attributes: { readonly __typename?: 'Setting', readonly canStudentSelectPracticeBase: boolean } } } };

export type GetFullPharmacyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFullPharmacyQuery = { readonly __typename?: 'Query', readonly pharmacies: { readonly __typename?: 'PharmacyEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly address: string, readonly places: number, readonly contractNumber: string, readonly legalName: string, readonly number: number } }> } };

export type GetMeQueryVariables = Exact<{
  id?: Scalars['ID']['input'];
}>;


export type GetMeQuery = { readonly __typename?: 'Query', readonly students: { readonly __typename?: 'StudentEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly name: string, readonly middleName: string, readonly email: string, readonly picture: string, readonly access: Enum_Student_Access, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } } }> } };

export type GetOneStudentQueryVariables = Exact<{
  email: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOneStudentQuery = { readonly __typename?: 'Query', readonly students: { readonly __typename?: 'StudentEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'StudentEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Student', readonly email: string, readonly name: string, readonly phone: string, readonly access: Enum_Student_Access, readonly picture: string, readonly middleName: string, readonly group: { readonly __typename?: 'GroupRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly courseNumber: number } }> } } }> } };

export type GetSearchPharmaciesQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSearchPharmaciesQuery = { readonly __typename?: 'Query', readonly pharmacies: { readonly __typename?: 'PharmacyEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PharmacyEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Pharmacy', readonly name: string, readonly city: string, readonly address: string, readonly places: number, readonly legalName: string, readonly number: number } }> } };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { readonly __typename?: 'Query', readonly setting: { readonly __typename?: 'SettingEntityResponse', readonly data: { readonly __typename?: 'SettingEntity', readonly attributes: { readonly __typename?: 'Setting', readonly startPracticeDate: any, readonly endPracticeDate: any, readonly canStudentSelectPracticeBase: boolean, readonly practiceTypes: { readonly __typename?: 'PracticeTypeRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PracticeTypeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PracticeType', readonly name: string } }> }, readonly currentPracticeType: { readonly __typename?: 'PracticeTypeEntityResponse', readonly data: { readonly __typename?: 'PracticeTypeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PracticeType', readonly name: string } } } } } } };


export const ChangePlacesCountInPharmacyDocument = gql`
    mutation changePlacesCountInPharmacy($id: ID!, $places: Int!) {
  updatePharmacy(id: $id, data: {places: $places}) {
    data {
      id
      attributes {
        places
      }
    }
  }
}
    `;
export const ChangeStudentDataDocument = gql`
    mutation ChangeStudentData($id: ID!, $group: ID!, $phone: String!, $middleName: String!) {
  updateStudent(
    id: $id
    data: {group: [$group], phone: $phone, middleName: $middleName}
  ) {
    data {
      id
      attributes {
        name
        email
        picture
        group {
          data {
            attributes {
              name
              courseNumber
            }
          }
        }
        middleName
      }
    }
  }
}
    `;
export const CreatePharmacyDocument = gql`
    mutation CreatePharmacy($name: String!, $city: String!, $address: String!, $contractNumber: String!, $places: Int = 2, $legalName: String, $number: Int) {
  createPharmacy(
    data: {name: $name, city: $city, address: $address, contractNumber: $contractNumber, places: $places, legalName: $legalName, number: $number}
  ) {
    data {
      id
      attributes {
        name
        city
        address
        places
        contractNumber
        legalName
        number
      }
    }
  }
}
    `;
export const CreateStudentDocument = gql`
    mutation CreateStudent($name: String, $email: String, $picture: String) {
  createStudent(data: {name: $name, email: $email, picture: $picture}) {
    data {
      id
      attributes {
        name
        email
        picture
        middleName
      }
    }
  }
}
    `;
export const DeletePharmacyDocument = gql`
    mutation DeletePharmacy($id: ID!) {
  deletePharmacy(id: $id) {
    data {
      id
    }
  }
}
    `;
export const SelectBaseOfPracticeDocument = gql`
    mutation selectBaseOfPractice($studentId: ID!, $pharmacyId: ID!, $startDate: Date, $endDate: Date) {
  createSelectedBasesOfPractice(
    data: {student: $studentId, pharmacy: $pharmacyId, startPractiseTerm: $startDate, endPractiseTerm: $endDate}
  ) {
    data {
      id
      attributes {
        student {
          data {
            id
            attributes {
              name
              email
              picture
              group {
                data {
                  attributes {
                    name
                  }
                }
              }
              phone
              middleName
            }
          }
        }
        pharmacy {
          data {
            id
            attributes {
              name
              city
              address
              places
              contractNumber
              legalName
              number
            }
          }
        }
      }
    }
  }
}
    `;
export const UpdateSettingsDocument = gql`
    mutation UpdateSettings($startPracticeDate: Date, $endPracticeDate: Date, $canStudentSelectPracticeBase: Boolean, $currentPracticeType: ID) {
  updateSetting(
    data: {startPracticeDate: $startPracticeDate, endPracticeDate: $endPracticeDate, canStudentSelectPracticeBase: $canStudentSelectPracticeBase, currentPracticeType: $currentPracticeType}
  ) {
    data {
      attributes {
        startPracticeDate
        endPracticeDate
        canStudentSelectPracticeBase
        practiceTypes {
          data {
            id
            attributes {
              name
            }
          }
        }
        currentPracticeType {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;
export const CanUserChoosePracticeBaseDocument = gql`
    query CanUserChoosePracticeBase($userId: ID! = "3") {
  selectedBasesOfPractices(filters: {student: {id: {eq: $userId}}}) {
    data {
      id
    }
  }
}
    `;
export const GetAllGroupsDocument = gql`
    query GetAllGroups {
  groups {
    data {
      id
      attributes {
        name
        courseNumber
      }
    }
  }
}
    `;
export const GetAllPharmaciesDocument = gql`
    query GetAllPharmacies($currentPage: Int = 1, $pageSize: Int = 10) {
  pharmacies(
    pagination: {page: $currentPage, pageSize: $pageSize}
    filters: {places: {notIn: 0}}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        name
        city
        address
        places
        legalName
        number
      }
    }
  }
}
    `;
export const GetAllPharmacyIdsDocument = gql`
    query GetAllPharmacyIds {
  pharmacies(pagination: {pageSize: 10000}) {
    data {
      id
    }
  }
}
    `;
export const GetAllSelectedPracticeBaseDocument = gql`
    query GetAllSelectedPracticeBase($studentName: String = "", $studentGroup: String = "", $pharmacyName: String = "", $pharmacyCity: String = "", $pharmacyAddress: String = "", $currentPage: Int = 1, $pageSize: Int = 10) {
  selectedBasesOfPractices(
    pagination: {page: $currentPage, pageSize: $pageSize}
    filters: {student: {name: {contains: $studentName}, group: {name: {eq: $studentGroup}}}, pharmacy: {name: {contains: $pharmacyName}, city: {contains: $pharmacyCity}, address: {contains: $pharmacyAddress}}}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        student {
          data {
            id
            attributes {
              name
              group {
                data {
                  id
                  attributes {
                    name
                    courseNumber
                  }
                }
              }
              phone
              middleName
            }
          }
        }
        pharmacy {
          data {
            id
            attributes {
              name
              city
              number
              address
              legalName
              contractNumber
              headOfPractice
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllStudentsDocument = gql`
    query GetAllStudents {
  students {
    data {
      attributes {
        email
        name
        group {
          data {
            attributes {
              name
              courseNumber
            }
          }
        }
        access
        picture
        phone
        middleName
      }
    }
  }
}
    `;
export const GetCanStudentsSelectPracticeBaseDocument = gql`
    query GetCanStudentsSelectPracticeBase {
  setting {
    data {
      attributes {
        canStudentSelectPracticeBase
      }
    }
  }
}
    `;
export const GetFullPharmacyDocument = gql`
    query GetFullPharmacy($id: ID!) {
  pharmacies(filters: {id: {contains: $id}}) {
    data {
      id
      attributes {
        name
        city
        address
        places
        contractNumber
        legalName
        number
      }
    }
  }
}
    `;
export const GetMeDocument = gql`
    query GetMe($id: ID! = "6") {
  students(filters: {id: {eq: $id}}) {
    data {
      id
      attributes {
        name
        middleName
        email
        picture
        access
        group {
          data {
            attributes {
              name
              courseNumber
            }
          }
        }
      }
    }
  }
}
    `;
export const GetOneStudentDocument = gql`
    query GetOneStudent($email: String) {
  students(filters: {email: {contains: $email}}) {
    data {
      id
      attributes {
        email
        name
        group {
          data {
            attributes {
              name
              courseNumber
            }
          }
        }
        phone
        access
        picture
        middleName
      }
    }
  }
}
    `;
export const GetSearchPharmaciesDocument = gql`
    query GetSearchPharmacies($name: String = "", $city: String = "", $address: String = "") {
  pharmacies(
    filters: {name: {contains: $name}, city: {contains: $city}, address: {contains: $address}}
  ) {
    data {
      id
      attributes {
        name
        city
        address
        places
        legalName
        number
      }
    }
  }
}
    `;
export const GetSettingsDocument = gql`
    query GetSettings {
  setting {
    data {
      attributes {
        startPracticeDate
        endPracticeDate
        canStudentSelectPracticeBase
        practiceTypes {
          data {
            id
            attributes {
              name
            }
          }
        }
        currentPracticeType {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    changePlacesCountInPharmacy(variables: ChangePlacesCountInPharmacyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChangePlacesCountInPharmacyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangePlacesCountInPharmacyMutation>(ChangePlacesCountInPharmacyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changePlacesCountInPharmacy', 'mutation');
    },
    ChangeStudentData(variables: ChangeStudentDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChangeStudentDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeStudentDataMutation>(ChangeStudentDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ChangeStudentData', 'mutation');
    },
    CreatePharmacy(variables: CreatePharmacyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePharmacyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePharmacyMutation>(CreatePharmacyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePharmacy', 'mutation');
    },
    CreateStudent(variables?: CreateStudentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateStudentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStudentMutation>(CreateStudentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateStudent', 'mutation');
    },
    DeletePharmacy(variables: DeletePharmacyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePharmacyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePharmacyMutation>(DeletePharmacyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePharmacy', 'mutation');
    },
    selectBaseOfPractice(variables: SelectBaseOfPracticeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SelectBaseOfPracticeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SelectBaseOfPracticeMutation>(SelectBaseOfPracticeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'selectBaseOfPractice', 'mutation');
    },
    UpdateSettings(variables?: UpdateSettingsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateSettingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateSettingsMutation>(UpdateSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateSettings', 'mutation');
    },
    CanUserChoosePracticeBase(variables?: CanUserChoosePracticeBaseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CanUserChoosePracticeBaseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CanUserChoosePracticeBaseQuery>(CanUserChoosePracticeBaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CanUserChoosePracticeBase', 'query');
    },
    GetAllGroups(variables?: GetAllGroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllGroupsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllGroupsQuery>(GetAllGroupsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllGroups', 'query');
    },
    GetAllPharmacies(variables?: GetAllPharmaciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllPharmaciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPharmaciesQuery>(GetAllPharmaciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPharmacies', 'query');
    },
    GetAllPharmacyIds(variables?: GetAllPharmacyIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllPharmacyIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPharmacyIdsQuery>(GetAllPharmacyIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPharmacyIds', 'query');
    },
    GetAllSelectedPracticeBase(variables?: GetAllSelectedPracticeBaseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllSelectedPracticeBaseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSelectedPracticeBaseQuery>(GetAllSelectedPracticeBaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllSelectedPracticeBase', 'query');
    },
    GetAllStudents(variables?: GetAllStudentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllStudentsQuery>(GetAllStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllStudents', 'query');
    },
    GetCanStudentsSelectPracticeBase(variables?: GetCanStudentsSelectPracticeBaseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCanStudentsSelectPracticeBaseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCanStudentsSelectPracticeBaseQuery>(GetCanStudentsSelectPracticeBaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCanStudentsSelectPracticeBase', 'query');
    },
    GetFullPharmacy(variables: GetFullPharmacyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFullPharmacyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFullPharmacyQuery>(GetFullPharmacyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFullPharmacy', 'query');
    },
    GetMe(variables?: GetMeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMe', 'query');
    },
    GetOneStudent(variables?: GetOneStudentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOneStudentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOneStudentQuery>(GetOneStudentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOneStudent', 'query');
    },
    GetSearchPharmacies(variables?: GetSearchPharmaciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSearchPharmaciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSearchPharmaciesQuery>(GetSearchPharmaciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSearchPharmacies', 'query');
    },
    GetSettings(variables?: GetSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSettingsQuery>(GetSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSettings', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
interface ICharacter {
    id: string;
    biography: string;
    portrait: string | null;
    // TODO: Add creation date 
}

interface IConnectionString {
    useCustom: boolean,
    connectionString: string | undefined
  }

export type { ICharacter, IConnectionString }
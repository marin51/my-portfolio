export interface RootState {
    projects: IProject[],
    about: IAbout
}

export interface IProject {
    name: string,
    description: string
}
export interface IAbout {
    title: string,
    subTitle: string,
    description: string
}

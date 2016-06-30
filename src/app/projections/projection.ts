export interface Projection {
    code: string;
    nom: string;
    proj4: string;
    region: string;
    datum: string;
    link: string;
    lat?: string;
    lng?: number;
    coords?: number[][];
}
export interface Tanitim {
  id: string;
  tamAd: string;
  mail: string;
  telefon: string;
  mesaj?: string;
  createdAt: Date;
}
export interface Tanitims {
  tanitims: Tanitim[];
}

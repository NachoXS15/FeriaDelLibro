export interface RuletaProps {
    titulo: string;
    autor: string;
    category: string;
    phrases: Record<number, string | undefined>;
    qr: string;
};
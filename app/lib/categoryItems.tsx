import { Backpack, Footprints, Mars, Venus } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
    name: string;
    title: string;
    image: ReactNode;
    id: number;
}

export const categoryItems: iAppProps[] =[
    {
        id: 0,
        name: 'feminino',
        title: 'Feminino',
        image: <Venus />
    },

    {
        id: 1,
        name: 'masculino',
        title: 'Masculino',
        image: <Mars />,
    },

    {
        id: 2,
        name: 'acessorios',
        title: 'Acessórios',
        image: <Backpack />,
    },

    {
        id: 3,
        name: 'calcados',
        title: 'Calçados',
        image: <Footprints />,
    },
];
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";

export default function SellRoute() {
    return (
     <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        
        <Card>
            <form>
                <CardHeader>
                    <CardTitle>Venda seu produto com facilidade</CardTitle>
                    <CardDescription>Por favor, descreva aqui em detalhes para que possa ser vendido</CardDescription>   
                </CardHeader>
                
                <CardContent className="flex flex-col gap-y-4 mt-8">
                    <div className="flex flex-col gap-y-4">
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome do produto" />
                    </div>

                    <div className="flex flex-col gap-y-4 ">
                        <Label>Category</Label>
                        <SelectCategory />
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Label>Preço</Label>
                        <Input placeholder="R$ 100,00" type="number" />
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <Label>Descrição Resuminda</Label>
                        <Textarea placeholder="Descreva brevemente seu produto aqui..." />
                    </div>
                    
                    <div className="flex flex-col gap-y-4">
                        <Label>Descrição</Label>
                        <TipTapEditor />
                    </div>
                </CardContent>
            </form>
        </Card>

     </section>
    )
}
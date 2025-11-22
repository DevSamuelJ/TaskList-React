// components/button.tsx
import { twMerge } from "tailwind-merge";

// O "type" do typescript define uma estrutura de tipos.
type ButtonProps = {
	children: React.ReactNode;
	className?: string;
}

// Componente Botão que Recebe 2 Propriedades  
export const Button = ({ children, className = "" }: ButtonProps) => {
	return (
		<button className={twMerge("bg-zinc-950 text-white flex justify-center items-center w-12 h-12 rounded-2xl text-xl hover:bg-zinc-800 duration-300 hover:cursor-pointer", className)}>
			{children}
		</button>
	)
}
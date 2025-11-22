// components/header.tsx
import { useState } from "react";
import { Button } from "./button";


export const Header = () => {
	// Estado para armazenar o nome da task.
	const [taskName, setTaskName] = useState('')

	return (
		<header className="flex flex-col items-center pt-8 gap-16">
			<h1 className="text-3xl"> My Tasks </h1>
			<div className="flex gap-4">
				{/* O "value" do input será o valor do estado */}
				{/* Ao digitar, o evento onChange é chamado e o estado é alterado */}
				<input
					type="text"
					value={taskName}
					onChange={(event) => setTaskName(event.target.value)}
					className="bg-white shadow w-80 h-12 text-xl py-2 px-4 outline-0 rounded-2xl"
				/>
				<Button>+</Button>
			</div>
		</header>
	)
}

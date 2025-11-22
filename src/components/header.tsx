// components/header.tsx
import { useState } from "react";
import { Button } from "./button";


// Props com a funcão que irá adicionar a task
type HeaderProps = {
	addTask: (taskName: string) => void
}


// Adicionamos as Props no Compoenente
export const Header = ({ addTask }: HeaderProps) => {
	const [taskName, setTaskName] = useState('')
	
	// O handleAddTask é a função que será chamada ao clicar no botão
	const handleAddTask = () => {
		// Se o Input Estiver Vazio, Não Adiciona
		if (!taskName.trim()) {
			return
		}

		addTask(taskName)
		setTaskName("")
	}

	return (
		<header className="flex flex-col items-center pt-8 gap-16">
			<h1 className="text-3xl"> My Tasks </h1>
			<div className="flex gap-4">
				<input
					type="text"
					value={taskName}
					onChange={(event) => setTaskName(event.target.value)}
					className="bg-white shadow w-80 h-12 text-xl py-2 px-4 outline-0 rounded-2xl"
				/>
				{/* Passamos o handleAddTask no onClick do botão  */}
				<Button onClick={handleAddTask}>+</Button>
			</div>
		</header>
	)
}

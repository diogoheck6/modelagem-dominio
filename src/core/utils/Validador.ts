export default class Validador {
	// combinar múltiplos erros em um array, ignorando os nulos, tecnica de programação funcional
	static combinar(...erros: (string | null)[]): string[] | null {
		const errosFiltrados = erros.filter(erro => erro !== null) as string[]
		return errosFiltrados.length > 0 ? errosFiltrados : null
	}

	// garantir que o objeto não esteja null ou undefined
	static naoNulo(valor: any, erro: string): string | null {
		return valor !== null && valor !== undefined ? null : erro
	}

	// garantir que a string não esteja vazia
	static naoVazio(valor: string | null | undefined, erro: string): string | null {
		if (Validador.naoNulo(valor, erro)) return erro
		return valor!.trim() !== '' ? null : erro
	}

	// garantir que o tamanho do valor seja menor que o tamanho máximo
	static tamanhoMenorQue(
		valor: string | any[],
		tamanhoMaximo: number,
		erro: string
	): string | null {
		return valor.length < tamanhoMaximo ? null : erro
	}

	// garantir que o tamanho do valor seja maior que o tamanho mínimo
	static tamanhoMaiorQue(
		valor: string | any[],
		tamanhoMinimo: number,
		erro: string
	): string | null {
		return valor.length > tamanhoMinimo ? null : erro
	}

	// garantir que nao tenha caracteres inválidos
	static regex(valor: string, regex: RegExp, erro: string): string | null {
		return regex.test(valor) ? null : erro
	}

	static isEmailValido(email: string): boolean {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		return regex.test(email)
	}
}

export default class Validador {
	// garantir que o objeto não esteja null ou undefined
	static naoNulo(valor: any, erro: string): string | null {
		return valor !== null && valor !== undefined ? null : erro
	}

	// garantir que a string não esteja vazia
	static naoVazia(valor: string | null | undefined, erro: string): string | null {
		if (Validador.naoNulo(valor, erro)) return erro
		return valor!.trim() !== '' ? null : erro
	}

	// prettier-ignore
	// garantir que o tamanho do valor seja menor que o tamanho máximo
	static tamanhoMenorQue(valor: string | any[], tamanhoMaximo: number, erro: string): string | null {
		return valor.length < tamanhoMaximo ? null : erro
	}

	static isEmailValido(email: string): boolean {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		return regex.test(email)
	}
}

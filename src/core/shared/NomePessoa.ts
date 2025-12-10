import Erros from '../constants/Erros'
import Validador from '../utils/Validador'

export default class NomePessoa {
	readonly nome: string

	constructor(nome?: string) {
		this.nome = nome?.trim() ?? '' // remove espaços em branco no início e no fim

		const erros = Validador.combinar(
			Validador.naoVazio(this.nome, Erros.NOME_VAZIO), // garantir que no nome nao esteja null, undefined ou vazio
			Validador.tamanhoMaiorQue(this.nome, 4, Erros.NOME_PEQUENO), // garantir que o nome nao seja menor que 4 caracteres
			Validador.tamanhoMenorQue(this.nome, 121, Erros.NOME_GRANDE), // garantir que o nome nao seja maior que 120 caracteres
			Validador.naoVazio(this.nome.split(' ')[1], Erros.NOME_SEM_SOBRENOME), // garantir que o nome tenha sobrenome
			Validador.regex(this.nome, /^[a-zA-ZÀ-ú'-\.\s]+$/, Erros.NOME_CARACTERES_INVALIDOS) // garantir que o nome nao tenha caracteres inválidos
		)

		if (erros) throw new Error(erros.join(', '))
	}

	get completo() {
		return this.nome
	}

	get primeiroNome() {
		return this.nome.split(' ')[0]
	}

	get sobrenomes(): string[] {
		return this.nome.split(' ').slice(1)
	}

	get ultimoSobrenome(): string {
		return this.nome.split(' ').pop() as string
	}
}

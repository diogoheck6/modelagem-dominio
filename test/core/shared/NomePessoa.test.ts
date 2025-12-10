import Erros from '@/core/constants/Erros'
import NomePessoa from '@/core/shared/NomePessoa'

test('Deve lançar erro ao tentar criar um nome vazio', () => {
	expect(() => new NomePessoa('')).toThrow(Erros.NOME_VAZIO)
	expect(() => new NomePessoa()).toThrow(Erros.NOME_VAZIO)
})

test('Deve lançar erro ao tentar criar nome menor que 4 caracteres', () => {
	expect(() => new NomePessoa('Li Z')).toThrow(Erros.NOME_PEQUENO)
})

test('Deve lançar erro ao tentar criar nome maior que 120 caracteres', () => {
	const nomeGigante =
		'Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Habsburgo'
	expect(() => new NomePessoa(nomeGigante)).toThrow(Erros.NOME_GRANDE)
})

test('Deve lançar erro ao tentar criar nome sem sobrenome', () => {
	expect(() => new NomePessoa('Madonna')).toThrow(Erros.NOME_SEM_SOBRENOME)
})

test('Deve lançar erro ao tentar criar nome com caracteres inválidos', () => {
	expect(() => new NomePessoa('John @Doe')).toThrow(Erros.NOME_CARACTERES_INVALIDOS)
})

test('Deve criar nome e dois sobrenomes', () => {
	const nome = new NomePessoa('João Silva Pereira')
	expect(nome.completo).toBe('João Silva Pereira')
	expect(nome.primeiroNome).toBe('João')
	expect(nome.sobrenomes).toEqual(['Silva', 'Pereira'])
	expect(nome.ultimoSobrenome).toBe('Pereira')
})

import Erros from '@/core/constants/Erros'
import Pessoa from '@/core/pessoa/Pessoa'
import Id from '@/core/shared/Id'

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', () => {
	expect(() => new Pessoa({ nome: '', cpf: '' })).toThrow(Erros.NOME_VAZIO)
})

test('Deve criar uma pessoa válida', () => {
	const pessoa = new Pessoa({ nome: 'Pedro Augusto Soares', cpf: '28001238938' })
	expect(pessoa.nome.primeiroNome).toBe('Pedro')
	expect(pessoa.id.novo).toBeTruthy()
	expect(pessoa.cpf.formatado).toBe('280.012.389-38')
})

test('Deve clonar objeto com nome alterado', () => {
	const pessoa = new Pessoa({ nome: 'Pedro Augusto Soares', cpf: '28001238938' })
	const novaPessoa = pessoa.clone({ nome: 'Pedro Augusto Pereira' })
	expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
	expect(novaPessoa.id.valor).toBe(pessoa.id.valor)
	expect(novaPessoa.nome.completo).toBe('Pedro Augusto Pereira')
})

test('Deve clonar objeto com id alterado', () => {
	const pessoa = new Pessoa({ nome: 'Pedro Augusto Soares', cpf: '28001238938' })
	const novaPessoa = pessoa.clone({ id: Id.novo.valor })
	expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
	expect(novaPessoa.nome.completo).toBe(pessoa.nome.completo)
	expect(novaPessoa.id.valor).not.toBe(pessoa.id.valor)
})

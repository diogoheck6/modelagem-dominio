import Validador from '@/core/utils/Validador'

test('Deve retornar null com texto não nulo', () => {
	const erro = Validador.naoNulo('Bom dia', 'Texto inválido')
	expect(erro).toBeNull()
})

test('Deve retornar erro com texto nulo', () => {
	const msgErro = 'Texto inválido'
	const erro = Validador.naoNulo(null, msgErro)
	expect(erro).toBe(msgErro)
})

test('Deve retornar null com texto não vazio', () => {
	const erro = Validador.naoVazia('ABC', 'Texto vazio')
	expect(erro).toBeNull()
})

test('Deve retornar erro com texto vazio', () => {
	const msgErro = 'Texto vazio'
	const e1 = Validador.naoVazia('      ', msgErro)
	expect(e1).toBe(msgErro)
})

test('Deve retornar erro com texto null', () => {
	const msgErro = 'Texto vazio'
	const e1 = Validador.naoVazia(null, msgErro)
	expect(e1).toBe(msgErro)
})

test('Deve retornar erro com texto undefined', () => {
	const msgErro = 'Texto vazio'
	const e1 = Validador.naoVazia(undefined, msgErro)
	expect(e1).toBe(msgErro)
})

test('Deve retornar null com texto menor que o tamanho máximo', () => {
	const erro = Validador.tamanhoMenorQue('teste', 6, 'erro')
	expect(erro).toBeNull()
})

test('Deve retornar erro com texto maior ou igual ao tamanho máximo', () => {
	const erro = Validador.tamanhoMenorQue('Bom dia', 6, 'erro')
	expect(erro).toBe('erro')
})

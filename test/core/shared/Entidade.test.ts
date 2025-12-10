import Entidade, { EntidadeProps } from '@/core/shared/Entidade'

interface TesteProps extends EntidadeProps {
	nome?: string
	idade?: number
}

class Teste extends Entidade<Teste, TesteProps> {
	constructor(props: TesteProps) {
		super(props)
	}
}

test('Deve comparar duas entidades diferentes', () => {
	const e1 = new Teste({ nome: 'Pedro', idade: 18 })
	const e2 = new Teste({ nome: 'Pedro', idade: 18 })

	expect(e1.igual(e2)).toBe(false)
	expect(e1.diferente(e2)).toBe(true)
})

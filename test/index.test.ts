import { somar } from '@/index'

test('Deve somar dois números', () => {
	expect(somar(2, 3)).toBe(5)
})

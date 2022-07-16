import { render } from '@testing-library/react'

import List, { ItemProps } from './List'

function renderList(props: Partial<ItemProps> = {}) {
    const defaultProps: ItemProps = {
        items: [
            { id: '1', title: 'test1' },
            { id: '2', title: 'test2' },
        ],
    }

    return render(<List {...defaultProps} />)
}

describe('<List />', () => {
    test('should display a List component, with render function', async () => {
        const { findByText } = renderList()
        const testDiv = await findByText('Selected items :')

        expect(testDiv).toBeTruthy()
    })

    test('should display a List component with rendered items', async () => {
        const { findByText } = renderList()
        const test1 = await findByText('test1')
        const test2 = await findByText('test2')

        expect(test1).toBeTruthy()
        expect(test2).toBeTruthy()
    })

    test('should display a List component with rendered items', async () => {
        const { findByText } = renderList()
        const test1 = await findByText('test1')
        const test2 = await findByText('test2')

        expect(test1).toBeTruthy()
        expect(test2).toBeTruthy()
    })
})

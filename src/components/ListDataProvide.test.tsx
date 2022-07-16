import { render, fireEvent } from '@testing-library/react'

import ListDataProvider, { ChildProps } from './ListDataProvider'

function renderListDataProvider(props: Partial<ChildProps> = {}) {
    const defaultProps: ChildProps = {
        itemSelected() {},
        checked: ['1', '2'],
    }

    return render(
        <ListDataProvider
            {...defaultProps}
            render={(defaultProps: ChildProps) => (
                <div>
                    Test
                    <input
                        data-testid="inputCheck"
                        type="checkbox"
                        className="w-5 h-5"
                        value="3"
                        onChange={props.itemSelected}
                    />
                    <div>
                        Selected Items: {defaultProps.checked.toString()}{' '}
                    </div>
                </div>
            )}
        />
    )
}

describe('<ListDataProvider />', () => {
    test('should display a ListDataProvider, with render function', async () => {
        const { findByText } = renderListDataProvider()
        const testDiv = await findByText('Test')

        expect(testDiv).toBeTruthy()
    })

    test('should allow checkbox selection on click event', async () => {
        const itemSelected = jest.fn()
        const { findByTestId } = renderListDataProvider({ itemSelected })
        const inputCheck = await findByTestId('inputCheck')
        fireEvent.click(inputCheck)

        expect(itemSelected).toHaveBeenCalledTimes(1)
    })
})

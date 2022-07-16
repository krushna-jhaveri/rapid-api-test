import * as React from 'react'

export type ListState = {
    checked: string[]
}

export type ChildProps = ListState & {
    itemSelected(event: React.ChangeEvent<HTMLInputElement>): void
}

export type ListProps = {
    render(state: ChildProps): React.ReactNode
}

class ListDataProvider extends React.Component<ListProps, ListState> {
    readonly state: ListState = {
        checked: [],
    }

    handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        var updatedList: string[] = [...this.state.checked]
        if (event.target.checked) {
            updatedList = [...this.state.checked, event.target.value]
        } else {
            updatedList.splice(
                this.state.checked.indexOf(event.target.value),
                1
            )
        }
        this.setState({ checked: updatedList })
    }

    render() {
        return this.props.render({
            ...this.state,
            itemSelected: this.handleCheck,
        })
    }
}
export default ListDataProvider

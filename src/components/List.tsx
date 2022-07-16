import React from 'react'
import ListDataProvider, { ChildProps } from './ListDataProvider'

export type ItemProps = {
    items: Object[]
}

class List extends React.Component<ItemProps> {
    render() {
        const { items } = this.props
        return (
            <ListDataProvider
                render={(props: ChildProps) => (
                    <div
                        className="flex flex-col justify-center h-full"
                        data-testid="listDiv"
                    >
                        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <header className="px-5 py-4 border-b border-gray-100">
                                <div className="font-semibold text-gray-800">
                                    Selected items : {props.checked.toString()}
                                </div>
                            </header>

                            <div className="overflow-x-auto p-3">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th></th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">
                                                    Info
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-base divide-y divide-gray-100 text-left">
                                        {items.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="p-2 align-baseline">
                                                            <input
                                                                type="checkbox"
                                                                className="w-5 h-5"
                                                                value={index}
                                                                onChange={
                                                                    props.itemSelected
                                                                }
                                                            />
                                                        </td>

                                                        <td className="p-2">
                                                            {Object.values(
                                                                item
                                                            ).map(
                                                                (
                                                                    value: any
                                                                ) => {
                                                                    return (
                                                                        <div
                                                                            className="font-medium text-gray-800"
                                                                            key={
                                                                                value
                                                                            }
                                                                        >
                                                                            {
                                                                                value
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}
export default List

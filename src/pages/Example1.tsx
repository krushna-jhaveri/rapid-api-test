import React from 'react'
import List from '../components/List'
import example1 from '../data/example1.json'

class Example1 extends React.Component {
    render() {
        return <List items={example1} />
    }
}
export default Example1

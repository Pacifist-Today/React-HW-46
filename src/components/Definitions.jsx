import React from "react";

class DefinitionsList extends React.Component {
    render() {
        return this.props.data.map(obj => {
            return (
            <dl>
                <dt key={obj.id}>{obj.dt}</dt>
                <dd key={obj.id}>{obj.dd}</dd>
            </dl>
            )
        })
    }
}

export default DefinitionsList
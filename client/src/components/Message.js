import React from "react"

class Message extends React.Component {
    state = { yesorno: '' }

    renderYesNoButtons = () => {
        const { isYesNo } = this.props
        if (isYesNo) {
            return (
                <div className="ui buttons">
                    <button className="ui positive button" value="yes" onClick={this.handleYesorNoClicked}>Yes</button>
                    <div className="or"></div>
                    <button className="ui negative button" value="no" onClick={this.handleYesorNoClicked}>No</button>
                </div >
            )
        }
    }

    //use aysnc/await because state was stale it was only updating the second time clicking
    handleYesorNoClicked = async e => {
        await this.setState({ yesorno: e.currentTarget.value })
        this.props.onClickYesNo(this.state.yesorno)
    }

    render() {
        const { iconName, message } = this.props
        return (
            <div className="ui large message" >
                <div className="ui comments">
                    <div className="comment">
                        <i className={`${iconName} avatar icon large right`}></i>
                        <div className="content">
                            <div className="text">
                                {message}
                            </div>
                            {this.renderYesNoButtons()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Message


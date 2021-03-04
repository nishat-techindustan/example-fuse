import React from 'react'


interface Props {
    children: React.ReactChild
}

const ChatDrawer = (props: Props) => {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}

export default ChatDrawer


import React from 'react'
import {FontSize} from '@ds.e/foundation'

interface TextProps {
    size?: keyof typeof FontSize,
    children: React.ReactNode; // Include children in the TextProps interface
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `dse-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text

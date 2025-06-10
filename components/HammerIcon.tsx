import React from 'react'

interface HammerIconProps {
    size?: number
    color?: string
}

const HammerIcon: React.FC<HammerIconProps> = ({ size = 24, color = 'white' }) => {
    const scale = size / 32;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" stroke={color} strokeWidth={2}>
                {/* Terminal/Command prompt */}
                <rect x="6" y="8" width="20" height="16" rx="2"/>
                <path d="M10 13 L13 16 L10 19" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="15" y1="19" x2="20" y2="19" strokeLinecap="round"/>
            </g>
        </svg>
    )
}

export default HammerIcon
import React from 'react'

interface HammerIconProps {
    size?: number
    color?: string
}

const HammerIcon: React.FC<HammerIconProps> = ({ size = 24, color = 'white' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill={color} transform="translate(16, 16)">
                <g transform="rotate(-45)">
                    {/* Handle */}
                    <rect x="-2" y="0" width="4" height="12" rx="1"/>
                    {/* Head */}
                    <rect x="-5" y="-3" width="10" height="5" rx="1"/>
                    {/* Claw part */}
                    <path d="M 5 -3 L 5 -1 L 8 -1 L 8 1 L 5 1 L 5 2 L 9 2 L 9 -3 Z"/>
                </g>
            </g>
        </svg>
    )
}

export default HammerIcon
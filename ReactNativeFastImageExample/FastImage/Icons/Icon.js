import React from 'react'
import Base from 'react-native-vector-icons/Ionicons'

const Icon = ({ size, name, focusedName, focused, tintColor }) => (
    <Base
        name={focused ? focusedName : name}
        size={size}
        style={{ width: size, height: size }}
        color={tintColor}
    />
)

Icon.defaultProps = {
    size: 26,
}

export default Icon
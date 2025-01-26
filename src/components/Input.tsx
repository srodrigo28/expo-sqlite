import {TextInput, TextInputProps} from 'react-native'

export function Input({ ...rest }: TextInputProps ){
    return <TextInput 
        style={{ 
            height: 48, borderWidth: 1, 
            color: 'white', fontSize: 18,
            borderColor: '#999', borderRadius: 7, paddingHorizontal: 16
        }} {...rest}
    />
}
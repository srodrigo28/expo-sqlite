import { Input } from '@/components/Input'
import { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function Index(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState([])



    return(
        <View style={{ flex: 1, justifyContent: 'center', padding: 32, gap: 16, backgroundColor: 'black'}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Hello React Native</Text>

            <Input placeholder='nome' />
            <Input placeholder='Quantidade' keyboardType='number-pad'/>

            <Button title='Cadastrar' />
        </View>
    )
}
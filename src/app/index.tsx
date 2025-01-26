import { Input } from '@/components/Input'
import { useProductDatabase } from '@/database/useProductDatabase'
import { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'

export default function Index(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState([])

    const productDatabase = useProductDatabase()

   async function create(){

        try{    
            if(isNaN(Number(quantity))){
                return Alert.alert('Quantidade', 'A quantidade precisa ser um número')
            }
            const response = await productDatabase.create({name, quantity: Number(quantity)})
            return Alert.alert("Produco cadastrado: ID: " + response.insertedRowId)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <View style={{ flex: 1, justifyContent: 'center', padding: 32, gap: 16, backgroundColor: 'black'}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Hello React Native</Text>

            <Input placeholder='nome' onChangeText={setName} value={name} />
            <Input placeholder='Quantidade' onChangeText={setQuantity} value={quantity}  keyboardType='number-pad'/>

            <Button title='Cadastrar' onPress={create} />
        </View>
    )
}
import React from 'react'
import { Avatar, Row } from '@committed/components'

export interface FormIndicatorProps {
    form: boolean[]
}

const FormAvatar: React.FC<{good: boolean}> = ({good}) => {
    return <Avatar m={1} bgcolor={good ? "green" : "red"} size={18}> </Avatar>
}

export const FormIndicator: React.FC<FormIndicatorProps> = ({form}) => {
    return (
        <Row justifyContent="center">
            {form.map((v, i) => <FormAvatar good={v} key={i}/>)}
        </Row>
    )
}
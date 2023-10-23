import * as React from 'react';
import { Html } from '@react-email';
import { Button } from '@react-email/button';

export function Email(props){
    const { url } = props;

    return (
        <Html>
            <Button href={url}>Click me</Button>
        </Html>
    );
}

export default Email;
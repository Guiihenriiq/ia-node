import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

client.chat.completions.create({
    model: 'gpt-4.o-mini',
    messages: [
        {
            role: 'user',
            content: 'Escreva uma mensagem de uma frase sobre unicórnios.'
        },
    ],
}).then((completions) => {
    console.log(completions.choices[0].message.content);
})
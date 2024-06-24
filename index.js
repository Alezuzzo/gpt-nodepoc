const {OpenAI} = require("openai");

const openai = new OpenAI({
    apiKey: 'YOUR KEY'
});

const runPrompt = async () => {
    const prompt = "Tell me a joke about a cat";

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        prompt: prompt,
        max_tokens: 56,
        temperature: 0.5,
    })

    console.log(JSON.stringify(response.choices[0].message));
}

runPrompt();
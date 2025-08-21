const generatePrompt = (name, url, code = null) => {
    return `You are a pharmaceutical AI expert.

Verify if the medicine below is genuine or fake:

- Name: ${name}
- Image: ${url}
${code ? `- Code: ${code}` : ''}

Reply with:
1. Summary (use, brand, ingredients)
2. Does image match official packaging?
3. Signs of being fake (if any)
4. Confidence of authenticity (0–100%)

Be concise and factual.`.trim();

};

module.exports = generatePrompt;

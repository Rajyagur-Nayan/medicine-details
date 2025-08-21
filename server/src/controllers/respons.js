function parseGeminiResponse(reply) {
    const response = {
        summary: '',
        packaging_match: null,
        packaging_analysis: '',
        possible_fake_reasons: [],
        confidence_score: '',
        conclusion: ''
    };

    const lines = reply.split('\n').map(line => line.trim()).filter(Boolean);

    for (const line of lines) {
        if (line.startsWith('1. **Summary:**')) {
            response.summary = line.replace('1. **Summary:**', '').trim();
        } else if (line.startsWith('2. **Does image match official packaging?:**')) {
            const content = line.replace('2. **Does image match official packaging?:**', '').trim();
            response.packaging_match = content.toLowerCase().startsWith('yes');
            response.packaging_analysis = content;
        } else if (line.startsWith('3. **Signs of being fake:**')) {
            const content = line.replace('3. **Signs of being fake:**', '').trim();
            response.possible_fake_reasons = content.split(/[.·•\-]/).map(r => r.trim()).filter(Boolean);
        } else if (line.startsWith('4. **Confidence of authenticity (0-100%):**')) {
            response.confidence_score = line.replace('4. **Confidence of authenticity (0-100%):**', '').trim();
        }
    }

    response.conclusion = response.confidence_score === '0%'
        ? 'The image lacks essential information to verify authenticity.'
        : 'Based on available information, the product seems more likely to be genuine.';

    return response;
}

module.exports = parseGeminiResponse;
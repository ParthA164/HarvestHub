const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function cropPredictorServices(soil, altitude, temperature, humidity, rainfall) {

  // For text-only input, use the gemini-1.5-flash model with enhanced configuration
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {
      temperature: 0.7, // Balanced creativity and consistency
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 2048, // Allow for longer, more detailed responses
    },
  });

  
  const prompt = `You are an expert agricultural consultant specializing in crop selection based on environmental conditions. Analyze the following environmental factors and provide comprehensive crop recommendations:

Environmental Conditions:
- Soil Type: ${soil}
- Altitude: ${altitude} km above sea level
- Average Temperature: ${temperature}°C
- Humidity: ${humidity}%
- Annual Rainfall: ${rainfall} mm

Please provide detailed recommendations including:

1. PRIMARY CROPS (5-7 most suitable crops):
   - List the best crop options with brief explanations of why they're suitable
   - Include both food crops and cash crops

2. SECONDARY CROPS (3-5 alternative options):
   - Crops that can work with some modifications or additional care
   - Include seasonal variations if applicable

3. CROP CATEGORIES:
   - Cereals & Grains
   - Vegetables
   - Fruits
   - Legumes & Pulses
   - Cash Crops (if applicable)
   - Fodder Crops (if applicable)

4. SPECIFIC CONSIDERATIONS:
   - Mention any soil amendments needed
   - Water management requirements
   - Best planting seasons
   - Expected yield potential (high/medium/low)

5. RISK FACTORS & MITIGATION:
   - Potential challenges with these conditions
   - Suggested solutions or precautions

Please format your response in a clear, structured manner that would be useful for farmers making crop selection decisions. Consider both subsistence farming and commercial cultivation opportunities.

Validation: Ensure altitude (0-10 km), temperature (-50 to 50°C), humidity (0-100%), and rainfall (0-1000 mm) are within realistic ranges.`;


    // For streaming purpose
    //   const result = await model.generateContentStream(prompt);

    //   let text = "";
    //   for await (const chunk of result.stream) {
    //     const chunkText = chunk.text();
    //     console.log(chunkText);
    //     text += chunkText;
    //   }
    
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Basic validation of response quality
      if (text.length < 100) {
        throw new Error("Response too short, regenerating...");
      }
      
      return text;
    } catch (error) {
      console.error("Error generating crop predictions:", error);
      
      // Fallback with a simpler prompt if the detailed one fails
      const fallbackPrompt = `Based on ${soil} soil, ${altitude}km altitude, ${temperature}°C temperature, ${humidity}% humidity, and ${rainfall}mm rainfall, suggest 8-10 suitable crops for cultivation. Include cereals, vegetables, fruits, and legumes. Provide brief growing tips for each.`;
      
      const fallbackResult = await model.generateContent(fallbackPrompt);
      const fallbackResponse = await fallbackResult.response;
      return fallbackResponse.text();
    }
}

module.exports = {
  cropPredictorServices,
};


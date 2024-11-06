from transformers import pipeline

dialogue_generator = pipeline("text-generation", model="gpt-2")

def generate_dialogue(prompt):
    generated = dialogue_generator(prompt, max_length=50, num_return_sequences=1)
    return generated[0]["generated_text"]

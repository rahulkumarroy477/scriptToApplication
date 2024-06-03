
import json

def parse_to_json(text):

    # Remove all backticks from the JSON string
    structure_text = text.replace('`', '')
    structure_text = structure_text.replace('json', '')

    # Parse the JSON content
    structure = json.loads(structure_text)
    
    return structure

# Build a Python script that generates applications using GPT/AI



import os
import json
import logging
from dotenv import load_dotenv
from gemini_api import send_prompt_to_ai
from parseToJson import parse_to_json
from read_json_file import generate_file_paths
from folderToZip import zip_folder

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

load_dotenv()
api_key = os.getenv('API_KEY')

def create_files(file_paths):
    try:
        logging.info("Creating files...")
        for path in file_paths:
            directory = os.path.dirname(path)
            if not os.path.exists(directory):
                os.makedirs(directory)

            if not os.path.exists(path):
                if '.' in os.path.basename(path):
                    logging.info(f"Creating file: {path}")
                    # Create file
                    with open(path, 'w') as f:
                        pass  # Empty file
                else:
                    logging.info(f"Creating directory: {path}")
                    # Create directory
                    os.makedirs(path)
    except Exception as e:
        logging.error(f"Error occurred while creating files: {e}")

def get_user_input():
    try:
        logging.info("Getting user input...")
        project_name = input("Enter the project name (no spaces allowed): ")
        while ' ' in project_name:
            logging.warning("Project name should not contain spaces. Please enter a valid project name.")
            project_name = input("Enter the project name (no spaces allowed): ")
        project_description = input("Describe what you want to build: ")
        return project_name, project_description
    except Exception as e:
        logging.error(f"Error occurred while getting user input: {e}")
        return None, None

def generate_file_structure(project_name, project_description):
    try:
        logging.info("Generating file structure...")
        prompt = f"""I am building a new application called '{project_name}'. The application should {
            project_description}. Please generate a simple folder structure for this application, including all the necessary folders and files(not more than 20) typically required for such a project. Provide the folder structure in json, without explanation, just the text"""

        response_text = send_prompt_to_ai(prompt)
        logging.info("Response received from AI")

        parsed_text = parse_to_json(response_text)
        logging.info("Parsed JSON")

        paths = generate_file_paths(parsed_text)
        logging.info("File paths generated")

        # with open("folder_structure.json", "w", encoding="utf-8") as file:
        #     json.dump(parsed_text, file, indent=4)

        return paths
    except Exception as e:
        logging.error(f"Error occurred while generating file structure: {e}")
        return []

def generate_code_for_files(file_paths, project_name, project_description):
    try:
        logging.info("Generating code for files...")
        # code_file = "codeFile.txt"
        for file_path in file_paths:
            logging.info(f"Generating code for file: {file_path}")
            prompt = f"""I am building a new application called '{project_name}'. The application should {
                project_description}. Please generate the code for the following file: {file_path}. Provide the complete code, without explanation, just the text"""
            file_content = send_prompt_to_ai(prompt)

            # Remove specific markdown or language indicators
            file_content = file_content.replace('`', '')
            if ".js" in file_path:
                file_content = file_content.replace('javascript', '')
            elif ".html" in file_path:
                file_content = file_content.replace("html", "", 1)
            elif ".css" in file_path:
                file_content = file_content.replace("css", "", 1)

            logging.info("Received code from AI")
            # Write to each file directly
            with open(file_path, 'a', encoding="utf-8") as file:
                file.write(file_content)

            # # Also write to the global code file
            # with open(code_file, 'a', encoding="utf-8") as file:
            #     file.write(f"{file_path}\n\n{file_content}\n\n\n")
    except Exception as e:
        logging.error(f"Error occurred while generating code for files: {e}")

def main():
    try:
        logging.info("Starting application...")
        project_name, project_description = get_user_input()    # get user input
        if project_name is None or project_description is None:
            return

        # Generate the folder structure and relative file path
        file_paths = generate_file_structure(project_name, project_description)
        logging.info("File paths: %s", file_paths)

        create_files(file_paths)

        # Generate and write code for files
        generate_code_for_files(file_paths, project_name, project_description)
        
        # Zip the folder
        folder_path = project_name
        zip_path = project_name + '.zip'
        zip_folder(folder_path, zip_path)
        
    except Exception as e:
        logging.error(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()

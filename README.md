

# AI-Driven Application Generator

This project demonstrates an AI-driven approach to automatically generate a basic application structure and code using Google’s Gemini API. The project involves generating a folder structure and populating it with code based on user input.

## Features

- **Interactive User Input:** Accepts project name and description from the user.
- **Folder Structure Generation:** Utilizes AI to create a JSON-based folder structure.
- **Code Generation:** Generates code for each file in the folder structure using AI.
- **Zip Folder:** Compresses the generated project into a zip file for easy distribution.
- **Logging:** Provides detailed logs with timestamps for tracking the process.

## Prerequisites

- Python 3.6+
- An API key for the Google Gemini API
- Libraries: `dotenv`, `google-generativeai`, `json`, `os`, `logging`

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-repo/ai-driven-app-generator.git
    cd ai-driven-app-generator
    ```

2. **Create and activate a virtual environment:**

    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install the required packages:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**

    Create a `.env` file in the project root and add your Gemini API key:

    ```env
    API_KEY=your_gemini_api_key
    ```

## Usage

1. **Run the main script:**

    ```sh
    python main_script.py
    ```

2. **Follow the prompts to enter the project name and description:**

    - Enter the project name (no spaces allowed).
    - Provide a brief description of what you want to build.

3. **The script will:**
    - Generate the folder structure based on the project description.
    - Create the necessary files and directories.
    - Populate the files with generated code.
    - Compress the project into a zip file.

4. **Check the project directory:**
    - The generated project structure will be created in the current directory.
    - The compressed zip file will be saved in the current directory.

## Project Structure

```
ai-driven-app-generator/
│
├── gemini_api.py         # Handles AI interactions
├── main_script.py        # Main script to run the application
├── parseToJson.py        # Parses AI response to JSON
├── read_json_file.py     # Reads JSON and generates file paths
├── folderToZip.py        # Utility to compress folder into a zip file
├── requirements.txt      # Required Python packages
├── .env                  # Environment variables (API key)
└── README.md             # Project documentation
```

## Logging

Logs are provided at each step with timestamps to track the process and debug if necessary. The log messages include:

- When files and directories are created.
- When user input is being received.
- When the AI response is received and processed.
- When the code is generated for each file.
- When errors occur during any process.

## Example

```
Starting application...
Getting user input...
Generating file structure...
Response received from AI
Parsed JSON
File paths generated
Creating files...
Creating directory: myproject/src
Creating file: myproject/src/index.js
Generating code for files...
Generating code for file: myproject/src/index.js
Received code from AI
Zipping the folder...
```

## Contributing

Feel free to fork the repository and submit pull requests. Any improvements or bug fixes are welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or suggestions, please contact [your-email@example.com].

---

This README provides a comprehensive guide to understand, set up, and run the project, making it easier for others to use and contribute.

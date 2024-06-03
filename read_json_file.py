import os

def generate_file_paths(folder_structure, base_path=''):
    file_paths = []
    for name, content in folder_structure.items():
        # Check if the content is a dictionary (subfolder)
        if isinstance(content, dict):
            # Generate file paths for its children
            file_paths.extend(generate_file_paths(
                content, base_path=os.path.join(base_path, name)))
        # Check if the content is a string (file name)
        elif isinstance(content, str):
            # Generate the file path
            file_paths.append(os.path.join(base_path, name))
        else:
            # Content is neither a dictionary nor a string (invalid structure)
            raise ValueError(f"Invalid content type for {name}: {type(content)}")
    return file_paths



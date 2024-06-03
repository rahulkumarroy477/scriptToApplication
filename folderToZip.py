import os
import zipfile

def zip_folder(folder_path, zip_path):
    # Create a ZipFile object
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Walk through the folder and add files to the zip file
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                # Create the complete file path
                file_path = os.path.join(root, file)
                # Add file to the zip file, preserving the folder structure
                zipf.write(file_path, os.path.relpath(file_path, folder_path))


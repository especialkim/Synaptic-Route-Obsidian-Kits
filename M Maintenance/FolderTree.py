"""
```python """

import os

def display_folder_tree(target_folder, prefix=""):
    folders = sorted([f for f in os.listdir(target_folder) if os.path.isdir(os.path.join(target_folder, f))])
    
    for i, folder in enumerate(folders):
        is_last = i == len(folders) - 1
        print(f"{prefix}{'└── ' if is_last else '├── '}{folder}")
        
        new_prefix = prefix + ("    " if is_last else "│   ")
        folder_path = os.path.join(target_folder, folder)
        try:
            display_folder_tree(folder_path, new_prefix)
        except PermissionError:
            print(f"{new_prefix}└── (권한 없음)")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.abspath(os.path.join(current_dir, ".."))
    print(os.path.basename(parent_dir))
    display_folder_tree(parent_dir)
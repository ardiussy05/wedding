import os
import sys

base_dir = r'c:\laragon\www\wedding'
dirs = [
    'css',
    'js',
    r'assets\images',
    r'assets\music',
    r'assets\sounds'
]

print('Creating folder structure...\n')

for dir_name in dirs:
    full_path = os.path.join(base_dir, dir_name)
    try:
        if not os.path.exists(full_path):
            os.makedirs(full_path, exist_ok=True)
            print(f'✓ Created: {dir_name}')
        else:
            print(f'✓ Exists: {dir_name}')
    except Exception as e:
        print(f'✗ Failed to create: {dir_name}')
        print(f'  Error: {str(e)}')

print('\nVerifying folder structure:\n')

for dir_name in dirs:
    full_path = os.path.join(base_dir, dir_name)
    if os.path.exists(full_path) and os.path.isdir(full_path):
        print(f'✓ {dir_name}')
    else:
        print(f'✗ {dir_name} (MISSING)')

<?php
// Create necessary folders for wedding website
$basePath = 'C:\laragon\www\wedding';
$folders = [
    $basePath . '\css',
    $basePath . '\js',
    $basePath . '\assets\images',
    $basePath . '\assets\music',
    $basePath . '\assets\sounds'
];

foreach ($folders as $folder) {
    if (!is_dir($folder)) {
        mkdir($folder, 0777, true);
        echo "Created: $folder\n";
    } else {
        echo "Exists: $folder\n";
    }
}

echo "\nFolder structure created successfully!\n";
echo "Ready to add CSS and JS files.\n";
?>

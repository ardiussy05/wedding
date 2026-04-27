<?php
$baseDir = 'c:\laragon\www\wedding';
$dirs = array(
    'css',
    'js',
    'assets/images',
    'assets/music',
    'assets/sounds'
);

echo "Creating folder structure...\n";
foreach ($dirs as $dir) {
    $path = $baseDir . '\\' . str_replace('/', '\\', $dir);
    if (!is_dir($path)) {
        if (mkdir($path, 0777, true)) {
            echo "✓ Created: $dir\n";
        } else {
            echo "✗ Failed to create: $dir\n";
        }
    } else {
        echo "✓ Exists: $dir\n";
    }
}

echo "\nVerifying folder structure:\n";
foreach ($dirs as $dir) {
    $path = $baseDir . '\\' . str_replace('/', '\\', $dir);
    if (is_dir($path)) {
        echo "✓ $dir\n";
    } else {
        echo "✗ $dir (MISSING)\n";
    }
}
?>

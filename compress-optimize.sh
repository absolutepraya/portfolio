#!/bin/bash

# Get the script's filename
script_name=$(basename "$0")

# Go to source directory
cd "src"

# Compress all files in the current directory (quality: 100%) and delete the original files
find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) ! -path "./node_modules/*" ! -path "./.git/*" ! -name "$script_name" | while read img; do
    cwebp -q 100 "$img" -o "${img%.*}.webp"
    if [ $? -eq 0 ]; then
        rm "$img"
    fi
done

echo "---------------"
echo "All .png, .jpg, and .jpeg files have been compressed and the original files have been deleted."
echo "---------------"

# Optimize SVGs
find . -type f -name "*.svg" ! -path "./node_modules/*" ! -path "./.git/*" ! -name "$script_name" | while read svg; do
    svgo "$svg"
done

echo "---------------"
echo "All SVG files have been optimized."
echo "---------------"

# Find all files in the directory and its subdirectories
find . -type f ! -path "./node_modules/*" ! -path "./.git/*" ! -name "$script_name" | while read -r file; do
    # Replace .png, .jpg, and .jpeg with .webp in each file
    sed -i 's/\.png/\.webp/g; s/\.jpg/\.webp/g; s/\.jpeg/\.webp/g' "$file"
done

echo "---------------"
echo "All .png, .jpg, and .jpeg references have been changed to .webp."
echo "---------------"

# Go back to the root directory
cd ..
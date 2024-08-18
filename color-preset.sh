#!/bin/bash

# Get the script's filename
script_name=$(basename "$0")

# Go to source directory
cd "src"

# Find all files in the directory and its subdirectories
find . -type f ! -path "./node_modules/*" ! -path "./.git/*" ! -name "$script_name" | while read -r file; do
    # Replace color codes with color names, ignoring case
    sed -i 's/\[#3643FC\]/blurple/Ig; s/\[#0d0d0d\]/customblack/Ig; s/\[#262626\]/customgray/g; s/\[#cccccc\]/customwhite/Ig' "$file"
done

echo "---------------"
echo "Color codes have been replaced with color names."
echo "---------------"

# Go back to the root directory
cd ..
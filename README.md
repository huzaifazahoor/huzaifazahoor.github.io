## Generating Tailwind CSS Output

To generate `output.css` from `input.css` using Tailwind CSS with a custom configuration, follow these steps:

1. **Ensure `tailwindcss-windows.x64.exe`** is in the project directory or added to your system path.

2. **Run the following command** to generate `output.css` and watch for changes:

   ```bash
   ./tailwindcss-windows-x64.exe -i ./input.css -o ./output.css --config ./tailwind.config.js --watch```
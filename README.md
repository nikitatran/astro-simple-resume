# Simple Resume Theme for Astro

> [!WARNING]
> This project is a work in progress! Certain features may not work at the moment.

Simplistic text-based resume theme utilizing Markdown and Tailwind CSS. Built with Astro.

Demo Site [Coming Soon]

## How to edit
Modify the `.md` and `user_info.json` files in the ``src/resume_sections`` folder with your information to populate the template. The contents within the `.md` files correspond to individual sections of your resume (eg. Work History, Education, Certifications, etc.)

`user_info.json` corresponds to the resume header where you put in your name, email, phone number, social media links, etc.

### How to make a new resume section
Simply make a new `.md` file in the `src/resume_sections` folder and the page will render a new section.

### How to re-order template sections
The resume sections are sorted by the filename of the `.md` files (descending order) in the ``src/resume_sections`` folder. I recommend prefixing your `.md` filenames with a number or by alphabet such as `1_sectionname` or `a_sectionname` so that it sorts correctly.

### How to rename tab name/title bar name
In ``src/index.html``, change the `title` property of the `ResumeLayout` component to your desired text.

### How to change icons used in resume header
By default, the resume header uses SVG icons from the Material Design Icons iconset. If you want to change the icons, go to the `user_info.json` file and change the `iconName`. You can go to [Iconify](https://icon-sets.iconify.design/mdi/) to figure out what icon name to use. Note that you must prefix the name with `mdi:` when referring to an icon from that set.

If you want to use your own custom SVGs or use a different icon set from icon-sets, please refer to [astro-icon](https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#usage) documentation.

# UI
Images coming soon!
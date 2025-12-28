# Tanisha Singh - Interactive Portfolio Website

A modern, fully interactive personal portfolio built with vanilla JavaScript, featuring advanced DOM manipulation, form validation, dark mode, and local storage functionality.

## 🌟 Features Overview

### Interactive Elements
- **Scroll Reveal Animations**: Smooth fade-in effects using Intersection Observer API
- **Dynamic Navbar**: Responsive navigation that changes height and shadow on scroll
- **Dark/Light Mode Toggle**: Theme switcher with persistent preference storage
- **Scroll-to-Top Button**: Appears after scrolling down, smooth return to top
- **Hover Effects**: Enhanced animations on project cards and skill cards
- **Smooth Scroll Navigation**: Offset-adjusted scrolling to sections

### Form Validation
- **Real-time Validation**: Immediate feedback on form fields
- **Name Validation**: 
  - Required field
  - Minimum 2 characters
  - Only letters and spaces allowed
- **Email Validation**: 
  - Required field
  - Valid email format required
- **Message Validation**: 
  - Required field
  - Minimum 10 characters
- **Error Messages**: Clear, specific error messages for each field
- **Success Feedback**: Green success banner on form submission

### Local Storage Implementation
1. **Theme Preference**: Saves and loads dark/light mode choice
2. **Form Submissions**: Stores all contact form submissions with timestamps
3. **Visitor Counter**: Tracks total number of visits
4. **Last Visit Tracking**: Records and displays time since last visit

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── style.css           # All styling including dark mode
├── script.js           # JavaScript functionality
├── images/
│   └── image.png      # Profile image
└── README.md          # Project documentation
```

## 🎓 Portfolio Sections

1. **Hero Section**: Introduction with animated blob shape profile image
2. **Education**: Timeline showing academic background
3. **Technical Toolbox**: Categorized skills display
4. **Selected Projects**: Project showcase with hover effects
5. **Contact Section**: Form with validation + social links

## ⚡ Technical Highlights

### JavaScript Features
- **ES6+ Syntax**: Modern JavaScript with arrow functions, template literals
- **Intersection Observer API**: Efficient scroll-based animations
- **Event Listeners**: Click, scroll, focus, blur, hover events
- **DOM Manipulation**: Dynamic content updates and style changes
- **Local Storage API**: Persistent data storage
- **Form Validation**: Custom validation logic with regex patterns
- **Reusable Functions**: Modular, maintainable code structure

### CSS Features
- **CSS Variables**: Dynamic theming with custom properties
- **Flexbox & Grid**: Modern responsive layouts
- **Animations**: Keyframe animations and transitions
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Complete theme switching capability

### No External Dependencies
- ✅ 100% Vanilla JavaScript (No jQuery, React, etc.)
- ✅ Pure CSS (No Bootstrap, Tailwind, etc.)
- ✅ Zero npm packages required
- ✅ Lightweight and fast-loading

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code recommended)

### Installation
1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process or installation required!

### File Setup
```
1. Place index.html, style.css, and script.js in the same directory
2. Create an 'images' folder and add your profile image
3. Update image path in index.html if needed
```

## 🎯 Key JavaScript Functions

### Form Validation Functions
- `validateName()` - Validates name field with regex
- `validateEmail()` - Checks email format
- `validateMessage()` - Ensures minimum message length
- `showError()` - Displays error messages
- `clearError()` - Removes error states
- `handleFormSubmit()` - Processes and stores form data

### Interactive Features
- `updateThemeIcon()` - Switches between sun/moon icons
- `scrollToElement()` - Smooth scroll utility function
- `debounce()` - Performance optimization helper

### Storage Operations
- Theme preference saving/loading
- Form submission storage
- Visitor tracking with timestamps

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1100px+ (Full grid layout)
- **Tablet**: 768px - 1099px (Adjusted grids)
- **Mobile**: < 768px (Single column, stacked layout)

## 🎨 Customization

### Colors
Edit CSS variables in `:root` section:
```css
--primary: #6366f1;    /* Main brand color */
--dark: #0f172a;       /* Dark text */
--light: #f8fafc;      /* Light background */
```

### Content
- Update personal information in `index.html`
- Modify project descriptions and links
- Add/remove timeline items for education
- Update social media links

## 📊 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ IE11 (Not supported - uses modern JS features)

## 🔧 Technical Requirements Met

✅ Create script.js file  
✅ Implement form validation with error messages  
✅ Add 6+ interactive features  
✅ Use DOM manipulation extensively  
✅ Implement multiple event listeners  
✅ Create reusable functions  
✅ Local storage implementation (3 uses)  
✅ Responsive design  
✅ Clean, commented code  

## 📝 Code Quality

- **Organized**: Clearly commented sections
- **Modular**: Reusable functions
- **Efficient**: Uses modern APIs like Intersection Observer
- **Maintainable**: Clean variable naming and structure
- **Accessible**: Semantic HTML and ARIA labels

## 🌐 Live Features Demo

1. **Theme Toggle**: Click moon/sun icon in navbar
2. **Form Validation**: Try submitting empty or invalid fields
3. **Scroll Effects**: Watch navbar transform and elements reveal
4. **Dark Mode Persistence**: Refresh page - theme stays
5. **Form Storage**: Submit form - check browser's Local Storage
6. **Visitor Counter**: Open console to see visit tracking

## 💡 Future Enhancements

- [ ] Mobile hamburger menu
- [ ] Project filtering by technology
- [ ] Blog section
- [ ] Resume download feature
- [ ] Contact form email integration
- [ ] More animation effects
- [ ] Skills proficiency bars

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Tanisha Singh**
- LinkedIn: [Tanisha Singh](https://www.linkedin.com/in/tanisha-singh-563169296/)
- GitHub: [tannu124928](https://github.com/tannu124928)
- Email: tanishasingh270606@gmail.com
- Twitter: [@shtanisha27](https://x.com/shtanisha27)

## 🙏 Acknowledgments

- Font: Plus Jakarta Sans (Google Fonts)
- Icons: Emoji-based for simplicity
- Design Inspiration: Modern portfolio trends 2024-2025

---

**Built with ❤️ using Vanilla JavaScript, CSS3, and HTML5**

Last Updated: December 2025

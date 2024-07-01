// // DarkMode.jsx

// import React, { useEffect } from 'react';
// import './darkMode.css';

// const DarkMode = () => {
//   useEffect(() => {
//     // Проверяем, какая тема сохранена в localStorage
//     const currentTheme = localStorage.getItem('theme');
//     if (currentTheme) {
//       document.documentElement.setAttribute('data-theme', currentTheme);
//       // Устанавливаем состояние переключателя в зависимости от текущей темы
//       document.getElementById('darkmode-toggle').checked = currentTheme === 'dark';
//     }
//   }, []);

//   const setDarkMode = () => {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark'); // Сохраняем выбранную тему в localStorage
//   };

//   const setLightMode = () => {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light'); // Сохраняем выбранную тему в localStorage
//   };

//   const toggleTheme = (e) => {
//     if (e.target.checked) {
//       setDarkMode();
//     } else {
//       setLightMode();
//     }
//   };

//   return (
//     <div className='dark_mode'>
//       <input
//         className='dark_mode_input'
//         type='checkbox'
//         id='darkmode-toggle'
//         onChange={toggleTheme}
//       />
//       <label className='dark_mode_label' htmlFor="darkmode-toggle">
//         <i className="fa-regular fa-moon"></i>
//         <i className="fa-regular fa-sun"></i>
//       </label>
//     </div>
//   );
// };

// export default DarkMode;

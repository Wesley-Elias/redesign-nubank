// == == == == Scroll header == == == == // 
function scrollHeader() {
   const nav = document.getElementById('header')

   if (this.scrollY >= 50) {
      nav.classList.add('active-header')
   } else {
      nav.classList.remove('active-header')
   }
}

window.addEventListener('scroll', scrollHeader)

// == == == == Dropdown menu == == == == // 
const dropdownMenu1 = document.getElementById('dropdown-item-1')
const dropdownMenu2 = document.getElementById('dropdown-item-2')
const dropdownMenu3 = document.getElementById('dropdown-item-3')

const menuitem1 = document.getElementById('menu-item-1')
const menuitem2 = document.getElementById('menu-item-2')
const menuitem3 = document.getElementById('menu-item-3')

function showDropdown1(event) {
   event.preventDefault()
   dropdownMenu1.classList.toggle('active-dropdown-menu')
   dropdownMenu2.classList.remove('active-dropdown-menu')
   dropdownMenu3.classList.remove('active-dropdown-menu')
}

function showDropdown2(event) {
   event.preventDefault()
   dropdownMenu2.classList.toggle('active-dropdown-menu')
   dropdownMenu1.classList.remove('active-dropdown-menu')
   dropdownMenu3.classList.remove('active-dropdown-menu')
}

function showDropdown3(event) {
   event.preventDefault()
   dropdownMenu3.classList.toggle('active-dropdown-menu')
   dropdownMenu1.classList.remove('active-dropdown-menu')
   dropdownMenu2.classList.remove('active-dropdown-menu')
}

menuitem1.addEventListener('click', showDropdown1)
menuitem2.addEventListener('click', showDropdown2)
menuitem3.addEventListener('click', showDropdown3)

function removeDropdown() {
   dropdownMenu1.classList.remove('active-dropdown-menu')
   dropdownMenu2.classList.remove('active-dropdown-menu')
   dropdownMenu3.classList.remove('active-dropdown-menu')
}

dropdownMenu1.addEventListener('mouseleave', removeDropdown)
dropdownMenu2.addEventListener('mouseleave', removeDropdown)
dropdownMenu3.addEventListener('mouseleave', removeDropdown)

// == == == == Menu mobile == == == == //
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId)
   const nav = document.getElementById(navId)

   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('active-menu-mobile')
         toggle.classList.toggle('active-bx')
      })
   }
}

showMenu('bx', 'menu-mobile')
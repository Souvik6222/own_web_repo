{
  "Project menu click handler": {
    "prefix": "projectmenu",
    "body": [
      "document.addEventListener('DOMContentLoaded', () => {",
      "    const menuItems = document.querySelectorAll('.menu-item');",
      "",
      "    menuItems.forEach(item => {",
      "        item.addEventListener('click', (e) => {",
      "            e.preventDefault();",
      "",
      "            // Remove active class from all menu items",
      "            menuItems.forEach(i => i.classList.remove('active'));",
      "",
      "            // Add active class to the clicked item",
      "            item.classList.add('active');",
      "",
      "            // You can add more functionality here, like loading different content",
      "            // based on the clicked menu item.",
      "            alert(`You clicked on ${item.querySelector('span').textContent}`);",
      "        });",
      "    });",
      "});"
    ],
    "description": "Snippet for menu item click handler"
  }
}
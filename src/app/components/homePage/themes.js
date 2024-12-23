export const radioTheme = {
  "root": {
    "base": "h-3 w-3 border border-gray-300 text-forest-green focus:ring-2 focus:ring-forest-green"
  }
}

export const checkboxTheme = {
  "root": {
    "base": "h-3 w-3 rounded border border-gray-300 bg-gray-100 focus:ring-2",
    "color": {
      "default": "text-forest-green focus:ring-forest-green",
    }
  }
}

export const tabTheme = {
  "base": "flex flex-col w-full gap-2 pb-3",
  "tablist": {
    "base": "flex w-full text-center gap-3",
    "tabitem": {
      "variant": {
        "pills": {
          "base": "flex items-center h-10 border justify-center rounded-xl p-4 text-sm font-medium first:ml-0 focus:ring-0",
          "active": {
            "on": "rounded-lg bg-gray-300 text-black font-semibold",
            "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 text-black"
          }
        }
      }    }
  }
}

export const inputTheme = {
  "root": {
    "base": "flex"
  },
  "field": {
    "base": "relative w-full",
    "input": {
      "base": "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
      "sizes": {
        "sm": "sm:text-xs",
        "md": "text-sm",
        "lg": "sm:text-base"
      },
      "colors": {
        "gray": "border-gray-300 bg-gray-50 text-gray-900 focus:border-green-500 focus:ring-green-500",
      }
    }
  }
}

export const dropdownTheme = {
  "floating": {
    "content": "py-1 focus:outline-none h-64 overflow-auto",
    "floating": {
      "animation": "transition-opacity",
      "arrow": {
        "base": "absolute z-10 h-10 w-2 rotate-45",
        "style": {
          "dark": "bg-gray-900 dark:bg-gray-700",
          "light": "bg-white",
          "auto": "bg-white dark:bg-gray-700"
        },
        "placement": "-4px"
      },
      "base": "z-10 w-36 flex flex-auto divide-y divide-gray-100 rounded shadow focus:outline-none",
      "content": "py-1 text-sm text-gray-700 dark:text-gray-200",
      "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
      "header": "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    },
    "item": {
      "container": "",
      "base": "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      "icon": "mr-2 h-4 w-4"
    },
    "target": 'h-10 italic flex justify-between text-lg bg-white border border-gray-300 enabled:hover:bg-gray-400 text-gray-400 hover:text-black focus:ring-0 items-center'
  }
}
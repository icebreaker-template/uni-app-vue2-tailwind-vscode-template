const { defaultPreset } = require('tailwindcss-miniprogram-preset')

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: defaultPreset.purge.content,
  presets: [defaultPreset]
}

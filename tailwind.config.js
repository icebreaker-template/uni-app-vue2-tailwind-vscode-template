const miniprogramPreset = require('tailwindcss-miniprogram-preset')
/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: miniprogramPreset.purge.content,
  presets: [miniprogramPreset]
}

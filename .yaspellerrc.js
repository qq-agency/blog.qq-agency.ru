module.exports = {
  excludeFiles: [
    '.git',
    '.github',
    'node_modules',
  ],
  format: 'html',
  lang: 'ru',
  fileExtensions: [
    '.md',
  ],
  ignoreUrls: true,
  ignoreDigits: true,
  ignoreCapitalization: true,
  ignoreUppercase: true,
  ignoreLatin: true,
  checkYo: true,
  dictionary: [
    '(авто)?коммит.*',
    'аутсорс.*',
    'Тинькофф',
    'Смоленскэлектрокабель',
  ],
};
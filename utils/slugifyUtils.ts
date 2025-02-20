import slugify from 'slugify';

slugify(' How to slugify the title or sting in JavaScript? ', {
  replacement: '-', 
  remove: /[*+~.()'"!:@]/g,
  lower: true, 
  strict: false, 
  locale: 'en', 
  trim: true, 
});

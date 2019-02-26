const templateConfiguration = {
  preferredFormat: 'pdf',
  language: 'en',
  showCompanyLogo: true,
  showPageNumbers: false,
  fontSize: 12,
};


const customConfiguration = {
  language: 'es',
  fontSize: 14,
};


/*
 * 1) The assign() function is used to copy the values of all enumerable own properties from one or more source 
 * objects to a target object.
 */

const returnedTarget = Object.assign({}, templateConfiguration, customConfiguration);

/*
 * 2) The seal() method seals an object, preventing any new properties
 * from being add to it marking all existing properties as non-configurable.  Though values of present properties
 * can still be changed as long as they are writable.
 */

Object.seal(templateConfiguration);
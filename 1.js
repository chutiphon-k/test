// const input = [ 'AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS' ];

// const groups = {
//   a: [ 'AMOR', 'ROMA', 'OMAR', 'MORA', 'RAMO', 'ARMO', 'MARO', 'ORAM'],
//   b: [ 'XISELA', 'ALEXIS'],
//   c: [ 'JAMON', 'MOJAN', 'MONJA'],
//   d: [ 'ESPONJA', 'JAPONES'],
// }

// const temp = {};

// input.map((value) => {
//   Object.keys(groups).map((groupName) => {
//     if (groups[groupName].includes(value)) {
//       if (Array.isArray(temp[groupName])) {
//         temp[groupName].push(value);
//       } else {
//         temp[groupName] = [value];
//       }
//     }
//   })
// })

// const output = Object.values(temp);

// console.log('------------------------------------');
// console.log(output);
// console.log('------------------------------------');

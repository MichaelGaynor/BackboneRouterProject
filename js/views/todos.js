

function processData(data) {
  return data.map(function(item) {
    return `
    <li>${item.title}</li>
    `
  }).join('');
}

function todosTemplate(data) {
  return `
    <h2>Something Todo</h2>
    <ul>${processData(data)}</ul>
    `;
}

export default todosTemplate;
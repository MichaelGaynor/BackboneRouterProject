

function processData(data) {
  return data.map(function(item) {
    return `
    <li class="contactListItem" data-contact-id="${item.objectId}">${item.Name}</li>
    `
  }).join('');
}

function contactsTemplate(data) {
  return `
    <div>
    <h2>My Contacts</h2>
    <ul>${processData(data)}</ul>
    </div>
    `;
}

export default contactsTemplate;
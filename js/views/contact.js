function contactTemplate(data) {
  return `
    <div>
    <h2>${data.Name}</h2>
    <h3>${data.PhoneNumber}</h3>
    <h3>${data.Email}</h3>
    <h3>${data.Location}</h3>

    </div>
    <h3 class="Contacts">Contacts</h3>
    `
}

export default contactTemplate;
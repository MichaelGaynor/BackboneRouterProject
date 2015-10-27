function contactTemplate(data) {
  return `
    <div>
    <h2>${data.Name}</h2>
    <h3>${data.PhoneNumber}</h2>
    <h3>${data.Email}</h2>
    <h3>${data.Location}</h2>
    </div>
    `
}

export default contactTemplate;
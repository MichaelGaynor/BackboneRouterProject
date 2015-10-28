function AddContact(data){
  return `
  <div>
  <h2>Enter Info</h2>
  <form>
  Name:<br>
  <input type="text" name="Name">
  <br>Phone:<br>
  <input type="text" name="Phone">
  <br>Email:<br>
  <input type="text" name="Email">
  <br>Location:<br>
  <input type="text" name="Location">
  <br>
  </form>
  <h2>Do it, now</h2>
  <button class="submit">Submit</button>
  </div>
    <h3 class="Contacts">Contacts</h3>

  `
}

export default AddContact;
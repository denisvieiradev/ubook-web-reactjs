class ContactsConverter {
  mapperResponsesToEntities(responses) {
    const entities = [];
    responses.forEach(response => {
      entities.push(this.mapperResponseToEntity(response));
    });
    return entities;
  }

  mapperResponseToEntity(response) {
    const {
      id,
      name,
      phone_number,
      email
    } = response;

    const entity = { 
      id,
      name,
      email,
      phoneNumber: phone_number
    };

    return entity;
  }

  mapperEntityToRequest(entity, newPostKey) {
    const {
      name,
      phoneNumber,
      email
    } = entity;

    const request = { 
      id: newPostKey,
      name,
      email,
      phone_number: phoneNumber
    };

    return request;
  }
}

export default ContactsConverter;

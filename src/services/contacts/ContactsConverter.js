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
      name,
      phone_number,
      email
    } = response;

    const entity = { 
      name,
      email,
      phoneNumber: phone_number
    };

    return entity;
  }

  mapperEntityToRequest(entity) {
    const {
      name,
      phoneNumber,
      email
    } = entity;

    const request = { 
      name,
      email,
      phone_number: phoneNumber
    };

    return request;
  }
}

export default ContactsConverter;

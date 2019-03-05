class NewsConverter {
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
}

export default NewsConverter;

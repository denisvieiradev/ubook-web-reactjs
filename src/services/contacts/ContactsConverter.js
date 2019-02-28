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
      author_image_url,
      author_name,
      image_url,
      categories,
      description,
      title
    } = response;

    const entity = {
      authorImageUrl: author_image_url,
      authorName: author_name,
      imageUrl: image_url,
      categories,
      description,
      title
    };

    return entity;
  }
}

export default NewsConverter;

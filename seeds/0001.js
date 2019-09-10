
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('zoos').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('zoos').insert([
        {id: 1, colName: 'monkey'},
        {id: 2, colName: 'tiger'},
        {id: 3, colName: 't-rex'}
      ]);
    });
};

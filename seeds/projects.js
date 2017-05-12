
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Unicorn Generator', content: "Makes an app that creates awesome unicorns ", categories_id: 1},
        {id: 2, name: 'Automated Fart machine', content: "Create an app that makes fart sounds", categories_id: 1},
        {id: 3, name: 'Get lost', content: "Build an app that gets you lost", categories_id: 2},
        {id: 4, name: 'Where is the pub?', content: "Creates an app that takes you to the nearest pub", categories_id: 2},
        {id: 5, name: 'Database Database', content: "An app that generates databases", categories_id: 3},
        {id: 6, name: 'Football Database', content: "An app that tracks the misery of an every day Aston villa fan", categories_id: 3},
        {id: 7, name: 'Dinosaur runner', content: "Build that dino game", categories_id: 4},
        {id: 8, name: 'Super Mario 64', content: "Build Super Mario", categories_id: 4},
        {id: 9, name: 'MeowTown', content: "Make MeowTown", categories_id: 5},
        {id: 10, name: 'Rate my Cat', content: "Make an app that rates cats", categories_id: 5},
        {id: 11, name: 'Pupparazzi', content: "Make Pupparazzi", categories_id: 6},
        {id: 12, name: 'Give a dog a bone', content: "Makes an app that tells you when to feed your dog", categories_id: 6},
      ]);
    });
};

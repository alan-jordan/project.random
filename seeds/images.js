
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/World_Map_1689.JPG/1200px-World_Map_1689.JPG', categories_id: 2},
        {id: 2, image_url: 'http://www.freshmap.co.nz/images/enlarge2.jpg', categories_id: 2},
        {id: 3, image_url: 'https://telemachusunedited.files.wordpress.com/2011/03/lowpp.jpg', categories_id: 2},
        {id: 4, image_url: 'http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg', categories_id: 1},
        {id: 5, image_url: 'https://s-media-cache-ak0.pinimg.com/736x/14/0f/e8/140fe8e50c800327929ea3122d06bb74.jpg', categories_id: 1},
        {id: 6, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrpbQSGlzPH_7gmItPn8EsttZ9ABNgOV1l59YmAa9tLOfeOKz', categories_id: 1},
        {id: 7, image_url: 'https://betanews.com/wp-content/uploads/2013/12/database.jpg', categories_id: 3},
        {id: 8, image_url: 'https://tctechcrunch2011.files.wordpress.com/2016/02/cleandatabase.jpg?w=738', categories_id: 3},
        {id: 9, image_url: 'https://azure.microsoft.com/svghandler/sql-database?width=600&height=315', categories_id: 3},
        {id: 10, image_url: 'http://www.thetravelclub.org/images/travelogues/monopoly/Monopoly.jpg', categories_id: 4},
        {id: 11, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpx4drEKZIFiKBuLYZ6pT84i005OunB2qSj7F6pqSyTRqbIVTxg', categories_id: 4},
        {id: 12, image_url: 'http://www.arcadepunks.com/wp-content/uploads/2016/03/Atari2600.png', categories_id: 4},
        {id: 13, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyECUjfR_k_hdqBcdxm_Oo0eGdHXFBetJpq5Puay6eKG1iXfa', categories_id: 5},
        {id: 14, image_url: 'https://i.ytimg.com/vi/KJ_hM-fx-bE/maxresdefault.jpg', categories_id: 5},
        {id: 15, image_url: 'http://funnypicture.org/wallpaper/2015/03/funny-angry-cats-16-desktop-wallpaper.jpg', categories_id: 5},
        {id: 16, image_url: 'http://stories.barkpost.com/wp-content/uploads/2014/06/dog-riding-a-horse-pushed-by-a-cat-6540-600x376.jpg', categories_id: 6},
        {id: 17, image_url: 'http://media2.s-nbcnews.com/i/MSNBC/Components/Video/__NEW/nn_07_mp_surfing_dog_140727.jpg', categories_id: 6},
        {id: 18, image_url: 'https://s-media-cache-ak0.pinimg.com/originals/71/c1/02/71c1029817028be58bb853fb112b40f7.jpg', categories_id: 6},


      ]);
    });
};
